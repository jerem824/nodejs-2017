var user = require("./user.js")

module.exports = {
  logic: function (req, res) {
    
    console.log(req.url)
    if (req.url == "/save") {
      user.save("testu", "testpwd", function() {
        res.writeHead(201, {'Content-Type': 'text/plain'});
        res.end('User is saved');
      })
    } else if(req.url == "/get") {
      user.get("testu", function() {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('got the user');
      })
    } else if(req.url == "/") {
      console.log("hello i'm in a function");
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World\n');
    } else {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Route not found\n');
    }
},
port: "8888", 
address: "127.0.0.1"
}
