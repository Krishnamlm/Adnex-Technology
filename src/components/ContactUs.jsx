import React, { useState } from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const SERVICES = [
  "Web Development",
  "App Development",
  "SEO Optimization",
  "UI/UX Design",
  "Digital Marketing",
  "Branding",
  "Other",
];

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);

    formData.append("access_key", "6eca66aa-0d23-4277-b41f-093bb723791b");
    formData.append("from_name", "Adnex Technologies Website");
    formData.append("subject", "New Inquiry");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        event.target.reset();
      } else {
        toast.error(data.message || "Submission failed.");
      }
    } catch (error) {
      toast.error("Network error. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

 return (
  <section id="contact-us" className="relative py-16 px-4 sm:px-10 lg:px-20 bg-white dark:bg-black overflow-hidden">

    {/* glow */}
    <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-purple-400/20 blur-[120px] rounded-full" />

    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE - CONTENT */}
      <div className="text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Get in Touch
        </h2>

        <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm sm:text-base">
          Tell us your idea — we’ll handle the rest and turn it into a high-performing digital product.
        </p>

        {/* extra highlight points (optional but premium feel) */}
        <div className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <p>✔ Fast response within 24 hours</p>
          <p>✔ Custom strategy for your business</p>
          <p>✔ Free consultation for new clients</p>
        </div>
      </div>

      {/* RIGHT SIDE - FORM */}
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 bg-white/70 dark:bg-white/5 backdrop-blur-xl
        border border-gray-200 dark:border-white/10
        rounded-2xl p-6 shadow-lg"
      >

        <input
          name="name"
          required
          placeholder="Your name"
          className="w-full p-3 text-sm rounded-lg bg-gray-50 dark:bg-gray-900
          border border-gray-200 dark:border-gray-700
          outline-none focus:ring-2 focus:ring-purple-500/40"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email address"
          className="w-full p-3 text-sm rounded-lg bg-gray-50 dark:bg-gray-900
          border border-gray-200 dark:border-gray-700
          outline-none focus:ring-2 focus:ring-blue-500/40"
        />

        <select
          name="service"
          required
          className="w-full p-3 text-sm rounded-lg bg-gray-50 dark:bg-gray-900
          border border-gray-200 dark:border-gray-700
          outline-none focus:ring-2 focus:ring-purple-500/40"
        >
          <option value="">Select service</option>
          {SERVICES.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>

        <textarea
          name="message"
          rows={4}
          required
          placeholder="Your message..."
          className="w-full p-3 text-sm rounded-lg bg-gray-50 dark:bg-gray-900
          border border-gray-200 dark:border-gray-700
          outline-none focus:ring-2 focus:ring-blue-500/40 resize-none"
        />

        <input type="checkbox" name="botcheck" className="hidden" />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2
          py-3 rounded-lg text-sm font-semibold text-white
          bg-gradient-to-r from-purple-600 to-blue-600
          hover:scale-[1.02] active:scale-95 transition-all"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </motion.form>

    </div>
  </section>
);
};

export default ContactUs;