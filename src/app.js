// Entry point for the Express app
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Middleware to parse JSON requests
app.use(express.json());

// Import and use the routes BEFORE starting the server
const urlRoutes = require('./routes/urlRoutes');
app.use('/', urlRoutes);

// Sample route to test server
app.get('/', (req, res) => {
  res.send('🚀 URL Shortener API is up and running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
