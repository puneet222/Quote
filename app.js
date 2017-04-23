var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/quoteDb');

var db = mongoose.connection ;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    // Connection Successful
    console.log("Connected correctly to server");
});

var express = require('express');

var app = express() ;
app.listen(4010 , function(){
    console.log('connected');
}) ;

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get('/', function(request, response) {
    response.render('/index');
});

var quote = require('./routes/quote') ;

app.use('/quote' , quote) ;
