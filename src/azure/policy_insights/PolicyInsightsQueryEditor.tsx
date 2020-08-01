import { defaults } from 'lodash';
import React, { PureComponent, ChangeEvent } from 'react';
import { SelectableValue, Select } from '../../grafana';
import { AzureConnection } from './../azure_connection/AzureConnection';
import { AzureSubscription } from './../azure_subscription/AzureSubscription';
import { AzurePolicyInsightsQueryStructure } from './PolicyInsights';

const Scopes: SelectableValue[] = [
  { value: 'ManagementGroup', label: 'Management Group' },
  { value: 'Subscription', label: 'Subscription' },
  { value: 'ResourceGroup', label: 'ResourceGroup' },
];

class AzurePolicyInsightsScopeQuery extends PureComponent<any, any> {
  state: any = defaults(this.state, { AzureSubscriptions: [] });
  onPISubscriptionIDChange = (event: SelectableValue) => {
    const acaSubscriptionId = event.value;
    const { query, onChange } = this.props;
    const azPolicyInsights: AzurePolicyInsightsQueryStructure = query.azurePolicyInsights;
    azPolicyInsights.subscriptionId = acaSubscriptionId;
    azPolicyInsights.subscriptionName = event.label || '';
    onChange({ ...query, azurePolicyInsights: azPolicyInsights });
  };
  onPIScopeChange = (scope: SelectableValue) => {
    const { query, onChange } = this.props;
    const azPolicyInsights: AzurePolicyInsightsQueryStructure = query.azurePolicyInsights;
    azPolicyInsights.scope = scope.value;
    onChange({ ...query, azurePolicyInsights: azPolicyInsights });
  };
  onPIManagementGroupNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const MGGroupName = event.target.value;
    const { query, onChange } = this.props;
    const azPolicyInsights: AzurePolicyInsightsQueryStructure = query.azurePolicyInsights;
    azPolicyInsights.managementGroupId = MGGroupName;
    onChange({ ...query, azurePolicyInsights: azPolicyInsights });
  };
  onPIResourceGroupNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const ResourceGroupName = event.target.value;
    const { query, onChange } = this.props;
    const azPolicyInsights: AzurePolicyInsightsQueryStructure = query.azurePolicyInsights;
    azPolicyInsights.resourceGroupName = ResourceGroupName;
    onChange({ ...query, azurePolicyInsights: azPolicyInsights });
  };
  componentWillMount() {
    if (this.state.AzureSubscriptions.length === 0) {
      const az: AzureConnection = new AzureConnection(this.props.datasource.instanceSettings);
      az.getSubscriptions().then((res: AzureSubscription[]) => {
        this.setState({
          AzureSubscriptions: res.map(r => {
            return { value: r.subscriptionId, label: r.name } as SelectableValue;
          }),
        });
      });
    }
  }
  render() {
    const { query } = this.props;
    let ScopeId;
    let SubscriptionScopeId = <div></div>;
    if (query.azurePolicyInsights.scope === 'ResourceGroup') {
      SubscriptionScopeId = (
        <div className="gf-form gf-form--grow">
          <label className="gf-form-label width-12" title="Resource Group Name">
            Resource Group
          </label>
          <input
            className="gf-form-input width-24"
            type="text"
            value={query.azurePolicyInsights.resourceGroupName}
            placeholder="Resource Group Name"
            title="Resource Group Name"
            onChange={this.onPIResourceGroupNameChange}
          ></input>
        </div>
      );
    }
    if (query.azurePolicyInsights.scope === 'Subscription' || query.azurePolicyInsights.scope === 'ResourceGroup') {
      ScopeId = (
        <div>
          <div className="gf-form-inline">
            <div className="gf-form">
              <div className="gf-form gf-form--grow">
                <label className="gf-form-label width-12" title="Subscription">
                  Subscription
                </label>
                <Select
                  className="width-24"
                  value={
                    this.state.AzureSubscriptions.find((gran: any) => gran.value === query.azurePolicyInsights.subscriptionId) || {
                      label: query.azurePolicyInsights.subscriptionId,
                      value: query.azurePolicyInsights.subscriptionId,
                    }
                  }
                  allowCustomValue
                  options={this.state.AzureSubscriptions}
                  defaultValue={query.azurePolicyInsights.subscriptionId}
                  onChange={this.onPISubscriptionIDChange}
                />
              </div>
              {SubscriptionScopeId}
            </div>
          </div>
        </div>
      );
    } else if (query.azurePolicyInsights.scope === 'ManagementGroup') {
      ScopeId = (
        <div>
          <div className="gf-form-inline">
            <div className="gf-form">
              <div className="gf-form gf-form--grow">
                <label className="gf-form-label width-12" title="Management Group ID">
                  Management group ID
                </label>
                <input
                  className="gf-form-input width-24"
                  type="text"
                  value={query.azurePolicyInsights.managementGroupId}
                  placeholder="Management Group ID"
                  title="Management Group ID"
                  onChange={this.onPIManagementGroupNameChange}
                ></input>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="gf-form-inline">
          <div className="gf-form">
            <div className="gf-form gf-form--grow">
              <label className="gf-form-label width-12" title="Scope">
                Scope
              </label>
              <Select
                className="width-24"
                value={Scopes.find((gran: any) => gran.value === query.azurePolicyInsights.scope)}
                options={Scopes}
                defaultValue={query.azurePolicyInsights.scope}
                onChange={this.onPIScopeChange}
              />
            </div>
          </div>
        </div>
        <div>{ScopeId}</div>
      </div>
    );
  }
}

export class PolicyInsightsQueryEditor extends PureComponent<any, any> {
  render() {
    const { query, onChange, datasource } = this.props;
    return (
      <div>
        <AzurePolicyInsightsScopeQuery query={query} onChange={onChange} datasource={datasource}></AzurePolicyInsightsScopeQuery>
      </div>
    );
  }
}
