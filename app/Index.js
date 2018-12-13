/*
primary file for the API 
*/

// dependencies 

const http = require('http');

// the server should respond to all requests with a string 

const server = http.createServer((req, res) => {
    res.end('hello world\n');
})


// start the server, and have it listen on port 3000

server.listen(3001, () => {
    console.log('the server is listening on port 3001 now');
})