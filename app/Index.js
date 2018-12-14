/*
primary file for the API 
*/

// dependencies

const http = require('http');
const url = require('url');

// to parse payload 
const StringDecoder = require('string_decoder').StringDecoder;

// the server should respond to all requests with a string

const server = http.createServer((req, res) => {
	// get the url and parse it
	const parsedUrl = url.parse(req.url, true);

	// get the path
	const path = parsedUrl.pathname;
	const trimmedPath = path.replace(/^\/+|\/+$/g,'');

    // get the query string as an object 
    // const queryObj = parsedUrl.query < 불가능 
   
	// Get the Http Method
    const method = req.method.toLowerCase();
    const headers = req.headers;
    
 
   // get the payload, firstly pull an instance
   let decoder = new StringDecoder('utf-8');
   let buffer = '';
   
   // on is for an event
   req.on('data', function(data) {
       // append the result to buffer
       buffer += decoder.write(data);
   })
   
   req.on('end', function(){
       buffer += decoder.end();
       
       // send the response to end
       res.end('hello world\n');
       
       // log the request path
       console.log('req received with this payload: ', buffer);
   })
   
});

// start the server, and have it listen on port 3000
server.listen(3001, () => {
	console.log('the server is listening on port 3001 now');
});
