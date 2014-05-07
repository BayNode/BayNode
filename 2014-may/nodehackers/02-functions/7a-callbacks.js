
function fetchResource(name, callback) {
  // simulate asynchronous work
  process.nextTick(function() {
    if (!name) {
      return callback(new Error('invalid parameter: name'));
    }

    callback(null, { name: name })
  });
}


fetchResource('Bob', function(err, resource) {
  if (err) {
    console.log(err);
  } else {
    console.log(resource);
  }
});

console.log('fetching resource');
