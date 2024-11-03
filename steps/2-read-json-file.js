const fs    = require('fs')
const chalk = require('chalk')

module.exports = function (filePath) {
  const data = fs.readFileSync(filePath, 'utf8')
  console.log(chalk.green('Read'), filePath)
  return JSON.parse(data)
}