var express = require('express');
var app = express();
var unirest = require('unirest');
// var bby = require('bestbuy');
var data = require('./dataServer');
var http = require('http');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

app.use(express.static('public'));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

var bby = require('bestbuy')('xfwrtckumc5ug688k2dxyq5v');
console.log('hello world');
//creating a storage object
//var storage = new storage();

app.get('/api', function (request, response) {
    bby.openBox('categoryId=' + data.categoryId[0].id).then(function (data) {
        //response.send(data);
        response.send(data.results);
        console.log(data.results[0]);

    });

});



app.listen(process.env.PORT || 8080);
