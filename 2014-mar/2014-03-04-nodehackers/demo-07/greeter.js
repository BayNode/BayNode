/**
 * exports is a reference to module.exports
 * You can attach properties and functions to it and
 * they will be exported.
 */

module.exports = {
  name: 'anonymous',

  greet: function() {
    console.log('hello, ' + this.name);
  }
};

