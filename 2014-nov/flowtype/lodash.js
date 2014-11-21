/* @flow */
var _ = require('lodash')

_.map({foo: 'bar'}, function(value, key) {
    return true
  })
  .each(console.log)

require('events')
