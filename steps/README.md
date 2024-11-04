# Misc.

If you're new to the repo, here are helpful notes and hints for understanding the code.

## `4-create-category-index-files.js`

Because the categories themselves are not checklist items, we need to manually generate these files, which are useful for generating the navigation tree.

### `_createList()`

For performance reasons, we only loop through once and create 2 objects at the same time.

#### Example `categories` object

```js
{  
  'resource-organization': { 
    title: 'Resource Organization' 
    },
  'network-topology-and-connectivity': { 
    title: 'Network Topology and Connectivity' 
  },
  governance: { 
    title: 'Governance' 
  },
  …
}
```

#### Example `subcategories` object

```js
{
  'microsoft-entra-id-tenants': {
    title: 'Microsoft Entra ID Tenants',
    category: {
      title: 'Azure Billing and Microsoft Entra ID Tenants',
      key: 'azure-billing-and-microsoft-entra-id-tenants'
    }
  },
  'cloud-solution-provider': {
    title: 'Cloud Solution Provider',
    category: {
      title: 'Azure Billing and Microsoft Entra ID Tenants',
      key: 'azure-billing-and-microsoft-entra-id-tenants'
    }
  }
  …
}
```