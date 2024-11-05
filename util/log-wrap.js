const chalk = require('chalk')

function logGroup (title, cb) {
  console.group(chalk.bgBlackBright.bold(title))

  cb()

  console.log('')
  console.groupEnd()
}

module.exports = logGroup
