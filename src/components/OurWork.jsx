import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const OurWork = () => {
  const workData = [
    {
      title: "Graphic Designing",
      description:
        "We specialize in creating high-quality thumbnails, logos, posters, and banners designed to grab attention and enhance visual appeal.",
      image: assets.work_mobile_app,
    },
    {
      title: "Social Media Marketing",
      description:
        "Video marketing, using promotional videos, reels, and explainer animations, engages audiences powerfully, conveying messages quickly and effectively.",
      image: assets.work_dashboard_management,
    },
    {
      title: "Web Designing",
      description:
        "We create visually appealing and functional websites, handling everything from design to development, ensuring a strong online presence.",
      image: assets.work_fitness_app,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 text-gray-700 dark:text-white"
    >
      <Title
        title="Our Services"
        desc="Browse our portfolio of innovative digital projects that showcase creativity, performance, and results."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className="hover:scale-102 duration-500 transition-all cursor-pointer"
          >
            <img src={work.image} className="w-full rounded-xl" alt="" />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
