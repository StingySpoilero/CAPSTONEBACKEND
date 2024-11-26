// server/routes/reviews.mjs
import express from 'express';
import Review from '../models/Review.mjs';

const router = express.Router();

// Route to get all reviews
router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to create a new review
router.post('/', async (req, res) => {
    const { author, content, isPublished } = req.body;
    const newReview = new Review({ author, content, isPublished });

    try {
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;