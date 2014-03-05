var Greeter = require('./greeter');

var g = new Greeter();

console.log(g.name);

g.name = 'world';
g.greet();

