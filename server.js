var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config');
var mongoose = require('mongoose');
var mongooses = require('mongooses');
var request = require('request');
var cheerio = require('cheerio');
var nodemailer = require("nodemailer");
var fs = require('fs');
var Gym = require('./app/models/gym');
var app = express();
var multer = require('multer');
mongoose.connect(config.database, function(err){
	if(err){
		console.log(err);
	} else{
		console.log("connected to database");
	}
	
});

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
/*app.use(multer({
	dest: '/'
}));*/
app.use(express.static(__dirname + '/public'));

var api = require('./app/routes/api')(app, express);
app.use('/api',api);


app.get('*', function(req, res){
	res.sendFile(__dirname + '/public/app/views/index.html');
});


var io = require('socket.io').listen(app.listen(config.port, function(err){
	if(err){
		console.log(err);
	} else{
		console.log("Listening on port 3000");
	}
}));

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

io.sockets.on('connection', function(socket){
	socket.on('send message', function(data){
		console.log(data);
		io.sockets.emit('new message', data);
	});
});


