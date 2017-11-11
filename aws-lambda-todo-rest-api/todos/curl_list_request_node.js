function getData(id){
  var https = require('https');
  var results = '';

  var options = {
        host: 'bsi7688wf2.execute-api.us-east-1.amazonaws.com',
        path: '/dev/todos/' + id,
		    port: 443
  };

callback = function(response) {

  response.on('data', function (chunk) {
    results += chunk;
  })
  response.on('end', function () {
//    console.log(str,"str");
var str = JSON.parse(results);

console.log(str)
	
	});
}
var req = https.request(options, callback).end();
	}

getData('1e55ded0-c6af-11e7-b942-4fc6ed66ad84');

