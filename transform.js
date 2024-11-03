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

util.log('Setup',             () => steps.setup(targetDir))
util.log('Reading JSON',      () => checklist = steps.readJsonFile(jsonFile))
util.log('Writing Markdown',  () => steps.createItemFiles(checklist.items))

steps.createIndexFiles(checklist.items)
