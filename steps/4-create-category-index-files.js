const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const config = require('./../config')
const util = require('./../util')
const transformers = require('./../transformers')

const outputDir = path.join(__dirname, '..', config.outputDir)


/**
 * Writes the markdown files
 *
 * @param {Array} items
 * @returns {null}
 */
module.exports = function (items) {
  const pages = _createList(items)

  _createCategoryPages(pages.categories)
  _createSubcategoryPages(pages.subcategories)

  return null
}

/**
 * Create lists of catgories and subcategories
 *
 * @param {Array} items
 * @returns {Object}
 */
function _createList (items) {
  const categories = {}
  const subcategories = {}

  items.forEach(function (item) {
    const catKey      = util.toLowerDashed(item.category)
    const subcatKey   = util.toLowerDashed(item.subcategory)

    // create/append list of categories
    if (!Object.hasOwn(categories, catKey)) {
      categories[catKey] = {
        title: item.category
      }
    }

    // create/append list of subcategories
    if (!Object.hasOwn(subcategories, subcatKey)) {
      subcategories[subcatKey] = {
        title: item.subcategory,
        category: {
          title: item.category,
          key: catKey
        }
      }
    }
  })

  // console.log(categories)
  // console.log(subcategories)

  return {
    categories,
    subcategories
  }
}

/**
 * Create category index.md files
 *
 * @param {Object} categories
 */
function _createCategoryPages (categories) {
  for (const c in categories) {
    // Generate markdown
    const content = transformers.categoryToIndexMarkdown(categories[c].title)

    // Write file
    const indexFile = `${outputDir}/${c}/index.md`
    fs.writeFileSync(indexFile, content)

    // Output Filepath
    console.log(chalk.green('Created'), chalk.dim(indexFile))
  }
}

/**
 * Create subcategory index.md files
 *
 * @param {Object} subcategories
 */
function _createSubcategoryPages (subcategories) {
  for (const s in subcategories) {
    const category = subcategories[s].category
    const subcategory = subcategories[s]

    // Generate content
    const content = transformers.categoryToIndexMarkdown(category.title, subcategory.title)

    // Write file
    const indexFile = `${outputDir}/${category.key}/${s}/index.md`
    fs.writeFileSync(indexFile, content)

    // Output Filepath
    console.log(chalk.green('Created'), chalk.dim(indexFile))
  }
}
