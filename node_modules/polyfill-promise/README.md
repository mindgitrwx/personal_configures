# polyfill-promise

Use this to ensure the Promise constructor is available, even in old versions of node (< 0.12) or browsers

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## usage

```js
var Promise = require('polyfill-promise')
// either native or polyfilled

var foo = Promise.resolve('foo')
foo.then(...)
```

or

```js
require('polyfill-promise/register')
// global Promise constructor is now available
var foo = Promise.resolve('foo')
foo.then(...)
```

## API

### `Promise.polyfilled : Boolean?`
If polyfill is used, this read-only property is set to true. If a native implementation is available, this property is undefined.

additionally, implements the [Promise api](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). Quick reference:

### `class Promise(factory : (resolve: Function, reject: Function) => void)`

Creates a pending promise. Pass it a `factory` function which wraps the asynchronous operation. `factory` is called with two functions, `reject` and `resolve` which should be called when the asynchronous operation is complete or an exception ocurrs.

Example: delay a value by an amount of time
```js
function delay(value, timeout) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(value)
    }, timeout)
  })
}
```

Example: wrap a node-style callback
```js
var result = new Promise(function (resolve, reject) {
  asyncFn(function (err, result) {
    if (err) { reject(err); return }
    resolve(result)
  })  
})
```

### `Promise.reject(reason?: Value) => Promise`
Create a Promise which is immediately rejected with an optional `reason`.

### `Promise.resolve(val?: Value) => Promise`
Create a Promise which is immediately resolved with an optional `val`.

### `Promise.all(promises: Array<Promise>) => Promise<Array>`
Returns a Promise which is resolved when all of the Promises in the `promises` array are resolved, or rejected if any of them is rejected. The resolved value is an Array of the resolved values in the same order.

### `Promise.race(promises: Array<Promise>) => Promise`
Returns a Promise which is resolved as soon as the first Promise in the `promises` array is resolved, or rejected when the first Promise in the `promises` array is rejected. Since a Promise can only be either resolved or rejected but not both, if one Promise in `promises` is resolved and then another one is rejected, the resulting Promise will still be resolved and will ignore the later rejection.

### `Promise#then(fn?: (Value) => Value, err: (Value) => Value) => Promise`
Chains a function `fn` on the Promise to be evaluated when the Promise is resolved. The return value of `fn` is resolved to a new Promise which allows for chaining and composition.

An optional second parameter is an error handling function which is called if the Promise is rejected.

### `Promise#catch(err: (Value) => Value) => Promise`
Chains an error handling function to a Promise chain which will be called if a Promise is rejected. Returns a new Promise.


## tests

```console
$ npm test
```

## contributions

none yet

## license
by jden <jason@denizac.org>, ISC license
