console.log('function statements');
console.log('===================');

var b = function() {
    console.log('b');
}


var a = function () {
    console.log('a');
    b();
}


a();