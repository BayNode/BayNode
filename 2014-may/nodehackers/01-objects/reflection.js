
var person = {
    name: 'Bob',
    age: 30
}

console.log(typeof person);          // 'object'
console.log(typeof person.name);     // 'string'
console.log(typeof person.age);      // 'number'

console.log(typeof person.city);     // 'undefined'

console.log(typeof person.toString)  // 'function'

if (person.hasOwnProperty('toString')) {
    console.log('only if you added it to the person object!');
}


// enumerating properties
console.log('enumerating person properties...');
var name;
for (name in person) {
    // typicaly don't want to enumerate properties from up the object prototype
    // chain and also don't want to enumerate functions
    if (person.hasOwnProperty(name) && typeof person[name] != 'function') {
        console.log('%s : %s', name, person[name]);
    }
}

// delete a property
console.log('enumerate after deleting age property');
delete person.age;
for (name in person) {
    if (person.hasOwnProperty(name) && typeof person[name] != 'function') {
        console.log('%s : %s', name, person[name]);
    }
}
