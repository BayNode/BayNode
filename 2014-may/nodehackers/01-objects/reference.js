var p1 = {
    name: 'Bob',
};

var p2 = p1;
p2.name = 'Alice';

console.log(p1.name); // prints Alice
