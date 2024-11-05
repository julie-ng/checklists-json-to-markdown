const setup               = require('./1-setup')
const readJsonFile        = require('./2-read-json-file')
const createItemFiles     = require('./3-create-item-files')
const createIndexFiles    = require('./4-create-category-index-files')
const renameSubcategories = require('./5-rename-subcategory-directories')
const renameCategories    = require('./6-rename-category-directories')

module.exports = {
  setup,
  readJsonFile,
  createItemFiles,
  createIndexFiles,
  renameSubcategories,
  renameCategories
}