var http = require("http");

http.createServer(function  (request, response) {
	// Enviar la cabecera http
	//Http status :200 : OK
	// Content type : text/plain
	response.writeHead(200, {'Content-Type' : 'text/plain'});

	//Enviar el cuerpo de la respuesta como Hola mundo y escuchar por el puerto 3000
	response.end('Hola World\n');
}).listen(3000);

/**
    Comentario que aparecería solamente en stage
*/

/// códifo de prueva
function ejecutar(algunaFuncion, valor) {
algunaFuncion(valor);
}
ejecutar(function(palabra){ console.log(palabra) }, "Hola");

//Imprimir el mensaje de ejecución en consola 
console.log('Servidor corriendo en localhost:3000');