const http = require('http');
const fs = require('fs');

/*
var server = http.createServer();
server.on('request', function (request, response) {
OR IN ONE LINE: 
*/
var server = http.createServer(function (request, response) {
	response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/index') {
		fs.readFile('./index.html', 'utf-8', function(err, data) {
			console.log(data); 
/* zrozumialem, ze  ma byc, jak powyzej, ale alternatywnie moze byc pewnie cos w stylu:
			fs.writeFile('./downloaded/index.html', data, function() {
			console.log('index.html has been saved to the "downloaded" directory!');
	});
*/
			response.end();
		});
    } else {
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
            response.end();
    }
});
server.listen(9000);