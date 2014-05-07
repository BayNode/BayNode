// mock api

function connect(callback) {
  process.nextTick(function() {
    callback(null, {});
  });
}

function collection(name, callback) {
  process.nextTick(function() {
    callback(null, {});
  });
}

function find(id, callback) {
  process.nextTick(function() {
    callback(null, { id: '123'});
  });
}

// using the api

connect(function(err, db) {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  // db.collection()
  collection('users', function(err, coll) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    // coll.find()
    find('123', function(err, user) {
      if (err) {
        console.error(err);
        process.exit(1);
      }

      console.log(user);
    });

  });

});

console.log('fetching user');
