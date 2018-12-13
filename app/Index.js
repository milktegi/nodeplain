/*
primary file for the API 
*/

// dependencies

const http = require('http');
const url = require('url');

// the server should respond to all requests with a string

const server = http.createServer((req, res) => {
	// get the url and parse it
	const parsedUrl = url.parse(req.url, true);

	// get the path
	const path = parsedUrl.pathname;
	const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // get the query string as an object 
    // const queryObj = parsedUrl.query < 불가능 
   
	// Get the Http Method
    const method = req.method.toLowerCase();
    
    // Get the headers as an object 
   
    let header = req.headers;
	// send the response
	res.end('hello world\n');
	// log the request path
	console.log(`해당 패스(path)로 유저의 요청이 왔습니다: 
    ${trimmedPath} with method: ${method}
   `);

   console.log(parsedUrl.query); // { fizz: 'buzz' }
   // log headers 
   console.log(Object.entries(header));

});

// start the server, and have it listen on port 3000

server.listen(3001, () => {
	console.log('the server is listening on port 3001 now');
});
