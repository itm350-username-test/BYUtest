// Import the Express module
const express = require('express');
const app = express();

// Define a port
const port = 8080;

// Set up a basic route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});