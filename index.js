var express = require('express')
var config = require('./config/config')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3030, function(){
	console.log('server started on port 3030');
})