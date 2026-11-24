
require('dotenv').config();

const express = require('express');
const path = require('path');
const connectDB = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Sneaker API routes
const sneakerRoutes = require('./server/routes/sneakerRoutes');
app.use('/api/sneakers', sneakerRoutes);

// Start server
app.listen(PORT, () => {
    console.log('================================');
    console.log('     SNEAKERVAULT SERVER');
    console.log('================================');
    console.log(`Server running at http://localhost:${PORT}`);
});
