var express = require('./config/express')
var config = require('./config/config')
var uploadfansinfo = require('./server/helpers/uploadfansinfo')
var fansemitter = require('./server/helpers/fansemitter')

express.get('/', function (req, res) {
  res.send('Hello World')
})

express.listen(3030, function(){
	console.log('server started on port 3030');
})
module.exports = {fansemitter:fansemitter, uploadfansinfo: uploadfansinfo};