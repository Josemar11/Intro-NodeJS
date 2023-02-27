var http = require("http");

http.createServer(function(requisicao, resposta) {
    resposta.end("<h1> Welcome, I'm study Node JS </h1> <h4> Example HTTP </h4>");
}).listen(3000);

console.log("My server is running");