
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to serve frontend files
app.use(express.static(path.join(__dirname, 'public')));

// Import sneaker routes
const sneakerRoutes = require('./server/routes/sneakerRoutes');

// Register API route
app.use('/api/sneakers', sneakerRoutes);

// Start Express server
app.listen(PORT, () => {
    console.log('================================');
    console.log('     SNEAKERVAULT SERVER');
    console.log('================================');
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Sneaker API: http://localhost:${PORT}/api/sneakers`);
});
