const fs    = require('fs')
const chalk = require('chalk')

const steps        = require('./steps')
const transformers = require('./transformers')
const util         = require('./util')

// Configure
const config    = require('./config')
const jsonFile  = './data/alz_checklist.en.json'
const targetDir = './output'

// Loop through checklists
config.checklists.forEach(function (list) {
  const outputDir = `${targetDir}/${list.outputFolderName}`
  let checklist, indexPages

  console.log(chalk.bgBlueBright.black(` Processing ${list.sourceFile} `))
  console.group()

  util.log('Setup',                () => steps.setup(outputDir))
  util.log('Reading Source JSON',  () => checklist = steps.readJsonFile(list.sourceFile))
  util.log('Writing Markdown',     () => steps.createItemFiles(checklist.items, outputDir))
  util.log('Creating Index Files', () => indexPages = steps.createIndexFiles(checklist.items, outputDir))

  util.log('Rename Subcategories', () => steps.renameSubcategories(outputDir, indexPages.subcategories))
  util.log('Rename Categories',    () => steps.renameCategories(outputDir, indexPages.categories))

  console.groupEnd()
})
