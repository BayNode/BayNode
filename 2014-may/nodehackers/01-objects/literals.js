
var emptyObject = {};


var person = {
    first: 'Tony',
    last:  'Pujals'
};

console.dir(person);

console.log("person['first']: " + person['first']);
console.log('person.last: ' + person.last);

var nested = {
    name: {
        first: 'Tony',
        last:  'Pujals'
    },
    location: {
        city: 'Mountain View',
        state: 'CA'
    }
};

console.log(nested);

console.log('nested["name"]["first"]: ' + nested['name']['first']);
console.log('nested.name.first: ' + nested.name.first);

console.log("name: %s %s %s",
  nested.name.first,
  nested.name.middle || '(none)',
  nested.name.last);
  
var middle = nested.name.middle || '';
