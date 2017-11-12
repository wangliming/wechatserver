var express = require('./config/express')
var config = require('./config/config')
var fansemitter = require('./server/helpers/uploadfansinfo')

express.get('/', function (req, res) {
  res.send('Hello World')
})

express.listen(3030, function(){
	console.log('server started on port 3030');
})
module.exports = fansemitter;