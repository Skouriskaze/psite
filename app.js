var http = require('http');
var dt = require('./datemodule');

http.createServer(function (req, res) {
    // req.url
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently" + dt.myDateTime() + '\n');
    res.write('checking');
    res.end();
}).listen(3000)
