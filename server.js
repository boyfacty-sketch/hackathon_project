const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Importing Models (from your new 'models' folder)
const User = require('./models/user');
const Record = require('./model/record.js');
// Importing Routes (from your 'routes' folder)
const authRoutes = require('./routes/authroutes');
const recordRoutes = require('./routes/recordRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Serving Frontend files from the 'public' folder
// This links your index.html, style.css, and script.js to the server
app.use(express.static('public'));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/records', recordRoutes);

// MongoDB Connection
// Note: If you're using MongoDB Atlas, replace this URL with your connection string
mongoose.connect('mongodb://localhost:27017/health_db')
    .then(() => console.log('Database connected successfully!'))
    .catch(err => console.log('Database connection error:', err));

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Access your project at: http://localhost:${PORT}`);
});