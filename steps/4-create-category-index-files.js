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

  util.log('Creating Category Index Pages', () => {
    _createCategoryPages(pages.categories)
  })

  util.log('Subcategory Index Pages', () => {
    _createSubcategoryPages(pages.subcategories)
  })

  return null
}

/**
 * Helpers
 */

/**
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

  return {
    categories,
    subcategories
  }
}

function _createCategoryPages (categories) {
  for (const c in categories) {
    const content = transformers.categoryToIndexMarkdown(categories[c].title)
    const indexFile = `${outputDir}/${c}/index.md`
    fs.writeFileSync(indexFile, content)
    console.log(chalk.green('Created'), chalk.dim(indexFile))
  }
}

function _createSubcategoryPages (subcategories) {
  for (const s in subcategories) {
    const subcatTitle = subcategories[s]
    const category = subcategories[s].category
    const content = transformers.categoryToIndexMarkdown(category.title, subcatTitle)
    const indexFile = `${outputDir}/${category.key}/${s}/index.md`
    fs.writeFileSync(indexFile, content)
    console.log(chalk.green('Created'), chalk.dim(indexFile))
  }
}
