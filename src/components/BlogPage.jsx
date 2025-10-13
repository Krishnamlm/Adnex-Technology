import React from 'react';
import { motion } from 'framer-motion';

const BlogPage = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="py-20 px-4 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-black text-gray-900 dark:text-white min-h-[70vh]"
        >
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-extrabold mb-4 pt-10">Our Latest Insights & Articles</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
                    Dive into our strategies on PPC, SEO, and content marketing.
                </p>

                {/* Placeholder for Blog Articles */}
                <div className="space-y-8">
                    <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                        <h3 className="text-2xl font-bold text-primary mb-2">How to Fix a Blank Website Page</h3>
                        <p>Learn the 5 crucial steps to troubleshoot deployment errors in React/Vite applications...</p>
                        <a href="#" className="text-sm text-primary hover:underline mt-1 block">Read More →</a>
                    </div>
                    <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                        <h3 className="text-2xl font-bold text-primary mb-2">Maximizing Revenue with AdSense CMP</h3>
                        <p>Understanding GDPR consent and why it's essential for your digital marketing revenue stream...</p>
                        <a href="#" className="text-sm text-primary hover:underline mt-1 block">Read More →</a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default BlogPage;