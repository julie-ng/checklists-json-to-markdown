const fs    = require('fs')
const chalk = require('chalk')

const steps        = require('./steps')
const transformers = require('./transformers')
const util         = require('./util')

// Configure
const jsonFile = './data/alz_checklist.en.json'
const targetDir = './output'

// Global Vars
let checklist = {}

/**
 * Reset ./output
 */
util.log('Setup', () => {
  steps.setup(targetDir)
})


/**
 * Read JSON
 */
util.log('Reading JSON', () => {
  const data = fs.readFileSync(jsonFile, 'utf8')
  checklist  = JSON.parse(data)
  console.log(chalk.green('Read'), jsonFile)
})

/**
 * Write files
 */
util.log('Writing Markdown', () => {
  steps.createItemFiles(checklist.items)
})


steps.createIndexFiles(checklist.items)
