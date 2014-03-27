// List all files recursively within a directory with maximum parallelism
"use strict";
let path = require('path')
let fs = require('fs')
let co = require('co')
let _ = require('lodash')

Function.prototype.partial = function() {
	var args = Array.prototype.slice.call(arguments)
	args.unshift(null)
	return this.bind.apply(this, args)
}

function* statFile(filePath) {
	var stat = yield fs.stat.partial(filePath)
	if (stat.isDirectory()) {
		return yield listDir(filePath)
	} else {
		return filePath.replace(__dirname, '.')
	}
}

function* listDir(dir) {
	var files = yield fs.readdir.partial(dir)
	return yield files.map(function(fileName) {
		var filePath = path.join(dir, fileName)
		return statFile(filePath)
	})
}

co(function* () {
	_(yield listDir(__dirname))
	.flatten()
	.each(function(filePath) {
		console.log(filePath)
	})

	// Or, call a generator, but don't wait
	co(listDir)(__dirname)
})()