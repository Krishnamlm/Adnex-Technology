import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    id: 1,
    review: "Adnex improved our PPC campaigns tremendously. Conversion rates increased by 40% in just 3 months. Highly recommend!",
    name: "Sarah Chen",
    title: "CTO, TechCorp Solutions",
    image: "woman-10.png",
    rating: 5,
  },
  {
    id: 2,
    review: "Their content strategy doubled our organic visibility and produced high-quality copy consistently.",
    name: "Michael Vella",
    title: "Marketing Director, Global Retail",
    image: "man-10.png",
    rating: 4,
  },
  {
    id: 3,
    review: "The branding work made our campaigns stand out. We gained a new audience segment quickly.",
    name: "Jessica Lopez",
    title: "Head of Partnerships, Finance Hub",
    image: "woman-11.png",
    rating: 5,
  },
  {
    id: 4,
    review: "SEO and content improvements gave us massive online visibility and targeted traffic.",
    name: "David Kim",
    title: "CEO, EcomWorld",
    image: "man-12.png",
    rating: 5,
  },
  {
    id: 5,
    review: "Design and graphics elevated our campaigns, attracting new clients organically.",
    name: "Anna Lee",
    title: "Creative Director, BrandWorks",
    image: "woman-12.png",
    rating: 5,
  },
];

// ---------- STAR RATING ----------
const StarRating = ({ rating, size = 5 }) => {
  const stars = Array(5).fill(0);
  return (
    <div className="flex gap-1">
      {stars.map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < rating ? "#fbbc05" : "none"} // Google yellow
          viewBox="0 0 24 24"
          stroke="#fbbc05"
          strokeWidth="2"
          className={`w-${size} h-${size}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      ))}
    </div>
  );
};

// ---------- CLIENT REVIEWS SECTION ----------
const ClientReviewsSection = () => {
  const containerRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const loopTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => setScrollX(prev => prev - 0.5), 16);
    return () => clearInterval(interval);
  }, []);

  // Reset scroll for infinite loop
  useEffect(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.scrollWidth / 2;
    if (Math.abs(scrollX) >= width) setScrollX(0);
  }, [scrollX]);

  const averageRating = (
    TESTIMONIALS.reduce((acc, t) => acc + t.rating, 0) / TESTIMONIALS.length
  ).toFixed(1);

  return (
    <section className="pb-20 pt-20 px-4 sm:px-12 lg:px-24 xl:px-40 bg-white dark:bg-black relative">
      {/* ---------- GOOGLE-STYLE HEADER ---------- */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Our Clients Love Us
        </h2>
        <div className="inline-flex items-center gap-3 bg-white/80 dark:bg-gray-800/70 backdrop-blur-md rounded-full px-4 py-2 shadow-sm">
          <StarRating rating={Math.round(averageRating)} size={5} />
          <span className="text-gray-900 dark:text-white font-medium text-lg">
            {averageRating} out of 5
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            ({TESTIMONIALS.length} reviews)
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Trusted by businesses worldwide.
        </p>
      </div>

      {/* ---------- REVIEWS CAROUSEL WITH EDGE GRADIENTS ---------- */}
      <div className="relative overflow-hidden">
        {/* Left Gradient */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 dark:from-gray-900 z-10 pointer-events-none"></div>
        {/* Right Gradient */}
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 dark:from-gray-900 z-10 pointer-events-none"></div>

        <motion.div
          ref={containerRef}
          drag="x"
          dragConstraints={{ left: -containerRef.current?.scrollWidth / 2 || 0, right: 0 }}
          style={{ x: scrollX }}
          className="flex gap-6 cursor-grab select-none pb-4"
        >
          {loopTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 sm:w-80 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl p-6 sm:p-7 flex flex-col items-start space-y-3 transition-transform hover:-translate-y-1"
            >
              <StarRating rating={testimonial.rating} size={5} />
              <p className="text-gray-800 dark:text-gray-200 text-sm sm:text-base leading-snug">
                {testimonial.review}
              </p>
              <div className="flex items-center gap-3 mt-2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-700"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientReviewsSection;
