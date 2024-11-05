const chalk = require('chalk')

function logGroup (title, cb) {
  console.group(title)

  cb()

  console.log('')
  console.groupEnd()
}

module.exports = logGroup
