var express = require('express');
var app = express();
var unirest = require('unirest');
// var bby = require('bestbuy');
app.use(express.static('public'));
// app.get('/public',function(request, response){
//     response.send('Server is Running :)');
// });
var bby = require('bestbuy')('xfwrtckumc5ug688k2dxyq5v');
app.get("/api",function(request, response){
    bby.products('bestSellingRank>=4&bestSellingRank>100',
        {show:'bestSellingRank,bestSellingRank,name,sku'}, function(data){
      response.send(data);
      console.log('it works');
    });
      
});
    


app.listen(process.env.PORT || 8080);