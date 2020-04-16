const WS = new WebSocket('ws://localhost:3232');  // create new client with req server port 3232 // this is hook instance 

WS.onmessage = (payload) => {    // pay load is every thing of all header and data what tranfer through server
 // this WS.onmessage listening data comming from server side
    console.log(payload.data);
    showMessages(payload.data);

}

WS.onopen = () => {   // when server connection ok /open  , this method onopen can use
    console.log("CONNECTION OPEN");
    showConnectionStatus('CONNECTED TO THE SERVER !');
}

WS.onclose = () => {
    console.log("CONNECTION CLOSE");
    showConnectionStatus('CONNECTION LOST !');
}

function showConnectionStatus(title) {
    document.querySelector('h1').innerHTML = title;
}

function showMessages (payload_message_data){

    let h1 = document.createElement('h1');

    h1.innerText = payload_message_data;

    document.querySelector('div.messages').appendChild(h1)  
}

document.forms[0].onsubmit = () => {

    let input = document.getElementById('message');
    // console.log(input.value);

    WS.send(input.value);  // send method use to send data to webserver
}

 closeServer =  () => {
    // console.log("yuuuu");
    WS.send("close");
}