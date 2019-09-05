console.log('Hello Conxils');
/*
//os module
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Memory Status ${freeMemory}:${totalMemory}`);

//fs module

const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);

//http module

const http = require('http');
const server = http.createServer( (req,res)=>{
    if(req.url === '/'){
        res.write('Its Working');
        res.end();
    }

    if(req.url === '/api/users'){
        res.write(JSON.stringify(['amith', 'amith2', 'amith3'])) ; // :)
        res.end();
    }
});

server.listen(3000);
console.log('Server is Listing on port 3000');

*/