const express = require('express');
const app = express();
const PORT = 3000; // Define the port your server will run on

// Middleware to parse JSON requests
app.use(express.json());

// Example route
app.get('/', (req, res) => {
    res.send('Welcome to my backend!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
