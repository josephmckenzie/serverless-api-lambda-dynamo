function getData(id){
  var https = require('https');
  var results = '';
var body = JSON.stringify({"text":"Joe is a rockstar cvcsdsfsdffsdfsdf!","checked":true})


  var options = {
        host: 'bsi7688wf2.execute-api.us-east-1.amazonaws.com',
        path: '/dev/todos/f3d73200-c6bb-11e7-a449-4963e20d0b69',
		    port: 443,
		    method: "PUT"
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

getData("f3d73200-c6bb-11e7-a449-4963e20d0b69");


