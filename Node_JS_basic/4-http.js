const http = require('http');

// Create the server
const app = http.createServer((req, res) => {
  // Set the content type to plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body
  res.end('Hello Holberton School!');
});

// Server listens on port 1245
app.listen(1245);

// Export the server instance
module.exports = app;
