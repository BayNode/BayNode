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

var outer = function () {
    var name = 'Bob';
    
    // inner functions have access to the outer context
    var inner = function () {
        console.log('name: ' + name);
    };
    
}


var f = outer.inner;

f();


