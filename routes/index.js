var express = require('express');
var fs = require('fs');
var path = require('path');
var EventEmitter=require('events').EventEmitter;
var router = express.Router();
var filesEE = new EventEmitter();
var slides = [];
var slidePath = "../sertac-oz/public/images/slider/";

/* GET home page. */
router.get('/', function(req, res, next) {
	var images = '{';
	getSlides(slidePath);
	res.render('index', { title: 'Anasayfa', slideFiles: slides});
});

function getSlides(slidePath){
	slides = [];
	var array = fs.readdirSync(slidePath);
	array.forEach(function(file){
		slides.push(file);
	});
}

function putSlide(fileName)
{
    this.fileName = fileName;
    return this;
}

module.exports = router;
