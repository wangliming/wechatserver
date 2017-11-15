var request = require('request');
var testdata = require('./../../test/testdata')
require('dotenv').config({path: __dirname + '/../../.env'})
function senddatabyget(url, jsondata){
	request({
		    url: process.env.DB_URL+url,
		    method: "GET",
		    json: true,
		    headers: {
		        "content-type": "application/json",
		    },
		    body: jsondata
		}, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.log(body)
	  }
	})	
}

function senddatabypost(url, jsondata){
	request({
	    url: process.env.DB_URL+url,
	    method: "POST",
	    json: true,
	    headers: {
	        "content-type": "application/json",
	    },
	    body: jsondata
	}, function(error, resp, body) {
	    if (!error && resp.statusCode == 200) {
			console.log(resp)
	    }
	});
}
function uploadfans(){
	senddatabypost('/api/fans/uploadfans/', testdata)
}

module.exports = {uploadfans: uploadfans};
