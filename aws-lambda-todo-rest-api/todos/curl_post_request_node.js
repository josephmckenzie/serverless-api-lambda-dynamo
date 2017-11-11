function getData(){
  var https = require('https');
  var results = '';
var body = JSON.stringify({"text":"Joe is a rockstar cvcsdsfsdffsdfsdf!"})


  var options = {
        host: 'bsi7688wf2.execute-api.us-east-1.amazonaws.com',
        path: '/dev/todos',
		    port: 443,
		    method: "POST"
	};

callback = function(response) {

  response.on('data', function (chunk) {
    results += chunk;
  })
  response.on('end', function () {
//    console.log(str,"str");
var str = JSON.parse(results);
console.log(str);
	
	});
}
var req = https.request(options, callback).end(body);
	}

getData();


