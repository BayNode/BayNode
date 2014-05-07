var assert = require('assert')
  , async = require('async')
  , _ = require('underscore')
  , work = require('../lib/work')
;

describe('async', function() {
  this.timeout(10000);

  it('series should process sequentially', function(done) {

    var expected = [ 1, 2, 3, 4, 5];

    async.series([
      function(callback) {
        work.doWork(1, callback);
      },
      function(callback) {
        work.doWork(2, callback);
      },
      function(callback) {
        work.doWork(3, callback);
      },
      function(callback) {
        work.doWork(4, callback);
      },
      function(callback) {
        work.doWork(5, callback);
      }
    ],
    function(err, results) {
      assert(_.isEqual(results, expected));
      done();
    });

  });

});
