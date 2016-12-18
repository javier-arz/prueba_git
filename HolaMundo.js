console.log('Hola mundo!!');

//ki comentario

var http = require("http");
http.createServer(function(request, response) {
response.writeHead(200, {"Content‐Type": "text/html"});
response.write("Hola Mundo");
response.end();
}).listen(8888);