var Promise = require('polyfill-promise');
var proxyquire = require('proxyquire');

var mockGoogleSheetsApi = function() {}
var Documents = proxyquire('../lib', {
  'google-sheets-api': {
    Sheets: mockGoogleSheetsApi
  }
});

describe('Documents', function() {

  describe('constructor', function() {
    it('does not fail with empty options', function() {
      new Documents({});
    });

    it('does not fail with options', function() {
      new Documents({email: 'test@email.invalid', key: 'testkey'});
    });
  });

  describe('#getDocumentHtml', function() {
    it('requests feed export and returns full response data', function(done) {
      mockGoogleSheetsApi.prototype.get = function(path) {
        expect(path).toBe('download/documents/export/Export?id=test-document-id&exportFormat=html');
        return Promise.resolve('test-content');
      };

      var docs = new Documents({email: 'test@email.invalid', key: 'testkey'});
      docs.getDocumentHtml('test-document-id').then(function(htmlContent) {
        expect(htmlContent).toBe('test-content');
        done();
      });
    });
  });
});
