/**
 * Converts strings to lowercase and replaces spaces with dashes
 * Used to convert category and subcategoies into folder names
 *
 * @param {String} str - e.g. 'Microsoft Entra ID Tenants'
 * @returns  {String} - e.g. 'microsoft-entra-id-tenants
 */
module.exports = function (str) {
  return str.toLowerCase().replace(/\s+/g, '-')
}
