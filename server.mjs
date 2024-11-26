import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import clientRoutes from './server/routes/clientRoutes.mjs';
import reviewRoutes from './server/routes/reviews.mjs'; // Import the reviews routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Root route to respond to GET /
app.get('/', (req, res) => {
    res.send('API is working');
});

// Client routes
app.use('/api/clients', clientRoutes);

// Review routes
app.use('/api/reviews', reviewRoutes); // Add this line to handle reviews

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});