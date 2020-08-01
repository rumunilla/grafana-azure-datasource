import { AzureMonitorPluginQuery } from './../AzureMonitorPluginQuery';
import { AzureConnection } from '../azure_connection/AzureConnection';
import { doBackendRequest } from './../../app/utils';
import { PolicyInsightsResultsParser } from './PolicyInsightsResultsParser';
export { PolicyInsightsQueryEditor } from './PolicyInsightsQueryEditor';

export interface AzurePolicyInsightsQueryStructure {
  scope: string;
  subscriptionId: string;
  subscriptionName: string;
  managementGroupId: string;
  resourceGroupName: string;
}
export class PolicyInsightsQuery extends AzureMonitorPluginQuery {
  scope: string;
  rawquery: AzurePolicyInsightsQueryStructure;
  constructor(refId = '', options: any, item: any, templateSrv: any) {
    super(refId, options);
    this.scope = templateSrv.replace(`/subscriptions/${item.subscriptionId}`, options.scopedVars);
    this.rawquery = item;
    if (this.rawquery.scope === 'Subscription') {
      this.scope = templateSrv.replace(`/subscriptions/${item.subscriptionId}`, options.scopedVars);
    } else if (this.rawquery.scope === 'ManagementGroup') {
      this.scope = templateSrv.replace(`/providers/Microsoft.Management/managementGroups/${item.managementGroupId}`, options.scopedVars);
    } else if (this.rawquery.scope === 'ResourceGroup') {
      this.scope = templateSrv.replace(`/subscriptions/${item.subscriptionId}/resourceGroups/${item.resourceGroupName}`, options.scopedVars);
    }
  }
}
export const DEFAULT_POLICY_INSIGHTS_QUERY: AzurePolicyInsightsQueryStructure = {
  scope: '',
  subscriptionId: '',
  subscriptionName: '',
  managementGroupId: '',
  resourceGroupName: '',
};
export class AzurePolicyInsightsDataSource {
  private url: string;
  private baseUrl: string;
  constructor(private azureConnection: AzureConnection, private templateSrv: any) {
    this.url = this.azureConnection.instanceSettings.url;
    this.baseUrl = `/` + this.azureConnection.instanceSettings.jsonData.cloudName;
  }
  private async doPolicyInsightsRequest(query: PolicyInsightsQuery, maxRetries = 1) {
    const targetURL = `${query.scope}/providers/Microsoft.PolicyInsights/policyStates/latest/summarize?api-version=2018-07-01-preview`;
    const requestObject: any = {
      data: {
        query: query.query,
      },
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      url: this.url + this.baseUrl + targetURL,
    };
    return doBackendRequest(requestObject, maxRetries);
  }
  private doQueries(queries: PolicyInsightsQuery[]) {
    return queries.map(query => {
      return this.doPolicyInsightsRequest(query)
        .then((result: any) => {
          return { result, query };
        })
        .catch((error: any) => {
          throw { error, query };
        });
    });
  }
  async query(options: any) {
    const queries: PolicyInsightsQuery[] = options.targets
      .filter((item: any) => {
        const pi: PolicyInsightsQuery = item.azurePolicyInsights;
        return item.hide !== true && pi;
      })
      .map((target: any) => {
        const item: PolicyInsightsQuery = target.azurePolicyInsights;
        const queryOption = new PolicyInsightsQuery(target.refId, options, item, this.templateSrv);
        return queryOption;
      });
    if (!queries || queries.length === 0) {
      return;
    }
    const promises = this.doQueries(queries);
    return Promise.all(promises).then((response: any) => {
      console.log({ response });
      const policyResults = new PolicyInsightsResultsParser(response);
      console.log(policyResults.stats);
      return policyResults.output;
    });
  }
  metricFindQuery(query: string) {
    return undefined;
  }
}
