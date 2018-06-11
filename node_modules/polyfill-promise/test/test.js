/* globals describe, it, deboreEach, afterEach */
require('mocha')
require('chai').should()
var expect = require('chai').expect

describe('Promise', function () {
  beforeEach(function () {
    delete require.cache[require.resolve('../index')]
  })
  afterEach(function () {
    if (global.Promise && global.Promise.polyfilled) {
      delete global.Promise
    }
  })
  it('should have the Promise interface', function () {
    var Promise = require('../')
    Promise.should.be.a('function')
    Promise.all.should.be.a('function')
    Promise.race.should.be.a('function')
    Promise.reject.should.be.a('function')
    Promise.resolve.should.be.a('function')
  })
  it('should create an ES6 Promise', function () {
    var Promise = require('../')
    var promise = Promise.resolve('test')
    promise.then.should.be.a('function')
    promise.catch.should.be.a('function')
  })

  describe('/register', function () {
    it('writes to global.Promise', function () {
      delete global.Promise
      expect(global.Promise).to.be.undefined
      require('../register')
      global.Promise.should.exist
    })
  })
})
