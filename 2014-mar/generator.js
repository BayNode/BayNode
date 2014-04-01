var assert = require('assert')

function* gen() {
	console.log('entering');
  console.log(yield 1);
	console.log('processing');
  assert(yield 2, true);
	console.log('returning');
  return 3;
}

var g = gen();

console.log(1)
console.log(g.next());
console.log(2)
console.log(g.next('here'));
console.log(3)
console.log(g.next(true));