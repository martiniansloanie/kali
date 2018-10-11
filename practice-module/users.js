var collection = {};
collection.users = [
    {'name' : 'pete1', 'email' : 'pete1@MimeType.edu'},
    {'name' : 'pete2', 'email' : 'pete2@MimeType.edu'},
    {'name' : 'pete3', 'email' : 'pete3@MimeType.edu'},
];

collection.save = function save(name, email) {
    collection.users.push(
        {'name' : name, 'email' : email},
    );
};

// create the module for users and expose it to our app
module.exports = {'collection' : collection};
