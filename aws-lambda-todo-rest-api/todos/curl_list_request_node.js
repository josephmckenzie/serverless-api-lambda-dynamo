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
console.log("Whole Hash",str);
console.log("Checked?",str["checked"]);
console.log("createdAt",str["createdAt"])
console.log("text",str["text"]);
console.log("message",str["message"]);
console.log("id",str["id"]);
console.log("updatedAt",str["updatedAt"]);
	});
}
var req = https.request(options, callback).end()
console.log(options);
	}

getData('cf46fbf0-c5f3-11e7-ad87-9174420a502f');

