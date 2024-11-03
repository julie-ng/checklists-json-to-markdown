/**
 * Converts item ID to a filename, converting periods to dashes
 *
 * @param {String} itemId - e.g. A01.03
 * @returns {String} - e.g. a01-03
 */
module.exports = function (itemId) {
  return itemId.replace('.', '-').toLowerCase()
}
