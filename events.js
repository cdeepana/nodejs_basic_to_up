const events = require('events');

let emitter = new events.EventEmitter();

emitter.on('newEvent', (message) => {
    console.log(`messagee01 : ${message}`);
})

emitter.emit('newEvent', 'Hello chathura create new event');