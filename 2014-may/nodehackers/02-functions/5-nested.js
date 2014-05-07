console.log('nested functions');
console.log('================');

a();

function a() {
    console.log('a');
    b();

    // function b only available in function a scope
    function b() {
        console.log('b');
    }

}

try {
  b();
} catch (e) {
  console.log('(note: function b only available in function a scope)');
}

console.log('closures');
console.log('========');

var outer = function (name) {
    var _name = name;

    // inner functions have access to the outer context
    return function () {
        console.log('name: ' + _name);
    };
}

var inner = outer('Alice');

console.log('should print Alice...');
inner();
