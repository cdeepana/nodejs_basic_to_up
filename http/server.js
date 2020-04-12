const http = require('http');
const server = http.createServer((req,res) => {
    // var jsonData = JSON.stringify(req,string);
    // console.log("req =>", jsonData);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hi I am chathura herath');
    console.log("res ==> ",res);
    console.log("req ==> ",req);
});

server.listen(5000);