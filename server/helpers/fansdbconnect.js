var request = require('request');
var testdata = require('./../../test/testdata')
var httphelper = require('./httphelper')
require('dotenv').config({path: __dirname + '/../../.env'})
function uploadfans(){
	httphelper(process.env.DB_URL+'/api/fans/uploadfans/', testdata)
}
function loadfans(){
	httphelper(process.env.DB_URL+'/api/fans/getfans/', {limit:5, skip:0, customerid:'id1'})
}
module.exports = {uploadfans: uploadfans, loadfans: loadfans};
