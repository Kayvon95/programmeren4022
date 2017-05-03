/**
 * Created by Kayvon Rahimi on 3-5-2017.
 */
/**
 * Created by Kayvon Rahimi on 3-5-2017.
 */
var http = require('http');
var express = require('express');
var config = require('config.json');

var app = express();

app.set('PORT' , config.webPort);
var port = process.env.PORT || app.get('PORT');


app.get( '*' , function(req, res, next){
    //example = GET + /hi, POST + /about
    console.log(  req.method + " " + req.url );
    next();
});

app.get('/hi', function(request, response){
    response.send('The server has noticed you.');
});

app.get('/about', function(request, response){
    response.send('This project serves as practice for programming classes.');
});

app.listen( port, function(){
    console.log('App is listening on PORT ' + port)
});