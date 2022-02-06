// console.log(__filename)
// console.log(__dirname)
var url = 'https://mylogger.io/log';

function log(message){
    console.log(message);
}

module.exports = log;
exports.loggerable = url;
// module.exports = log;
// Print out loggerable variable in non-global[exports]
console.log(exports.loggerable);

if(url!=null){
    module.exports.urlEndpoint = url;
}