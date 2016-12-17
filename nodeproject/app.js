var express = require("express");
var app = express();

var port = process.env.PORT; // Global variable from c9

app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('bower_components'));

app.get('/', function(req, res){
    res.send('Hello world!');
});

app.get('/routing', function(req, res){
    res.send('Hello routing!');
});

app.listen(port, function(err) {
    console.log('The server is running on port: ' + port);
});