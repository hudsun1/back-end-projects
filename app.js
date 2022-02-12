const EventEmitter = require('events');
const emitter = new EventEmitter();
// To  Instantiate file as a variable 
// var logger = require('./logger');

// ()=>logger.log('test');

    // console.log(logger('test123'));
    // console.log(logger);

// Register Event


// const log = require('./logger');
const Logger = require('./logger');
const log = new Logger();

log.on('messageLogged',(arg) =>{ //e, eventArg
    console.log('Listeners Called',arg);
});
log.log('message');


// Print out variable in global[module.exports]

// console.log(module.exports.urlEndpoint);
// console.log(module.exports.urlEndpoint);