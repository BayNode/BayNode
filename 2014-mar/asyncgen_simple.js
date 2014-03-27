"use strict";
var assert = require('assert')
let co = require("co")
let fs = require('fs')
let _ = require('lodash')

co(function* gen() {
	// _.partial(fs.readDir, __dirname)(console.log)
	(yield _.partial(fs.readdir, __dirname)).forEach(function(name) {
		console.log(name)
	})
})()
