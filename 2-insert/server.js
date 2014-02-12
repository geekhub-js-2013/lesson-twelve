var express = require('express'),
    http = require('http'),
    database = require('./database');

var app = express();

app.use(express.logger());
app.use(express.bodyParser());

app.post('/', function(req, res) {
    database.insert(req.body, function(err) {
        if(err) {
            res.end(err, 500);
        }
        else {
            res.end();
        }
    });
});

app.get('/', function(req, res) {
    database.all(function(err, docs) {
        res.end(JSON.stringify(docs));
    });
});

app.get('/:name', function(req, res) {
    database.find({name: req.params.name}).toArray(function(err, docs) {
        res.end(JSON.stringify(docs));
    });
});

http.createServer(app).listen(1337);
console.log("Server running at http://localhost:1337/");
