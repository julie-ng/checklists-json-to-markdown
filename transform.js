const fs = require('fs')

const targetDir = __dirname + '/output'
// console.log('targetDir', targetDir)


fs.readFile('./data/alz_checklist.en.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const result = parseJSON(data)
  // console.log('result.items?', result.items)

 result.items.forEach((item) => {
    const itemDir = `${_toLowerDashed(item.category)}/${_toLowerDashed(item.subcategory)}`
    const itemFilename = `_${_itemIdToFilename(item.id)}.md`
    console.log(`${itemDir}/${itemFilename}`)
  })
})

// ****************************************

function parseJSON (jsonStr) {
  const parsed = JSON.parse(jsonStr)
  // console.log(Object.keys(parsed))
  return parsed
}

function _toLowerDashed (str) {
  return str.toLowerCase().replace(/\s+/g, '-')
}

function _createFolder (folderName) {
  // const folderName = '/Users/joe/test';
  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName)
      return
    }
  } catch (err) {
    throw new Error('Could not create folder', err)
    console.error(err)
  }
}

function _itemIdToFilename (itemId) {
  return itemId.replace('.', '-').toLowerCase()
}