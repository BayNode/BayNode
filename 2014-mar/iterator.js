"use strict"

function *objectIterator() {
	for (var i in obj) {
		yield [i, obj[i]]
	}
}


var obj = objectIterator({a: 'b', c: 'd', e: 'f'});
var obj = objectIterator([1, 2, 3, 4]);

console.log(obj.next()); // {value: ['a', 'b'], done: false}
console.log(obj.next()); // {value: [ 'c', 'd'], done: false}
console.log(obj.next()); // {value: [ 'e', 'f'], done: true}
console.log(obj.next()); // StopEnumeration

for (let i in obj) {
	console.log('[key, value]: ', i);
}

for (let [k, v] in obj) {
	console.log('key: ', k);
	console.log('value: ', v);
}