import React, { useEffect, useRef } from 'react';
// 🎯 FIX: 'animate' must be imported from framer-motion
import { motion, useMotionValue, useTransform, useInView, animate } from 'framer-motion'; 

// --- CONFIGURATION DATA ---
const STATS_DATA = [
    { target: 940, label: 'Projects Completed', delay: 0.1 },
    { target: 865, label: 'Happy Clients', delay: 0.3 },
    { target: 99, label: 'Success Rate (%)', delay: 0.5 },
];

// Custom Hook to animate a MotionValue from 0 to a target number
const useCountUp = (target, initial = 0) => {
    const count = useMotionValue(initial);
    const rounded = useTransform(count, Math.round);
    
    // Animate the MotionValue to the target
    useEffect(() => {
        // ✅ FIX: Use the directly imported 'animate' function
        animate(count, target, { duration: 2.5 }); 
    }, [count, target]);

    return rounded;
};

// ✅ ProjectStats now accepts the 'theme' prop
const ProjectStats = ({ theme }) => { 
    const ref = useRef(null);
    // Use useInView to detect when the component is scrolled into the viewport
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    
    // Determine the number color class based on the theme:
    // Light Mode (White background) -> Blue Text (text-primary)
    // Dark Mode (Black background) -> Black Text (text-black) or White Text (dark:text-white)
    const numberColorClass = theme === 'dark' ? 'text-black dark:text-white' : 'text-primary';

    return (
        <section ref={ref} id="project-stats" 
            // Set background dynamically based on theme for the section
            className="py-5 px-4 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-black"
        >
            <div className="max-w-6xl mx-auto text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {STATS_DATA.map((stat) => (
                        <StatItem 
                            key={stat.label}
                            {...stat}
                            isInView={isInView}
                            numberColorClass={numberColorClass} // Pass dynamic color
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};


const StatItem = ({ target, label, delay, isInView, numberColorClass }) => {
    const count = useCountUp(target);
    
    // Initial state setup (Opacity starts at 0, revealing when isInView is true)
    const initialAnimation = { opacity: 0, y: 50 };
    const animateState = isInView ? { opacity: 1, y: 0 } : initialAnimation;

    // Use a separate useEffect to handle re-animating the count on view change if necessary
    useEffect(() => {
        if (isInView) {
            // Re-trigger the animation when the element scrolls into view
            animate(count, target, { duration: 2.5 });
        }
    }, [count, target, isInView]);


    return (
        <motion.div
            initial={initialAnimation}
            animate={animateState}
            transition={{ duration: 1.2, delay: delay }}
            className="flex flex-col items-center p-6"
        >
            <motion.div
                className={`text-6xl font-extrabold mb-2 ${numberColorClass}`} // ✅ Dynamic Color Applied
                transition={{ duration: 0.5, type: 'tween' }}
            >
                {/* Use the animated MotionValue as the displayed number */}
                {isInView ? <motion.span>{count}</motion.span> : <motion.span>{0}</motion.span>}

                {label !== 'Success Rate (%)' && (
                    <span className="text-4xl">+</span>
                )}
                
                {/* Add a suffix if needed */}
                {label === 'Success Rate (%)' && <span className="text-4xl">%</span>}
            </motion.div>
            
            {/* Label color is set opposite to the background for high contrast */}
            <h3 className="text-lg font-semibold uppercase tracking-wider text-gray-700 dark:text-primary">
                {label}
            </h3>
        </motion.div>
    );
};

export default ProjectStats;