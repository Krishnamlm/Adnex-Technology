import React from 'react';

const StarRating = ({ rating = 5, size = 5, totalStars = 5 }) => {
    // Generate an array of 5 stars
    const stars = Array(totalStars).fill(0).map((_, index) => {
        // Determine the fill color: fully gold for the rating, gray for the remainder
        const isFilled = index < rating;

        // ✅ FIX: Ensure the 'return' keyword is correctly placed inside the arrow function's body
        return ( 
            <svg 
                key={index}
                className={`w-${size} h-${size} ${isFilled ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        );
    });

    return <div className="flex justify-center mb-3">{stars}</div>;
};

export default StarRating;