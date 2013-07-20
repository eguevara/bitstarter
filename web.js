#!/usr/bin/env node

var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.logger());

app.get('/', function(request, response) {
    response.send(readHTML());
});

var readHTML = function () {
   
    var data = fs.readFileSync('index.html');
    return data.toString();

};


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
