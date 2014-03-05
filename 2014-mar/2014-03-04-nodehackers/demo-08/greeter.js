/**
 * exports is a reference to module.exports
 * You can attach properties and functions to it and
 * they will be exported.
 */

function Greeter() {
  this.name = 'anonymous';
}

module.exports = Greeter;

Greeter.prototype.greet = function() {
  console.log('hello, ' + this.name);
}

