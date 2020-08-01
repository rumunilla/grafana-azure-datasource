import { sum } from 'lodash';

export class PolicyInsightsResultsParser {
  output: any[] = [];
  stats = {
    nonCompliantResourcesCount: -1,
    nonCompliantPolicyDefinitionsCount: -1,
    totalPolicyDefinitionsCount: -1,
    nonCompliantPoliciesCount: -1,
    totalPoliciesCount: -1,
    nonCompliantPoliciesSetCount: -1,
    totalPoliciesSetCount: -1,
    totalResourcesCount: -1,
    compliantResourcesCount: -1,
    compliancePercentage: -1,
  };
  constructor(response: any[]) {
    response.forEach((res: any, resIndex: number) => {
      if (res && res.result && res.result.data && res.result.data.value && res.result.data.value.length > 0) {
        res.result.data.value.forEach((val: any, valIndex: number) => {
          this.stats.nonCompliantPolicyDefinitionsCount = val.results.nonCompliantPolicies;
          this.stats.nonCompliantResourcesCount = val.results.nonCompliantResources;
          this.stats.totalResourcesCount = sum(val.results.resourceDetails.map((r: any) => r.count));
          this.stats.compliantResourcesCount = sum(
            val.results.resourceDetails.filter((r: any) => r.complianceState === 'compliant').map((r: any) => r.count)
          );
          if (this.stats.totalResourcesCount !== 0) {
            this.stats.compliancePercentage = Math.round((this.stats.compliantResourcesCount / this.stats.totalResourcesCount) * 100);
          }
          if (val.policyAssignments && val.policyAssignments.length > 0) {
            val.policyAssignments.forEach((pa: any, paIndex: number) => {});
          }
        });
      }
    });
  }
}
