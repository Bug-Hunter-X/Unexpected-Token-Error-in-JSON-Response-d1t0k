const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  let jsonData = { message: 'Hello, world!' };

  //Validate the JSON data before stringifying to prevent syntax errors
  try {
    JSON.parse(JSON.stringify(jsonData)); //This is just to check if your json is correctly formed
    response.writeHead(200);
    response.end(JSON.stringify(jsonData));
  } catch (error) {
    console.error('Error creating JSON response:', error);
    response.writeHead(500, { 'Content-Type': 'text/plain' });
    response.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});