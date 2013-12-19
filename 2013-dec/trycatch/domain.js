var domain = require('domain');
var d = domain.create();

d.on('error', function(er) {
  console.error('Caught error!', er);
});
d.run(function() {
  process.nextTick(function() {
    setTimeout(function() { // simulating some various async stuff
      fs.readFile('non-existent file', function(err, data) {
        console.log(String(data));
        console.log(data.length);  // This will error
      });
    }, 100);
  });
});

process.on('uncaughtException', function(err) {
  console.log('Here\'s our error: \n', err.stack);
});