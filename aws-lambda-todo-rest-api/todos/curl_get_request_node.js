function getData(){
  var https = require('https');
  var results = '';

  var options = {
        host: 'bsi7688wf2.execute-api.us-east-1.amazonaws.com',
        path: '/dev/todos',
		    port: 443
	};

callback = function(response) {

  response.on('data', function (chunk) {
    results += chunk;
  })
  response.on('end', function () {
//    console.log(str,"str");
var str = JSON.parse(results);
console.log(str.Items[0]);
	
	});
}
var req = https.request(options, callback).end();
	}

getData();


