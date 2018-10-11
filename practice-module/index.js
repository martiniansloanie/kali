// load node module
var collection = require('./users').collection;

//list users
console.log(JSON.stringify(collection));
console.log('------------------------');

// add user
var name = 'daye';
var email = 'dave@mit.edu';
collection.save(name, email);

//list users again
console.log(JSON.stringify(collection));
console.log('------------------------');