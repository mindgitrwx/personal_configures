var P

if (typeof global.Promise !== 'function') {
  P = require('bluebird')
  Object.defineProperty(P, 'polyfilled', {
    value: true,
    writable: false,
    enumerable: false
  })
} else {
  P = global.Promise
}

module.exports = P
