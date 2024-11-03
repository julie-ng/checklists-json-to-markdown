/**
 * Creates markdown content for index files
 * used for categories and subcategories
 *
 * @param {String} category
 * @param {String} subcategory (optional)
 * @returns {String}
 */
module.exports = function (category, subcategory = null) {
  const title = (subcategory === null)
    ? category
    : subcategory

  let content = ''
  content += '---'+ '\n'
  content += `title: ${title}` + '\n'

  if (subcategory !== null) {
    content += `category: ${category}` + '\n'
  }

  content += '---'+ '\n'
  content += ''+ '\n'
  content += `# ${title}` + '\n'

  return content
}