const EventEmitter = require('events');
const { emit, listeners } = require('process');
const emitter = new EventEmitter();

// Making a noise or produce something- Signalling 


// Register Event
emitter.on('messageLogged',(arg) =>{ //e, eventArg
    console.log('Listeners Called',arg);
});

// Raised Event
emitter.emit('messageLogged',{id:1,url: 'http://'});

// Raised: Logging (data: message)


