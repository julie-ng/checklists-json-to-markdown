const fs = require('fs')
const chalk = require('chalk')

// Helpers
const setup = require('./transform/setup')
const itemIdToFilename = require('./transform/item-id-to-filename')
const itemToYamlFrontmatter = require('./transform/item-to-yaml')
const toLowerDashed = require('./util/to-lower-dashed')

// Configure
const jsonFile = './data/alz_checklist.en.json'
const targetDir = './output'

/**
 * Reset ./output
 */
console.log('')
setup(targetDir)
console.log('')


/**
 * Read JSON
 */

console.log(chalk.bgYellow.black(' Reading JSON '))
console.group()
console.log('Read', jsonFile)
console.groupEnd()
console.log('')

/**
 * Write files
 */
console.log(chalk.bgYellow.black(' Writing Markdown '))
console.group()

const data      = fs.readFileSync(jsonFile, 'utf8')
const checklist = JSON.parse(data)

checklist.items.forEach(function (item) {
  const category      = toLowerDashed(item.category)
  const subcategory   = toLowerDashed(item.subcategory)
  const itemDir       = `${targetDir}/${category}/${subcategory}`
  const itemFilename  = `_${itemIdToFilename(item.id)}.md`

  // Create folder if needed
  if (!fs.existsSync(`${itemDir}`)) {
    fs.mkdirSync(`${itemDir}`, { recursive: true })
    console.log(chalk.cyanBright(`Created ${itemDir}/`))
  }

  // Write Markdown file
  const itemFile = itemDir + '/' + itemFilename
  const content = itemToYamlFrontmatter(item)
  fs.writeFileSync(itemFile, content)
  console.log(chalk.grey('Created', itemFile))
})
console.groupEnd()


