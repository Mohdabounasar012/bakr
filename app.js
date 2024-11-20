const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the home page
app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Website</h1><p>This is a simple website built with Node.js and Express!</p>');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>This is a Node.js website.</p>');
});