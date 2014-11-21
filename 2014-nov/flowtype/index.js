var http = require('http')
var fs = require('fs')
var _ = require('lodash')

var routes = {
  readFile: function(req, res) {
    fs.createReadStream(__filename).pipe(res)
  },
  echo: function(req, res) {
    req.pipe(res)
  },
  hello: function(req, res) {
    res.end('Hello BayNode!')
  }
}

http.createServer(function handler(req, res) {
  routes[req.url.slice(1)](req, res)
}).listen(8000, function() {
  console.log('Server listening at http://127.0.0.1:8000')
})

