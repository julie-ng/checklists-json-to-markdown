/**
 * Converts item Raw JSON object into a YAML frontmatter
 *
 * @param {Object} item
 * @returns {String}
 */
module.exports = function (item) {
  let content = ''

  content += '---'+ '\n'
  for (const k in item) {
    content += `${k}: "${item[k]}"` + '\n'
  }
  content += '---'+ '\n'

  return content
}