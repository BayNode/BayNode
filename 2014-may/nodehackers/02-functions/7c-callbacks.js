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

connect(onConnect);

function onConnect(err, db) {
  handleError(err);
  // db.collection
  collection('users', onCollection);
}

function onCollection(err, coll) {
  handleError(err);
  // coll.find
  find('123', printUser);
}

function printUser(err, user) {
  handleError(err);
  console.log(user);
}

function handleError(err) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
}

console.log('fetching user');
