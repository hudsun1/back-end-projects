// console.log(__filename)
// console.log(__dirname)
const EventEmitter = require('events');


var url = 'https://mylogger.io/log';

class Logger extends EventEmitter{
     log(message){
        // console.log('123');
        console.log(message);
    
        // Raised Event
    this.emit('messageLogged',{id:1,url: 'http://'});
    }
}



// module.exports = log;
/// [Exporting Logger Class]
module.exports = Logger;
// exports.loggerable = url;
// module.exports = log;
// [Print out loggerable variable in non-global[exports]]
// console.log(exports.loggerable);

// if(url!=null){
//     module.exports.urlEndpoint = url;
// }