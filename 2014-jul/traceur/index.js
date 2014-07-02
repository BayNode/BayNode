// /*jshint esnext: true*/

// Block scoping
for (let i=1; i<10; i++) {
	for (let i=1; i<10; i++) {
		console.log('Block scoping:', i)
	}
}

// Destructuring Assignment
// let [a,b] = [1,2,3]
// let {c, d} = {c: 4, d: 5}
// console.log('Destructuring Assignment:', a, b, c, d)

// Array Compprehensions
// let arrComp = [for (x of 'abcdefgh'.split('')) for (y of '12345678'.split('')) (x+y)]
// console.log('Array Comprehensions:', arrComp)

// Computed Property Names
// let x = 'something really cool'
// let obj = {
// 	[x]: 'hello'
// }
// console.log('Computed Property Names:', obj[x])

// Default Parameters
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
// console.log('Property Method Assignment:', obj)

// Object Initializer Shorthand
// let a = 'hello', b = 'world'
// let obj = {a, b}
// console.log('Object Initializer Shorthand:', obj)

// Rest
// function rest(someValue, ...options) {
// 	console.log('Rest:', someValue, options)
// }
// foo('Tiki tiki tiki', true, false, 'hello')

// Spread
// let options = [true, false, 'hello']
// rest('Tiki tiki tiki', ...options)

// Template Literals
// let firstName = 'Adam', lastName = 'Crabtree'
// console.log('Template Literals:', `hello ${firstName} ${lastName}`)

// Arrow Functions
// let arrowFn = function (x) {
// 	return x * x
// }
// let arrowFn = (x) => {
// 	return x * x
// }
// let arrowFn = (x) => x * x
// let arrowFn = x => x * x
// console.log('Arrow Functions:', arrowFn(2))

// var arr = [1,2,3,4].map(value => value*2);
// process.nextTick(()=> console.log('hello'));

// Advanced Combination
var fn = ({a=true, b}) => {
  // if (!options.a) options.a = true
  console.log(a, b);
}

fn({
  // a: 'hello',
  b: 'world'
})
// console.log(arr);



// let that = this;
// var obj = {
//   a: a => b => c => {
//     // let foo = 'asf';
//     console.log(a,b,c)
//   }
// };

// obj.a(1)(2)(3);
// // (a => b => console.log(a, b, this === that))(1)(2);
// // console.log(e => { console.log(e.name); });

// export function a() {}


// (function({a, b=3}) {
//   console.log(a, b);
// })({
//   a: 1
// })