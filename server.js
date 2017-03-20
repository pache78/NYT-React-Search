//Server Dependencies 
var express = require('express'); 
var bodyParser = require('body-parser'); 
var logger = require('morgan'); 
var mongojs = require('mongojs'); 

//Logging 
app.use(logger('dev')); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.text()); 
app.use(bodyParser.json({type:'application/vnd.api+json'})); 
app.use(express.static('./public')); 
