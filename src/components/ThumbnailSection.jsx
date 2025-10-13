import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- CONFIGURATION ---
// Set initial visible count to 4. We will reveal the 5th item upon click.
const INITIAL_VISIBLE_COUNT = 4;

// --- IMAGE DATA SOURCE (FIXED: Unique IDs and .jpg extensions) ---
const allThumbnails = [
    // IDs 1-4 (Initial)
    { id: 1, src: '/you-thumb1.png', alt: 'Marketing Campaign', title: '1' },
    { id: 2, src: '/you-thumb2.png', alt: 'Client Results', title: '2' },
    { id: 3, src: '/you-thumb3.png', alt: 'Design Mockup', title: '3' },
    { id: 4, src: '/you-thumb4.png', alt: 'Social Media Ad', title: '4' },
    
    // ID 5 (The Hidden One - Will now appear correctly)
    { id: 5, src: '/you-thumb5.png', alt: 'Unique Thumbnail 5', title: '5' }, 
    { id: 6, src: '/you-thumb6.png', alt: 'Unique Thumbnail 5', title: '6' }, 
    { id: 7, src: '/you-thumb7.png', alt: 'Unique Thumbnail 5', title: '7' }, 
    { id: 8, src: '/you-thumb8.png', alt: 'Unique Thumbnail 5', title: '8' }, 
    { id: 9, src: '/you-thumb9.png', alt: 'Unique Thumbnail 5', title: '9' }, 
    { id: 10, src: '/you-thumb10.png', alt: 'Unique Thumbnail 5', title: '10' }, 
    { id: 11, src: '/you-thumb11.png', alt: 'Unique Thumbnail 5', title: '11' }, 
    { id: 12, src: '/you-thumb12.png', alt: 'Unique Thumbnail 5', title: '12' }, 
];

const ThumbnailSection = () => {
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
    const hasMore = visibleCount < allThumbnails.length;

    // ✅ FIXED: Simple state setter is used after timeout, as that resolved the click issue.
    const handleViewMore = () => {
        // Use timeout to ensure the DOM processes the click event before the state update
        setTimeout(() => {
            setVisibleCount(allThumbnails.length); 
        }, 10); 
    };

    const containerVariants = {
        // Removed 'hidden' state from initial. We only define the final 'visible' state.
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };
    
    // ✅ FIXED: Simplified item variants. 'visible' defines the final, rendered state.
    const itemVariants = {
        visible: { y: 0, opacity: 1 },
    };

    return (
        <section id="thumbnails-showcase" className="py-24 px-4 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-black">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
                >
                    Project Thumbnails
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    // ❌ REMOVED initial="hidden" from the parent
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {allThumbnails.slice(0, visibleCount).map((thumb) => (
                        <motion.div 
                            key={thumb.id}
                            variants={itemVariants}
                            // 💥 NEW FIX: Explicitly tells Framer Motion to apply the 'visible' state
                            animate="visible" 
                            className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden block transform hover:scale-[1.03] transition-transform duration-300"
                        >
                            {/* 16:9 Aspect Ratio Container */}
                            <div className="relative pt-[56.25%]">
                                <img 
                                    src={thumb.src} 
                                    alt={thumb.alt} 
                                    className="absolute top-0 left-0 w-full h-full object-cover" 
                                />
                            </div>
                            
                        </motion.div>
                    ))}
                </motion.div>

                {/* 'View More' Button */}
                {hasMore && (
                    <div className="text-center mt-12">
                        <motion.button
                            onClick={handleViewMore}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:opacity-80 transition-opacity"
                        >
                            View More ({allThumbnails.length - visibleCount} more)
                        </motion.button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ThumbnailSection;