const chalk = require('chalk')

function logGroup (title, cb) {
  console.log(chalk.bgYellow.black(` ${title} `))
  console.group()

  cb()

  console.groupEnd()
  console.log('')
}

module.exports = logGroup
