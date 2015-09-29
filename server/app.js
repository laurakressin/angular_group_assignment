var express = require('express');
var app = express();
var noun = require("./public/assets/data/noun.json");
var adjective = require("./public/assets/data/adj.json");

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/public/views/index.html')
})

app.get('/getNoun', function(request, response) {
    response.send(noun);
    console.log("Got nouns " + noun);
});

app.get('/getAdjective', function(request, response) {
    response.send(adjective);
    console.log("Got adjective: " + adjective);
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;