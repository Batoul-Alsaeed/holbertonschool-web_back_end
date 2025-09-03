const express = require('express');

// Create an Express app
const app = express();

// Define route for '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server on port 1245
app.listen(1245);

// Export the app instance
module.exports = app;
