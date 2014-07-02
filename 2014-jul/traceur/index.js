// /*jshint esnext: true*/

 
// Block scoping
// for (let i=1; i<10; i++) {
// 	for (let i=1; i<10; i++) {
// 		console.log('Block scoping:', i)
// 	}
// }

// Destructuring Assignment
// let [a,,b] = [1,2,3]
// let {c, d} = {c: 4, d: 5}
// console.log('Destructuring Assignment:', a, b, c, d)

// Array Comprehensions
// let arrComp = [
// 	for (x of 'abcdefgh'.split(''))
// 		for (y of '12345678'.split(''))
// 			(x+y)
// ]
// console.log('Array Comprehensions:', arrComp)

// let arr = [{b: 0}, {b: 1}, {b: 2}, {b: 3}]
// let bs = [for (x of arr) x.b]
// console.log('Array Comprehensions:', bs)

// Computed Property Names
// let x = 'something really cool'
// let obj = {
// 	[x]: 'hello'
// }
// console.log('Computed Property Names:', obj[x])

// Default Parameters
// function bar(arg=true, arg2=!arg) {}
// function foo(list, listLength = list.length, loggingKey = 'foo for List of length '+listLength) {
// 	console.log('Default Parameters:', loggingKey)
// }
// foo([1,2,3])
// foo([1,2,3], 22)
// foo([1,2,3], 100, 'Tiki tiki tiki')

// Property Method Assignment
// let obj = {
// 	toString() {
// 		return 'Tiki tiki tiki'
// 	}
// }
// console.log('Property Method Assignment:', String(obj))

// Object Initializer Shorthand
// let a = 'hello', b = 'world'
// let obj = {a, b}
// console.log('Object Initializer Shorthand:', obj)

// Rest
// function rest(someValue, ...options) {
// 	console.log('Rest:', someValue, options)
// }
// rest('Tiki tiki tiki', true, false, 'hello')

// Spread
// let options = [true, false, 'hello']
// rest('Tiki tiki tiki', ...options)

// Template Literals
// let name = {first:'Adam',last:'Crabtree'}
// console.log('Template Literals:', `hello ${name.first} ${name.last}`)

// Arrow Functions
// let square = function (x) {
// 	return x * x
// }
// let square = (x) => {
// 	return x * x
// }
// let square = (x) => x * x
// let square = x => x * x
// console.log('Arrow Functions:', square(2))

// let arr = [{b: 0}, {b: 1}, {b: 2}, {b: 3}]
// let bs = arr.map(value => value.b);
// console.log('Arrow Functions:',bs)
// process.nextTick(()=> console.log('hello'));

// Fat Arrow Inherited Context
// function foo() {
// 	return () => this
// }

// let that = foo.apply({hello: 'world'})
// console.log('Fat Arrow Inherited Context:', that)
