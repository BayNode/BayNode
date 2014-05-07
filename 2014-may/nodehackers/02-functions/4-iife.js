console.log('should print hello...');

(function () {

  console.log('hello');

}());


console.log('should print 2...');

var f = (function () {
  var counter = 0;

  return {

    next: function() {
      counter += 1;
    },

    value: function() {
      return counter;
    }
  };

}());

f.next();
f.next();

console.log(f.value());
