/**
 * exports is a reference to module.exports
 * You can attach properties and functions to it and
 * they will be exported.
 */

exports.name = 'anonymous';

exports.greet = function() {
  console.log('hello, ' + exports.name);
};


