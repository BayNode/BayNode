

function transform(str, transformFunc) {
    return transformFunc(str);
}

function shout(str) {
    return str.toUpperCase();
}

console.log(transform('hey there', shout));

// anonymous func
console.log(transform('hey there', function(s) {
    return s + '!!!';
}));

