const fs    = require('fs')
const chalk = require('chalk')

/**
 * Rename folders to preserve sort order from JSON
 *
 * @param {String} checklistDir
 * @param {Object} categories
 */
module.exports = function (checklistDir, categories) {
  Object.keys(categories).forEach(function (c, i) {
    const currentName = `${checklistDir}/${c}`
    const orderedName = `${checklistDir}/${i+1}.${c}`
    fs.renameSync(currentName, orderedName)
    console.log(chalk.cyan('Renamed ') + chalk.dim(`${checklistDir}/`) + chalk.dim.underline(`${i+1}.${c}`))
  })
}