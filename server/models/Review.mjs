// server/models/Review.mjs
import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    isPublished: {
        type: Boolean,
        default: true, // Default to published
    },
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);
export default Review;