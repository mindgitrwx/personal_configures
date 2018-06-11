var P = require('./index')

if (!global.Promise) {
  global.Promise = P
}
