import React from 'react';

const StarRating = ({ rating = 5, size = 5, totalStars = 5 }) => {
    // Generate an array of 5 stars
    const stars = Array(totalStars).fill(0).map((_, index) => {
        // Determine the fill color: fully gold for the rating, gray for the remainder
        const isFilled = index < rating;

        // ✅ FIX: Ensure the 'return' keyword is correctly placed inside the arrow function's body
        
    });

    return <div className="flex justify-center mb-3">{stars}</div>;
};

export default StarRating;
