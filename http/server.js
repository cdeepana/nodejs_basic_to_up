const http = require('http');
const server = http.createServer((req,res) => {
    // var jsonData = JSON.stringify(req,string);
    // console.log("req =>", jsonData);
    res.writeHead(200, {'Content-Type': 'text/html'}); // text/plain type can be use when we use only text result for the browser 
    res.end('<h1>Hi I am chathura herath </h1>');
});

server.listen(5000);
console.log("server listening port 5000");