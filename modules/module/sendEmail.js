const events = require('events');

let emitter = new events.EventEmitter();
console.log("seend email");
module.exports =  emitter;