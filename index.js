const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// VERY SIMPLE CORS
app.use(cors());

// Parse JSON
app.use(express.json());

// Connect DB
connectDB();

// Root route
app.get('/', (req, res) => {
  res.send('TransitEase API is running...');
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/transports', require('./routes/transportRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
