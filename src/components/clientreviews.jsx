import React from "react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    id: 1,
    review: "Adnex improved our PPC campaigns tremendously.",
    name: "Sarah Chen",
    title: "CTO, TechCorp",
    image: "woman-10.png",
    rating: 5,
  },
  {
    id: 2,
    review: "Their content strategy doubled our organic reach.",
    name: "Michael Vella",
    title: "Marketing Director",
    image: "man-10.png",
    rating: 4,
  },
  {
    id: 3,
    review: "Branding work made our campaigns stand out.",
    name: "Jessica Lopez",
    title: "Head of Partnerships",
    image: "woman-11.png",
    rating: 5,
  },
  {
    id: 4,
    review: "SEO improvements gave massive visibility.",
    name: "David Kim",
    title: "CEO, EcomWorld",
    image: "man-12.png",
    rating: 5,
  },
];

const loopTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-[2px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="w-3.5 h-3.5"
          fill={i < rating ? "#fbbf24" : "none"}
          stroke="#fbbf24"
          strokeWidth="2"
        >
          <path d="M12 17.3l-6.18 3.7 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.73 1.64 7.03z" />
        </svg>
      ))}
    </div>
  );
};

export default function ClientReviewsSection() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white dark:bg-black overflow-hidden">

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          What Clients Say
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
          Trusted by growing businesses worldwide
        </p>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        
        {/* fade edges */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white dark:from-black z-10" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white dark:from-black z-10" />

        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 18,
          }}
        >
          {loopTestimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="w-[220px] p-4 rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-lg transition-all"
            >

              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Text */}
              <p className="mt-3 text-xs text-gray-700 dark:text-gray-300 line-clamp-3">
                “{t.review}”
              </p>

              {/* User */}
              <div className="mt-4 flex items-center gap-2">
                <img
                  src={t.image}
                  className="w-8 h-8 rounded-full object-cover border border-gray-300 dark:border-white/10"
                />
                <div>
                  <h4 className="text-xs font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </h4>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400">
                    {t.title}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}