import React from "react";
import { motion } from "framer-motion";

const WebDesign = () => {

  const services = [
    {
      title: "Responsive Website Design",
      desc: "Websites that adapt seamlessly across all devices, ensuring a smooth user experience on mobile, tablet, and desktop."
    },
    {
      title: "Graphic Design",
      desc: "Visually appealing graphics that enhance your brand identity and create a lasting impression on your audience."
    },
    {
      title: "UI/UX Design",
      desc: "User-focused designs that improve usability, engagement, and overall customer satisfaction."
    },
    {
      title: "Landing Page Design",
      desc: "High-converting landing pages crafted to capture leads and drive maximum conversions."
    },
    {
      title: "Business Website Design",
      desc: "Professional websites tailored to showcase your business, services, and credibility online."
    },
    {
      title: "E-commerce Design",
      desc: "Conversion-optimized online stores designed for seamless shopping experiences and increased sales."
    },
    {
      title: "Custom Website Design",
      desc: "Fully customized websites built to match your brand vision and unique business requirements."
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-white">

      {/* 🔥 HERO SECTION */}
      <div className="relative py-20 px-6 sm:px-12 lg:px-24 text-center overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#5044E5] opacity-10 blur-[100px] rounded-full"></div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-semibold mb-6 leading-tight"
        >
          Web Design Company in{" "}
          <span className="text-[#5044E5]">India</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-gray-500 dark:text-white/70 text-lg"
        >
          We create stunning, high-converting websites that elevate your brand
          and drive real business results.
        </motion.p>
      </div>

      {/* 🔥 SERVICES GRID */}
      <div className="px-6 sm:px-12 lg:px-24 pb-16 max-w-6xl mx-auto">
        
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Our Web Design Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-medium text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-white/60">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔥 WHY CHOOSE US */}
      <div className="px-6 sm:px-12 lg:px-24 pb-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Why Choose Adnex?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {[
            "Modern & Creative Designs",
            "Mobile-First Approach",
            "Fast Loading Speed",
            "SEO Optimized Layouts",
            "User-Friendly Experience",
            "High Conversion Focus",
          ].map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-gray-50 dark:bg-white/5"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 CTA SECTION */}
      <div className="px-6 sm:px-12 lg:px-24 pb-20">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#5044E5] to-[#4d8cea] text-white p-10 rounded-3xl text-center shadow-lg">
          
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Need a Professional Website?
          </h3>

          <p className="mb-6 text-white/80">
            Let’s design a website that not only looks amazing but also converts visitors into customers.
          </p>

          <button className="bg-white text-[#5044E5] px-6 py-3 rounded-xl font-medium hover:scale-105 transition">
            Get Started
          </button>
        </div>
      </div>

    </div>
  );
};

export default WebDesign;