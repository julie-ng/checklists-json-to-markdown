module.exports = {
  outputDir: './output',
  checklists: [
    {
      sourceFile: './data/alz_checklist.en.json',
      outputFolderName: 'landing-zone'
    },
    // {
    //   sourceFile: './data/cost_checklist.en.json', // Doesn't work for re-ordering.
    //   outputFolderName: 'cost'
    // },
    {
      sourceFile: './data/multitenancy_checklist.en.json',
      outputFolderName: 'multi-tenancy'
    }
  ]
}