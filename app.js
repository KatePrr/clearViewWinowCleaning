var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var pg = require('pg');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//
//app.get('/data', function(req,res){
//  res.send({message: 'hello'})
//});
//
//app.post('/data/~~~~~~~~', function(req, res){
//  res.send(req.params.number);
//});

// Serve back static files
app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));
app.use(express.static('public/images'));



app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function(){
  console.log('Ready to roll on port: ', app.get('port'));
});