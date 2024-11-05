const fs    = require('fs')
const chalk = require('chalk')

/**
 * Rename folders to preserve sort order from JSON
 *
 * @param {String} checklistDir
 * @param {Object} subcategories
 */
module.exports = function (checklistDir, subcategories) {
  // console.log(`reorderFolders(${checklistDir})`)
  // console.log(Object.keys(subcategories))

  // Rename subcategories first
  let index = 1
  let currentCategory = ''

  Object.keys(subcategories).forEach(function (s, i) {
    const categoryKey = subcategories[s].category.key
    // console.log(`categoryKey: ${categoryKey}`, `currentCategory: ${currentCategory}`)

    if (categoryKey !== currentCategory) {
      index = 1
      currentCategory = categoryKey
    } else {
      index += 1
    }

    const currentName = `${checklistDir}/${categoryKey}/${s}`
    const orderedName = `${checklistDir}/${categoryKey}/${index}.${s}`
    fs.renameSync(currentName, orderedName)

    console.log(chalk.cyan('Renamed ') + chalk.dim(`${checklistDir}/${categoryKey}/`) + chalk.dim.underline(`${index}.${s}`))
  })
}

