import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StarRating from './starrating.jsx'; 

// Helper function for circular navigation (must be outside the component)
const wrap = (min, max, v) => {
    const range = max - min;
    return ((((v - min) % range) + range) % range) + min;
};


// --- DATA SOURCE (With Ratings) ---
const TESTIMONIALS = [
    {
        id: 1,
        review: "Adnex took our PPC campaign performance to the next level. We saw a 40% increase in conversion rate within three months. Their performance manager is top-notch! .",
        name: "Sarah Chen",
        title: "CTO, TechCorp Solutions",
        image: "https://randomuser.me/api/portraits/women/10.jpg",
        rating: 5, 
    },
    {
        id: 2,
        review: "The content strategy developed by the team was phenomenal. Our organic search visibility doubled, and the content writers delivered flawless copy.",
        name: "Michael Vella",
        title: "Marketing Director, Global Retail",
        image: "https://randomuser.me/api/portraits/men/10.jpg",
        rating: 4, 
    },
    {
        id: 3,
        review: "The brand collaboration initiative they managed introduced us to an entirely new audience segment. Highly strategic and executed flawlessly.",
        name: "Jessica Lopez",
        title: "Head of Partnerships, Finance Hub",
        image: "https://randomuser.me/api/portraits/women/11.jpg",
        rating: 5, 
    },
];

const ClientReviewsSection = () => {
    const [[page, direction], setPage] = useState([0, 0]); 

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    const reviewIndex = wrap(0, TESTIMONIALS.length, page);
    const currentReview = TESTIMONIALS[reviewIndex];

    const slideVariants = {
        enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
        center: { x: 0, opacity: 1, zIndex: 1 },
        exit: (direction) => ({ x: direction < 0 ? 100 : -100, opacity: 0, zIndex: 0 }),
    };
    
    return (
        <section id="client-reviews" className="pt-20 pb-22 px-4 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2"
                >
                    What Our Clients Say
                </motion.h2>
                <p className="text-primary text-xl font-medium mb-12">Trusted by leaders in various industries.</p>

                {/* 🎯 FULLY RESPONSIVE CONTAINER 🎯 */}
                {/* min-h-[300px] sets a minimum size, but allows content to expand the height */}
                <div className="relative min-h-[340px] overflow-hidden">
                    <AnimatePresence initial={false} custom={direction} mode='popLayout'>
                        <motion.div
                            key={page} 
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                            // The card itself is absolutely positioned to handle the sliding animation
                            // Padding (p-8) and background colors are applied here
                            className="absolute top-0 left-0 w-full h-full p-8 bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col justify-center items-center"
                        >
                            {/* ⭐️ STAR RATING ⭐️ */}
                            <div className="mb-4">
                                <StarRating rating={currentReview.rating} size={6} /> 
                            </div>

                            {/* Review Content (Responsive Font Sizing) */}
                           <p 
    // Default size is text-lg (small screen)
    // Size increases to sm:text-2xl (medium/large screens)
    className=" pt-0 text-lg italic sm:text-2xl font-serif text-gray-800 dark:text-gray-200 mb-6 max-w-3xl leading-relaxed px-4 sm:px-0"
>
    "{currentReview.review}"
</p>
                            
                            {/* Client Info */}
                            <img 
                                src={currentReview.image} 
                                alt={currentReview.name} 
                                className="w-16 h-16 rounded-full mx-auto mb-2 border-4 border-primary/50"
                            />
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">{currentReview.name}</h4>
                            <p className=" pb-10 text-sm text-gray-500 dark:text-gray-400">{currentReview.title}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-center mt-12 gap-6">
                    <button 
                        onClick={() => paginate(-1)}
                        className="p-3 rounded-full bg-primary/10 dark:bg-primary/30 text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    
                    <button 
                        onClick={() => paginate(1)}
                        className="p-3 rounded-full bg-primary/10 dark:bg-primary/30 text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ClientReviewsSection;
