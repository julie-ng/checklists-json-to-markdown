const fs = require('fs')
const chalk = require('chalk')

/**
 * Create target output folder or delete and
 * recreate if it already exists
 *
 * @param {String} targetDir
 */
module.exports = function (targetDir) {
  const opts = {
    recursive: true,
    force: true
  }

  if (fs.existsSync(targetDir)) {
    try {

      console.log(chalk.yellow('Already exists'), targetDir)

      fs.rmSync(targetDir, opts)
      console.log(chalk.red('Deleted'), targetDir)

      fs.mkdirSync(targetDir, opts)
      console.log(chalk.green('Created'), targetDir)
    }

    catch (err) {
      // console.log('got error?', err)
      throw err
    }
  } else {
    fs.mkdirSync(targetDir, opts)
    console.log(chalk.green('Created'), targetDir)
  }
}
