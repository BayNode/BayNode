// run this with --harmony on node v0.11.3+
"use strict"
let fs = require('fs')
let co = require("co")
let request = require('request')

co(function* () {
	var a = fs.readFile.bind(null, __filename);
	var b = request.bind(null, 'http://google.com');
	function c(fn) {
		process.nextTick(function() {
			fn(null, true)
		})
	}

  var res = yield [a, b, c];

  console.log(res[1].headers)
  return 'success!'
})(function(err, result) {
  if (err) throw err
  console.log(result)
})
