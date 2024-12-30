const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello, world!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Uncommon Error:  Unexpected Token '}' in JSON response. This can occur if your JSON.stringify method has an unexpected extra bracket or if there is a syntax error somewhere else in your JSON string.
//This is an example where you need to check if there are any syntax errors in your JSON data before stringifying and sending a JSON response. 