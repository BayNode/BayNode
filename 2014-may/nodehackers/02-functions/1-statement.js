console.log('function statements');
console.log('===================');

// can invoke functions before they are declared
a();


function a() {
    console.log('a');
    b();
}


function b() {
    console.log('b');
}