var express = require('express');
var app = express();
var unirest = require('unirest');
app.use(express.static('public'));
// app.get('/public',function(request, response){
//     response.send('Server is Running :)');
// });


app.listen(process.env.PORT || 8080);