const low = 100;
const high = 500;

function randomMillis() {

  return Math.floor(Math.random() * (high - low + 1) + low);
}

exports.doWork = function(id, callback) {
  var ms = randomMillis();

  setTimeout(function() {
    callback(null, id);
  }, ms);
};
