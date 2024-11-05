const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const config = require('./../config')
const transformers = require('./../transformers')
const util = require('./../util')

/**
 * Writes the markdown files
 *
 * @param {Array} items
 * @returns {null}
 */
module.exports = function (items, outputDir) {
  items.forEach(function (item) {
    const category      = util.toLowerDashed(item.category)
    const subcategory   = util.toLowerDashed(item.subcategory)
    const itemDir       = `${outputDir}/${category}/${subcategory}`
    const itemFilename  = `_${transformers.itemIdToFilename(item.id)}.md`

    // Create folder if needed
    if (!fs.existsSync(`${itemDir}`)) {
      fs.mkdirSync(`${itemDir}`, { recursive: true })
      console.log(chalk.green('Created'), chalk.cyanBright(`${itemDir}/`))
    }

    // Write Markdown file
    const itemFile = itemDir + '/' + itemFilename
    const content = transformers.itemToFrontmatter(item)
    fs.writeFileSync(itemFile, content)
    console.log(chalk.green('Created'), chalk.dim(itemFile))
  })
}
