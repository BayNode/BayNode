var trycatch = require('trycatch');
var express = require('express');

trycatch.configure({'long-stack-traces': true});

var app = express();
app.use(function(req, res, next) {
	trycatch(next, function(err) {
		if (err.message === 'Fail.') {
			throw new Error('not!');
		}
		res.writeHead(500);
		console.log(err.stack);
		res.end('Something wrong happened');
	})
})

app.get('/hello', function(req, res){
	var body = 'Hello World';
	res.setHeader('Content-Type', 'text/plain');
	res.setHeader('Content-Length', body.length);
	res.end(body);
});

app.get('/error', function(req, res){
	process.nextTick(function() {
		throw new Error('Fail.');
	})
});

app.listen(3000);
console.log('Listening on port 3000');

process.on('uncaughtException', function(err) {
	console.log('Stop listening. Closing in 5s...', err.stack);
	setTimeout(function() {
		process.exit();
	}, 5000);
});

process.on('uncaughtApplicationException', function(err) {
	console.log('That\'s weird, but we\'re cool...');
});

