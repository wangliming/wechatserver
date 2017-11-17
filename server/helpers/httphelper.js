var request = require('request');
function senddatabyget(url, jsondata){
	request({
		    url: process.env.DB_URL+url,
		    method: "GET",
		    json: true,
		    headers: {
		        "content-type": "application/json",
		    },
		    body: jsondata
		}, function (error, resp, body) {
	  if (!error && resp.statusCode == 200) {
	    console.log(resp.body)
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