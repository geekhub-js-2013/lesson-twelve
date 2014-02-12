var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;

    var collection = db.collection('2-insert');
    exports.insert = collection.insert.bind(collection);
    exports.all = function(cb) {
        collection.find().toArray(cb);
    };
    exports.find = collection.find.bind(collection);
});
