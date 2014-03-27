"use strict"
// run this with --harmony on node v0.11.3+
var q = require('bluebird');
let fs = require('fs')
q.promisifyAll(fs);
let co = require("co")
let request = require('request')

co(function* () {
  var headers = yield function *() {
		var a = fs.readFileAsync(__filename);
		var b = request.bind(null, 'http://google.com');

	  return (yield [a, b])[1].headers;
  }

  return headers
})(function(err, result) {
  if (err) throw err
  console.log(result)
})
