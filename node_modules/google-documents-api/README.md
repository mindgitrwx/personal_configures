# google-documents-api

[![Build Status](https://travis-ci.org/SC5/google-documents-api.svg?branch=master)](https://travis-ci.org/SC5/google-documents-api)

Unofficial Google Documents node API.  Read data from Google Document
(only the word processor documents, Google Spreadsheet, Presentation,
etc. not supported) in your node app.

## Usage

1. Install module
   ```shell
   npm install google-documents-api
   ```
2. Obtain service auth credentials.  Follow steps 2-7 in
   [google-sheets-api usage instructions](https://github.com/SC5/google-sheets-api#usage).
3. Authorize your service email address (obtained in previous step)
   to read the document.
4. Collect the document id from URL.
   `https://docs.google.com/document/d/THIS_IS_THE_DOCUMENT_ID/edit`

Now you are ready to go.

```javascript
var fs = require('fs');
var Documents = require('google-documents-api');

var documentId = 'your-document-id';
var serviceEmail = 'generated-by-dev-console@developer.gserviceaccount.com';
var serviceKey = fs.readFileSync('path/to/your/sheets.pem').toString();

var docs = new Documents({ email: serviceEmail, key: serviceKey });

docs.getDocumentHtml(documentId).then(function(htmlContent) {
  console.log(htmlContent);
})
.catch(function(err){
  console.error(err, 'Failed to read document');
});
```

## API

### Documents(options)

Initialize Documents client

* @param {Object} options
* @param {String} options.email - Service email address
* @param {String} options.key   - Service .PEM key contents

### documents.getDocumentHtml(id)

Fetch Google Document as HTML

* @param  {String} id - Document id
* @return {String}    - Document content as HTML (root element is <html>)

If you intend to display document contents as part of app/site,
observe that the returned string is full-page HTML.  Therefore is
recommended to wrap it up in iframe to encapsulate styles and avoid
the doc and your app/site from breaking each other.

## License

MIT

## Credit

Module was initiated by

<a href="http://sc5.io">
  <img src="http://logo.sc5.io/78x33.png" style="padding: 4px 0;">
</a>
