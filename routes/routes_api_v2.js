/**
 * Created by Kayvon Rahimi on 3-5-2017.
 */
// API version 2
var express = require('express');
var router = express.Router();
var path = require('path');
var recipes = require('../recipes');

router.get('/info', function(request, response) {
    response.status(200);
    response.json({
        "description": "Recipes REST server API version 2."
    });
});

router.get('/recipes', function(request, response){
   response.json(recipes);
});


router.get('*', function(request, response){
   response.status(404);
   response.json({ "description" : "404 - Response not found.    Wrong parameter, please check your URL again."});
});

module.exports = router;