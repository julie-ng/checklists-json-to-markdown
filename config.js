module.exports = {
  outputDir: './output',
  jsonFiles: [
    {
      sourceFile: 'data/alz_checklist.en.json',
      outputFolderName: 'landing-zone'
    },
    {
      sourceFile: 'data/cost_checklist.en.json',
      outputFolderName: 'cost'
    },
    {
      sourceFile: 'data/multitenancy_checklist.en.json',
      outputFolderName: 'multi-tenancy'
    }
  ]
}