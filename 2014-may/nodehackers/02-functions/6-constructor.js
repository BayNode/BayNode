// constructor function
function Person(name) {
  this.name = name;
}

// greet function is shared with all Person instances
Person.prototype.greet = function() {
  console.log('Hello, %s', this.name);
}

var p = new Person('Bob');

console.log('should print Hello Bob...');
p.greet();
