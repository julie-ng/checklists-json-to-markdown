# Transform Checklists JSON to Markdown

The hardcoded JSON data from [github.com/Azure/review-checklists](https://github.com/Azure/review-checklists) is clunky for building a UI with interactive analysis functionality. Instead, let's convert it into markdown for [Nuxt Content](https://content.nuxt.com/).

> [!IMPORTANT]
> This is a proof of concept. It is intended as a one-off manual operation, after which the checklists content should be managed in markdown, not the JSON source.

### Advantages 

[Nuxt Content](https://content.nuxt.com/) advantages over JSON:

- Use rich text in body, incl. bold, lists, etc.
- Leverage Nuxt's [built-in search functionality](https://content.nuxt.com/usage/search)
- No need to generate GUIDs (each item uses its file path as unique key)
- Native integration with Nuxt for [static site generation](https://nuxt.com/docs/getting-started/deployment) with pre-rendering for better performance

## Features

### JSON to Markdown

- Transforms JSON data from review checklists [JSON format](https://github.com/Azure/review-checklists) into markdown front matter.
- Converts single JSON file into 1 file per checklist item.

#### Example Source: JSON 

```json
{
  "category": "Management",
  "subcategory": "Data Protection",
  "text": "Enable cross-region replication in Azure for BCDR with paired regions.",
  "waf": "Reliability",
  "guid": "7ea02e1c-7166-45a3-bdf5-098891367fcb",
  "id": "F02.01",
  "severity": "Medium",
  "link": "https://learn.microsoft.com/azure/reliability/cross-region-replication-azure",
  "training": "https://learn.microsoft.com/training/modules/provide-disaster-recovery-replicate-storage-data/"
}
```

#### Example Result: Markdown Frontmatter

```yaml
---
category: Management
subcategory: Data Protection
text: Enable cross-region replication in Azure for BCDR with paired regions.
waf: Reliability
guid: 7ea02e1c-7166-45a3-bdf5-098891367fcb
id: F02.01
severity: Medium
link: https://learn.microsoft.com/azure/reliability/cross-region-replication-azure
training: https://learn.microsoft.com/training/modules/provide-disaster-recovery-replicate-storage-data/
---
```

### File tree structure

This tool transforms files into this format, where (sub)categories are transformed into lower case with dashes format:

```
./<category>/<subcategory>/_<id>.md
```

#### Example

| Item Property | Value |
|:--|:--|
| Category | "Resource Organization" |
| Subcategory | "Naming and Tagging" |
| Item ID | "C01.01" |
| **Resulting file** | `resource-organization/naming-and-tagging/_c01-01.md` |


## Resources

### Node.js Docs

#### Articles

- [Reading files with Node.js](https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs)
- [Writing files with Node.js](https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs)
- [Working with folders in Node.js](https://nodejs.org/en/learn/manipulating-files/working-with-folders-in-nodejs)

#### API Docs

Docs for latest LTS Node.js version - v20 

- [File system API - `fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html)
- [CommonJS Modules](https://nodejs.org/docs/latest-v20.x/api/modules.html#modules-commonjs-modules)