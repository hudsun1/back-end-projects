const http = require ('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello Worldss');
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

// server is an event Emitter
// server.on Method
// server.addListener Method
// server.emit Method

// server.on('connection',(socket)=>{
// console.log('New Connection....');
// })

// Listening port 3000
server.listen(3000);
// server.
// server.close(3000);

console.log('Listening on port 3000....');

// server.on
