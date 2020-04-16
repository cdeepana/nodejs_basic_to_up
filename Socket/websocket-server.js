const WebSocketServer = require('ws').Server;
const WSS = new WebSocketServer({port: 3232});   // create server adn port 3232

WSS.on('connection', (ws) => {   // this will  [ WSS.on ] listen from client when client connected this function woro
    
    ws.on('message', (message) => {

        if (message === 'close') {
            ws.close();
        }else{

            WSS.clients.forEach(client => {  // server connected client list give/ access all the clients
                client.send(message);  // this will broadcasting  data to whole clients after getting client list in up line
            });

        }
        console.log(message);
    });
    
    // console.log('We are connected');
});