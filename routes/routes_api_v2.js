/**
 * Created by Kayvon Rahimi on 3-5-2017.
 */
// API version 2
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/info', function(request, response) {
    response.status(200);
    response.json({
        "description": "Recipes REST server API version 2."
    });
});

router.get('/api/v2/recipes', function(request, response){
   var recipes = require('../recipes');
   response.send(recipes);
});


router.get('*', function(request, response){
   response.status(404);
   response.send("404 - Response not found " + '\n'
       + "Wrong parameter, please check your URL again.")
});

module.exports = router;