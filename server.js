var http = require('http');
var express = require('express');
var config = require('config.json/lib/config.json');

var app = express();

app.set('PORT' , config.webPort);
var port = process.env.PORT || app.get('PORT');


app.get( '*' , function(req, res, next){
    //example = GET + /hi, POST + /about
    console.log(  req.method + " " + req.url );
    next();
});

app.all('*', function(request, response, next) {
    console.log(request.method + " " + request.url);
    next();
})

app.use('/api/v1', require('./routes/routes_api_v1'));

app.get('/hi', function(request, response){
    response.send('The server has noticed you.');
});

app.get('/about', function(request, response){
    response.send('This project serves as practice for programming classes.' + '\n'  +
        'This file is currently hosted on port ' + port );
});

app.listen( port, function(){
    console.log('App is listening on PORT ' + port)
});