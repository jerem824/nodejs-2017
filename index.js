// Import a module
var http = require('http');
var server = require("./server.js");
// Declare an http server
http.createServer(server.logic).listen(server.port, server.address);

// curl localhost:1337 or go to http://localhost:1337
