const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    console.log(req.method);
    if(req.url === '/'){ // /about or any path 
        fs.readFile('./server_file_folder/global.html', 'UTF-8', (err,data) => {
            res.writeHead(200, {'Content-Type': ' text/html'});
            res.end(data);
        });
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 ERROR coult not found  !!!!');
    }

}).listen(5001);

console.log("server listening port 5001");