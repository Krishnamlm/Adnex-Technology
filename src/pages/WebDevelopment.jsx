import React from "react";
import { motion } from "framer-motion";

const WebDevelopment = () => {

  const services = [
    {
      title: "Custom Website Development",
      desc: "Tailor-made websites built from scratch to match your business goals, branding, and unique requirements."
    },
    {
      title: "React & Frontend Development",
      desc: "Interactive and high-performance user interfaces using modern frameworks like React for seamless experiences."
    },
    {
      title: "Backend Development",
      desc: "Robust server-side solutions that ensure your website runs smoothly, securely, and efficiently."
    },
    {
      title: "App Development",
      desc: "We build high-performance mobile applications with intuitive design, seamless functionality, and scalable architecture to grow your business."
    },
    {
      title: "E-commerce Development",
      desc: "Scalable online stores with secure payment gateways and optimized user journeys to boost sales."
    },
    {
      title: "API Integration",
      desc: "Seamless integration of third-party services and APIs to enhance functionality and automation."
    },
    {
      title: "Website Maintenance",
      desc: "Ongoing support, updates, and performance optimization to keep your website secure and up-to-date."
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-white">

      {/* 🔥 HERO SECTION */}
      <div className="relative py-20 px-6 sm:px-12 lg:px-24 text-center overflow-hidden">
        
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#5044E5] opacity-10 blur-[100px] rounded-full"></div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-semibold mb-6 leading-tight"
        >
          Website Development Company in{" "}
          <span className="text-[#5044E5]">India</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-gray-500 dark:text-white/70 text-lg"
        >
          We build fast, secure, and scalable websites using modern technologies
          that help your business grow online.
        </motion.p>
      </div>

      {/* 🔥 SERVICES GRID */}
      <div className="px-6 sm:px-12 lg:px-24 pb-16 max-w-6xl mx-auto">
        
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Our Development Services
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

      {/* 🔥 TECH STACK */}
      <div className="px-6 sm:px-12 lg:px-24 pb-16 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-8">Technologies We Use</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {["React", "Node.js", "JavaScript", "MongoDB", "Firebase", "Next.js"].map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-gray-100 dark:bg-white/10 rounded-full text-sm"
            >
              {tech}
            </span>
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
            "High Performance Websites",
            "SEO-Friendly Code",
            "Mobile Optimized",
            "Secure & Scalable",
            "Clean Code Structure",
            "Fast Delivery",
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-xl bg-gray-50 dark:bg-white/5">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 CTA */}
      <div className="px-6 sm:px-12 lg:px-24 pb-20">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#5044E5] to-[#4d8cea] text-white p-10 rounded-3xl text-center shadow-lg">
          
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Build Your Website Today
          </h3>

          <p className="mb-6 text-white/80">
            Let’s create a powerful, scalable, and high-performing website for your business.
          </p>

          <button className="bg-white text-[#5044E5] px-6 py-3 rounded-xl font-medium hover:scale-105 transition">
            Start Project
          </button>
        </div>
      </div>

    </div>
  );
};

export default WebDevelopment;