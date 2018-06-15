/*
 * Nathaniel Wisler
 * wislern@oregonstate.edu
 *
 * Write your server code in this file.
 */

var fs = require('fs');
var http = require('http');
var process = require('process');


var css = fs.readFileSync('public/style.css');
var html = fs.readFileSync('public/index.html');
var java = fs.readFileSync('public/index.js');
var error = fs.readFileSync('public/404.html');

function requestHandler(request , response)
{
	console.log("Request Received... method:", request.method);

	if(request.url === '/index.html')
	{
	response.statusCode = 200;
	response.write(html);
	console.log('index');
	}
	else if(request.url === '/')
	{
	response.statusCode = 200;
        response.write(html);
	console.log('index');
	}
	else if(request.url === '/404.html')
        {
	response.statusCode = 404;
        response.write(error);
	console.log('404');
        }
	else if(request.url === '/style.css')
        {
	response.statusCode = 200;
        response.write(css);
	console.log('css');
        }
	else if(request.url === '/index.js')
        {
        response.statusCode = 200;
        response.write(java);
	console.log('javascript');
        }
	else
	{
	response.statusCode = 404;
	response.write(error);
	console.log('404');
	}
console.log('the port:', process.env.PORT);
response.end();

}

var server = http.createServer(requestHandler);

if(process.env.port !== undefined)
{
	server.listen(process.env.port);
}
else{
server.listen(3000);
}
