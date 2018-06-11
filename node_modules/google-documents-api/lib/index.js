var Sheets = require('google-sheets-api').Sheets;

/**
 * Documents API client
 * @constructor
 * @param {Object} options
 * @param {String} options.email - Service email address
 * @param {String} options.key   - Service .PEM key contents
 */
function Documents(options) {
  this.sheets = new Sheets(options);
  this.sheets.baseUrl = "https://docs.google.com/feeds/";
}

/**
 * Fetch Google Document as HTML
 * @param  {String} id - Document id
 * @return {String}    - Document content as HTML (root element is <html>)
 */
Documents.prototype.getDocumentHtml = function(id) {
  var path = 'download/documents/export/Export?id=' + id + '&exportFormat=html';
  return this.sheets.get(path).then(function(data) {
    return data;
  });
}

module.exports = Documents;
