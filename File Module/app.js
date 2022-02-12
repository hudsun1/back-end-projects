const fs = require('fs');

// Sync
// const files = fs.readdirSync('./');
// console.log(files); 

// In Big Systems use Async than using Sync 
// ASync
fs.readdir('$',function(err,files){
    if(err)console.log('Error',err);
else console.log('Result',files);
})