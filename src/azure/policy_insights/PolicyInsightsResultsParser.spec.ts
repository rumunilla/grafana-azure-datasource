import { PolicyInsightsResultsParser } from './PolicyInsightsResultsParser';

const response = [
  {
    result: {
      status: 200,
      statusText: 'OK',
      ok: true,
      data: {
        '@odata.context':
          'https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/$metadata#summary',
        '@odata.count': 1,
        value: [
          {
            '@odata.id': null,
            '@odata.context':
              'https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/$metadata#summary/$entity',
            results: {
              queryResultsUri:
                'https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z',
              nonCompliantResources: 27,
              nonCompliantPolicies: 5,
              resourceDetails: [
                {
                  complianceState: 'compliant',
                  count: 154,
                },
                {
                  complianceState: 'noncompliant',
                  count: 27,
                },
              ],
              policyDetails: [
                {
                  complianceState: 'noncompliant',
                  count: 5,
                },
                {
                  complianceState: 'compliant',
                  count: 3,
                },
              ],
            },
            policyAssignments: [
              {
                policyAssignmentId:
                  '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policyassignments/automatic resource tagging',
                policySetDefinitionId: '',
                results: {
                  queryResultsUri:
                    "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policyassignments/automatic resource tagging'",
                  nonCompliantResources: 9,
                  nonCompliantPolicies: 1,
                  resourceDetails: [
                    {
                      complianceState: 'compliant',
                      count: 171,
                    },
                    {
                      complianceState: 'noncompliant',
                      count: 9,
                    },
                  ],
                  policyDetails: [
                    {
                      complianceState: 'noncompliant',
                      count: 1,
                    },
                  ],
                },
                policyDefinitions: [
                  {
                    policyDefinitionReferenceId: '',
                    policyDefinitionId:
                      '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policydefinitions/automatic resource tagging',
                    effect: 'append',
                    results: {
                      queryResultsUri:
                        "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policyassignments/automatic resource tagging' and PolicyDefinitionId eq '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policydefinitions/automatic resource tagging'",
                      nonCompliantResources: 9,
                      resourceDetails: [
                        {
                          complianceState: 'compliant',
                          count: 171,
                        },
                        {
                          complianceState: 'noncompliant',
                          count: 9,
                        },
                      ],
                      policyDetails: [
                        {
                          complianceState: 'noncompliant',
                          count: 1,
                        },
                      ],
                    },
                  },
                ],
              },
              {
                policyAssignmentId:
                  '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policyassignments/e7854a00de594eaea0214aec',
                policySetDefinitionId: '',
                results: {
                  queryResultsUri:
                    "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policyassignments/e7854a00de594eaea0214aec'",
                  nonCompliantResources: 9,
                  nonCompliantPolicies: 1,
                  resourceDetails: [
                    {
                      complianceState: 'compliant',
                      count: 171,
                    },
                    {
                      complianceState: 'noncompliant',
                      count: 9,
                    },
                  ],
                  policyDetails: [
                    {
                      complianceState: 'noncompliant',
                      count: 1,
                    },
                  ],
                },
                policyDefinitions: [
                  {
                    policyDefinitionReferenceId: '',
                    policyDefinitionId:
                      '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policydefinitions/automatic resource tagging',
                    effect: 'append',
                    results: {
                      queryResultsUri:
                        "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policyassignments/e7854a00de594eaea0214aec' and PolicyDefinitionId eq '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policydefinitions/automatic resource tagging'",
                      nonCompliantResources: 9,
                      resourceDetails: [
                        {
                          complianceState: 'compliant',
                          count: 171,
                        },
                        {
                          complianceState: 'noncompliant',
                          count: 9,
                        },
                      ],
                      policyDetails: [
                        {
                          complianceState: 'noncompliant',
                          count: 1,
                        },
                      ],
                    },
                  },
                ],
              },
              {
                policyAssignmentId:
                  '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policyassignments/1883ffa55128499cbbe19c94',
                policySetDefinitionId: '',
                results: {
                  queryResultsUri:
                    "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policyassignments/1883ffa55128499cbbe19c94'",
                  nonCompliantResources: 0,
                  nonCompliantPolicies: 0,
                  resourceDetails: [
                    {
                      complianceState: 'compliant',
                      count: 14,
                    },
                  ],
                  policyDetails: [
                    {
                      complianceState: 'compliant',
                      count: 1,
                    },
                  ],
                },
                policyDefinitions: [
                  {
                    policyDefinitionReferenceId: '',
                    policyDefinitionId: '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policydefinitions/resources tags',
                    effect: 'deny',
                    results: {
                      queryResultsUri:
                        "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policyassignments/1883ffa55128499cbbe19c94' and PolicyDefinitionId eq '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policydefinitions/resources tags'",
                      nonCompliantResources: 0,
                      resourceDetails: [
                        {
                          complianceState: 'compliant',
                          count: 14,
                        },
                      ],
                      policyDetails: [
                        {
                          complianceState: 'compliant',
                          count: 1,
                        },
                      ],
                    },
                  },
                ],
              },
              {
                policyAssignmentId: '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policyassignments/resources tags',
                policySetDefinitionId: '',
                results: {
                  queryResultsUri:
                    "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policyassignments/resources tags'",
                  nonCompliantResources: 0,
                  nonCompliantPolicies: 0,
                  resourceDetails: [
                    {
                      complianceState: 'compliant',
                      count: 14,
                    },
                  ],
                  policyDetails: [
                    {
                      complianceState: 'compliant',
                      count: 1,
                    },
                  ],
                },
                policyDefinitions: [
                  {
                    policyDefinitionReferenceId: '',
                    policyDefinitionId: '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policydefinitions/resources tags',
                    effect: 'deny',
                    results: {
                      queryResultsUri:
                        "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policyassignments/resources tags' and PolicyDefinitionId eq '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policydefinitions/resources tags'",
                      nonCompliantResources: 0,
                      resourceDetails: [
                        {
                          complianceState: 'compliant',
                          count: 14,
                        },
                      ],
                      policyDetails: [
                        {
                          complianceState: 'compliant',
                          count: 1,
                        },
                      ],
                    },
                  },
                ],
              },
              {
                policyAssignmentId:
                  '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policyassignments/resources tags (audit)',
                policySetDefinitionId: '',
                results: {
                  queryResultsUri:
                    "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policyassignments/resources tags (audit)'",
                  nonCompliantResources: 9,
                  nonCompliantPolicies: 1,
                  resourceDetails: [
                    {
                      complianceState: 'compliant',
                      count: 17,
                    },
                    {
                      complianceState: 'noncompliant',
                      count: 9,
                    },
                  ],
                  policyDetails: [
                    {
                      complianceState: 'noncompliant',
                      count: 1,
                    },
                  ],
                },
                policyDefinitions: [
                  {
                    policyDefinitionReferenceId: '',
                    policyDefinitionId:
                      '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policydefinitions/resources tags (audit)',
                    effect: 'audit',
                    results: {
                      queryResultsUri:
                        "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policyassignments/resources tags (audit)' and PolicyDefinitionId eq '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/providers/microsoft.authorization/policydefinitions/resources tags (audit)'",
                      nonCompliantResources: 9,
                      resourceDetails: [
                        {
                          complianceState: 'compliant',
                          count: 17,
                        },
                        {
                          complianceState: 'noncompliant',
                          count: 9,
                        },
                      ],
                      policyDetails: [
                        {
                          complianceState: 'noncompliant',
                          count: 1,
                        },
                      ],
                    },
                  },
                ],
              },
              {
                policyAssignmentId:
                  '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policyassignments/7a193577d3b5408381e931b2',
                policySetDefinitionId:
                  '/providers/Microsoft.Management/managementgroups/myappPlatformsMG-Prod/providers/Microsoft.Authorization/policySetDefinitions/myapp-tagging-policy',
                results: {
                  queryResultsUri:
                    "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policyassignments/7a193577d3b5408381e931b2'",
                  nonCompliantResources: 27,
                  nonCompliantPolicies: 6,
                  resourceDetails: [
                    {
                      complianceState: 'noncompliant',
                      count: 27,
                    },
                  ],
                  policyDetails: [
                    {
                      complianceState: 'noncompliant',
                      count: 6,
                    },
                    {
                      complianceState: 'compliant',
                      count: 2,
                    },
                  ],
                },
                policyDefinitions: [
                  {
                    policyDefinitionReferenceId: '6659647229496348147',
                    policyDefinitionId:
                      '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policydefinitions/data-classification-resource-tags',
                    effect: 'audit',
                    results: {
                      queryResultsUri:
                        "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policyassignments/7a193577d3b5408381e931b2' and PolicyDefinitionId eq '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policydefinitions/data-classification-resource-tags' and PolicyDefinitionReferenceId eq '6659647229496348147'",
                      nonCompliantResources: 26,
                      resourceDetails: [
                        {
                          complianceState: 'noncompliant',
                          count: 26,
                        },
                      ],
                      policyDetails: [
                        {
                          complianceState: 'noncompliant',
                          count: 1,
                        },
                      ],
                    },
                  },
                  {
                    policyDefinitionReferenceId: '6646410681082572566',
                    policyDefinitionId:
                      '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policydefinitions/platform-resource-tags',
                    effect: 'audit',
                    results: {
                      queryResultsUri:
                        "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policyassignments/7a193577d3b5408381e931b2' and PolicyDefinitionId eq '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policydefinitions/platform-resource-tags' and PolicyDefinitionReferenceId eq '6646410681082572566'",
                      nonCompliantResources: 9,
                      resourceDetails: [
                        {
                          complianceState: 'compliant',
                          count: 17,
                        },
                        {
                          complianceState: 'noncompliant',
                          count: 9,
                        },
                      ],
                      policyDetails: [
                        {
                          complianceState: 'noncompliant',
                          count: 1,
                        },
                      ],
                    },
                  },
                  {
                    policyDefinitionReferenceId: '14287135973260279618',
                    policyDefinitionId:
                      '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policydefinitions/stage-resource-tags',
                    effect: 'audit',
                    results: {
                      queryResultsUri:
                        "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policyassignments/7a193577d3b5408381e931b2' and PolicyDefinitionId eq '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policydefinitions/stage-resource-tags' and PolicyDefinitionReferenceId eq '14287135973260279618'",
                      nonCompliantResources: 9,
                      resourceDetails: [
                        {
                          complianceState: 'compliant',
                          count: 17,
                        },
                        {
                          complianceState: 'noncompliant',
                          count: 9,
                        },
                      ],
                      policyDetails: [
                        {
                          complianceState: 'noncompliant',
                          count: 1,
                        },
                      ],
                    },
                  },
                  {
                    policyDefinitionReferenceId: '1964503614755877687',
                    policyDefinitionId:
                      '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policydefinitions/business-criticality-resource-tags',
                    effect: 'audit',
                    results: {
                      queryResultsUri:
                        "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policyassignments/7a193577d3b5408381e931b2' and PolicyDefinitionId eq '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policydefinitions/business-criticality-resource-tags' and PolicyDefinitionReferenceId eq '1964503614755877687'",
                      nonCompliantResources: 26,
                      resourceDetails: [
                        {
                          complianceState: 'noncompliant',
                          count: 26,
                        },
                      ],
                      policyDetails: [
                        {
                          complianceState: 'noncompliant',
                          count: 1,
                        },
                      ],
                    },
                  },
                  {
                    policyDefinitionReferenceId: '16709348351242178973',
                    policyDefinitionId:
                      '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policydefinitions/stage-resource-group-tags',
                    effect: 'audit',
                    results: {
                      queryResultsUri:
                        "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policyassignments/7a193577d3b5408381e931b2' and PolicyDefinitionId eq '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policydefinitions/stage-resource-group-tags' and PolicyDefinitionReferenceId eq '16709348351242178973'",
                      nonCompliantResources: 0,
                      resourceDetails: [
                        {
                          complianceState: 'compliant',
                          count: 1,
                        },
                      ],
                      policyDetails: [
                        {
                          complianceState: 'compliant',
                          count: 1,
                        },
                      ],
                    },
                  },
                  {
                    policyDefinitionReferenceId: '15957468406364699915',
                    policyDefinitionId:
                      '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policydefinitions/platform-resource-group-tags',
                    effect: 'audit',
                    results: {
                      queryResultsUri:
                        "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policyassignments/7a193577d3b5408381e931b2' and PolicyDefinitionId eq '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policydefinitions/platform-resource-group-tags' and PolicyDefinitionReferenceId eq '15957468406364699915'",
                      nonCompliantResources: 0,
                      resourceDetails: [
                        {
                          complianceState: 'compliant',
                          count: 1,
                        },
                      ],
                      policyDetails: [
                        {
                          complianceState: 'compliant',
                          count: 1,
                        },
                      ],
                    },
                  },
                  {
                    policyDefinitionReferenceId: '3903407900423279231',
                    policyDefinitionId:
                      '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policydefinitions/data-classification-resource-group-tags',
                    effect: 'audit',
                    results: {
                      queryResultsUri:
                        "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policyassignments/7a193577d3b5408381e931b2' and PolicyDefinitionId eq '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policydefinitions/data-classification-resource-group-tags' and PolicyDefinitionReferenceId eq '3903407900423279231'",
                      nonCompliantResources: 1,
                      resourceDetails: [
                        {
                          complianceState: 'noncompliant',
                          count: 1,
                        },
                      ],
                      policyDetails: [
                        {
                          complianceState: 'noncompliant',
                          count: 1,
                        },
                      ],
                    },
                  },
                  {
                    policyDefinitionReferenceId: '2013646280112404871',
                    policyDefinitionId:
                      '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policydefinitions/business-criticality-resource-group-tags',
                    effect: 'audit',
                    results: {
                      queryResultsUri:
                        "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policyassignments/7a193577d3b5408381e931b2' and PolicyDefinitionId eq '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policydefinitions/business-criticality-resource-group-tags' and PolicyDefinitionReferenceId eq '2013646280112404871'",
                      nonCompliantResources: 1,
                      resourceDetails: [
                        {
                          complianceState: 'noncompliant',
                          count: 1,
                        },
                      ],
                      policyDetails: [
                        {
                          complianceState: 'noncompliant',
                          count: 1,
                        },
                      ],
                    },
                  },
                ],
              },
              {
                policyAssignmentId:
                  '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policyassignments/c91a6cdd09314827b9a964d1',
                policySetDefinitionId: '/providers/Microsoft.Authorization/policySetDefinitions/1f3afdf9-d0c9-4c3d-847f-89da613e70a8',
                results: {
                  queryResultsUri:
                    "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policyassignments/c91a6cdd09314827b9a964d1'",
                  nonCompliantResources: 0,
                  nonCompliantPolicies: 0,
                  resourceDetails: [
                    {
                      complianceState: 'compliant',
                      count: 3,
                    },
                  ],
                  policyDetails: [
                    {
                      complianceState: 'compliant',
                      count: 3,
                    },
                  ],
                },
                policyDefinitions: [
                  {
                    policyDefinitionReferenceId: 'disableunrestrictednetworktostorageaccountmonitoring',
                    policyDefinitionId: '/providers/microsoft.authorization/policydefinitions/34c877ad-507e-4c82-993e-3452a6e0ad3c',
                    effect: 'audit',
                    results: {
                      queryResultsUri:
                        "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policyassignments/c91a6cdd09314827b9a964d1' and PolicyDefinitionId eq '/providers/microsoft.authorization/policydefinitions/34c877ad-507e-4c82-993e-3452a6e0ad3c' and PolicyDefinitionReferenceId eq 'disableunrestrictednetworktostorageaccountmonitoring'",
                      nonCompliantResources: 0,
                      resourceDetails: [
                        {
                          complianceState: 'compliant',
                          count: 3,
                        },
                      ],
                      policyDetails: [
                        {
                          complianceState: 'compliant',
                          count: 1,
                        },
                      ],
                    },
                  },
                  {
                    policyDefinitionReferenceId: 'securetransfertostorageaccountmonitoring',
                    policyDefinitionId: '/providers/microsoft.authorization/policydefinitions/404c3081-a854-4457-ae30-26a93ef643f9',
                    effect: 'audit',
                    results: {
                      queryResultsUri:
                        "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policyassignments/c91a6cdd09314827b9a964d1' and PolicyDefinitionId eq '/providers/microsoft.authorization/policydefinitions/404c3081-a854-4457-ae30-26a93ef643f9' and PolicyDefinitionReferenceId eq 'securetransfertostorageaccountmonitoring'",
                      nonCompliantResources: 0,
                      resourceDetails: [
                        {
                          complianceState: 'compliant',
                          count: 3,
                        },
                      ],
                      policyDetails: [
                        {
                          complianceState: 'compliant',
                          count: 1,
                        },
                      ],
                    },
                  },
                  {
                    policyDefinitionReferenceId: 'classicstorageaccountsmonitoring',
                    policyDefinitionId: '/providers/microsoft.authorization/policydefinitions/37e0d2fe-28a5-43d6-a273-67d37d1f5606',
                    effect: 'audit',
                    results: {
                      queryResultsUri:
                        "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/providers/microsoft.management/managementgroups/myappplatformsmg-prod/providers/microsoft.authorization/policyassignments/c91a6cdd09314827b9a964d1' and PolicyDefinitionId eq '/providers/microsoft.authorization/policydefinitions/37e0d2fe-28a5-43d6-a273-67d37d1f5606' and PolicyDefinitionReferenceId eq 'classicstorageaccountsmonitoring'",
                      nonCompliantResources: 0,
                      resourceDetails: [
                        {
                          complianceState: 'compliant',
                          count: 3,
                        },
                      ],
                      policyDetails: [
                        {
                          complianceState: 'compliant',
                          count: 1,
                        },
                      ],
                    },
                  },
                ],
              },
              {
                policyAssignmentId:
                  '/providers/microsoft.management/managementgroups/myappplatformsmg/providers/microsoft.authorization/policyassignments/pass_ma_la_workspaces',
                policySetDefinitionId: '',
                results: {
                  queryResultsUri:
                    "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/providers/microsoft.management/managementgroups/myappplatformsmg/providers/microsoft.authorization/policyassignments/pass_ma_la_workspaces'",
                  nonCompliantResources: 1,
                  nonCompliantPolicies: 1,
                  resourceDetails: [
                    {
                      complianceState: 'noncompliant',
                      count: 1,
                    },
                  ],
                  policyDetails: [
                    {
                      complianceState: 'noncompliant',
                      count: 1,
                    },
                  ],
                },
                policyDefinitions: [
                  {
                    policyDefinitionReferenceId: '',
                    policyDefinitionId:
                      '/providers/microsoft.management/managementgroups/myappplatformsmg/providers/microsoft.authorization/policydefinitions/po_ma_la_workspaces',
                    effect: 'deny',
                    results: {
                      queryResultsUri:
                        "https://management.azure.com/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/queryResults?api-version=2018-07-01-preview&$from=2020-07-30 14:52:44Z&$to=2020-07-31 14:52:44Z and PolicyAssignmentId eq '/providers/microsoft.management/managementgroups/myappplatformsmg/providers/microsoft.authorization/policyassignments/pass_ma_la_workspaces' and PolicyDefinitionId eq '/providers/microsoft.management/managementgroups/myappplatformsmg/providers/microsoft.authorization/policydefinitions/po_ma_la_workspaces'",
                      nonCompliantResources: 1,
                      resourceDetails: [
                        {
                          complianceState: 'noncompliant',
                          count: 1,
                        },
                      ],
                      policyDetails: [
                        {
                          complianceState: 'noncompliant',
                          count: 1,
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      headers: {},
      url:
        'https://localhost:3333/api/datasources/proxy/13/azuremonitor/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/summarize?api-version=2018-07-01-preview',
      type: 'basic',
      redirected: false,
      config: {
        data: {
          query: {
            app: 'dashboard',
            requestId: 'Q101',
            timezone: 'browser',
            panelId: 23763571993,
            dashboardId: 14,
            range: {
              from: '2020-07-31T08:52:43.991Z',
              to: '2020-07-31T14:52:43.991Z',
              raw: {
                from: 'now-6h',
                to: 'now',
              },
            },
            timeInfo: '',
            interval: '30s',
            intervalMs: 30000,
            targets: [
              {
                azureAppInsights: {
                  appInsightsAppId: '',
                  query: '',
                  workspace: '',
                },
                azureCostAnalysis: {
                  alias: '',
                  filters: [
                    {
                      FilterType: 'None',
                      Name: 'None',
                      Operator: 'In',
                      Values: [],
                    },
                  ],
                  granularity: 'Daily',
                  grouping: [
                    {
                      name: 'None',
                      type: 'None',
                    },
                  ],
                  managementGroupId: '',
                  resourceGroupName: '',
                  scope: 'Subscription',
                  subscriptionId: '',
                  subscriptionName: '',
                },
                azureLogAnalytics: {
                  query: '',
                  workspace: '',
                },
                azurePolicyInsights: {
                  managementGroupId: '',
                  resourceGroupName: 'MyResourceGroup',
                  scope: 'ResourceGroup',
                  subscriptionId: 'xxxxxxxxx-xxxx-xxx-xxxxx',
                  subscriptionName: 'myappInfra',
                },
                azureResourceGraph: {
                  query: '',
                  skip: 0,
                  top: 1000,
                },
                azureServiceHealth: {
                  subscriptionId: '',
                },
                queryType: 'Azure Policy Insights',
                refId: 'A',
                datasource: 'Azure Plus',
              },
            ],
            maxDataPoints: 699,
            scopedVars: {
              __interval: {
                text: '30s',
                value: '30s',
              },
              __interval_ms: {
                text: '30000',
                value: 30000,
              },
            },
            startTime: 1596207163992,
            rangeRaw: {
              from: 'now-6h',
              to: 'now',
            },
          },
        },
        headers: {
          'Content-Type': 'application/json',
          'X-Grafana-Org-Id': 1,
        },
        method: 'POST',
        url:
          'api/datasources/proxy/13/azuremonitor/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup/providers/Microsoft.PolicyInsights/policyStates/latest/summarize?api-version=2018-07-01-preview',
        retry: 0,
      },
    },
    query: {
      refId: 'A',
      query: {
        app: 'dashboard',
        requestId: 'Q101',
        timezone: 'browser',
        panelId: 23763571993,
        dashboardId: 14,
        range: {
          from: '2020-07-31T08:52:43.991Z',
          to: '2020-07-31T14:52:43.991Z',
          raw: {
            from: 'now-6h',
            to: 'now',
          },
        },
        timeInfo: '',
        interval: '30s',
        intervalMs: 30000,
        targets: [
          {
            azureAppInsights: {
              appInsightsAppId: '',
              query: '',
              workspace: '',
            },
            azureCostAnalysis: {
              alias: '',
              filters: [
                {
                  FilterType: 'None',
                  Name: 'None',
                  Operator: 'In',
                  Values: [],
                },
              ],
              granularity: 'Daily',
              grouping: [
                {
                  name: 'None',
                  type: 'None',
                },
              ],
              managementGroupId: '',
              resourceGroupName: '',
              scope: 'Subscription',
              subscriptionId: '',
              subscriptionName: '',
            },
            azureLogAnalytics: {
              query: '',
              workspace: '',
            },
            azurePolicyInsights: {
              managementGroupId: '',
              resourceGroupName: 'MyResourceGroup',
              scope: 'ResourceGroup',
              subscriptionId: 'xxxxxxxxx-xxxx-xxx-xxxxx',
              subscriptionName: 'myappInfra',
            },
            azureResourceGraph: {
              query: '',
              skip: 0,
              top: 1000,
            },
            azureServiceHealth: {
              subscriptionId: '',
            },
            queryType: 'Azure Policy Insights',
            refId: 'A',
            datasource: 'Azure Plus',
          },
        ],
        maxDataPoints: 699,
        scopedVars: {
          __interval: {
            text: '30s',
            value: '30s',
          },
          __interval_ms: {
            text: '30000',
            value: 30000,
          },
        },
        startTime: 1596207163992,
        rangeRaw: {
          from: 'now-6h',
          to: 'now',
        },
      },
      scope: '/subscriptions/xxxxxxxxx-xxxx-xxx-xxxxx/resourceGroups/MyResourceGroup',
      rawquery: {
        managementGroupId: '',
        resourceGroupName: 'MyResourceGroup',
        scope: 'ResourceGroup',
        subscriptionId: 'xxxxxxxxx-xxxx-xxx-xxxxx',
        subscriptionName: 'myappInfra',
      },
    },
  },
];
const policyResults = new PolicyInsightsResultsParser(response);

describe('Policy Insights Results Parser', () => {
  it('Policy Summary', () => {
    // Overall resource compliance
    expect(policyResults.stats.totalResourcesCount).toBe(181);
    expect(policyResults.stats.compliantResourcesCount).toBe(154);
    expect(policyResults.stats.compliancePercentage).toBe(85);
    // // Non-compliant initiatives
    // expect(policyResults.stats.nonCompliantPoliciesSetCount).toBe(1);
    // expect(policyResults.stats.totalPoliciesSetCount).toBe(4);
    // // Non-compliant policies
    // expect(policyResults.stats.nonCompliantPoliciesCount).toBe(10);
    // expect(policyResults.stats.totalPoliciesCount).toBe(126);
    // // Non-compliant resources
    // expect(policyResults.stats.nonCompliantResourcesCount).toBe(27);
    // expect(policyResults.stats.totalResourcesCount).toBe(181);
    // // Policy Definitions
    // expect(policyResults.stats.nonCompliantPolicyDefinitionsCount).toBe(5);
    // expect(policyResults.stats.totalPolicyDefinitionsCount).toBe(12);
  });
});
