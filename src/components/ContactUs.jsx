import React, { useState } from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);

    // CRITICAL: Ensure this key is active in your Web3Forms Dashboard
    formData.append("access_key", "6eca66aa-0d23-4277-b41f-093bb723791b");
    formData.append("from_name", "Adnex Technologies Website");
    formData.append("subject", "New Lead from Adnex Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent! We'll get back to you soon.");
        event.target.reset();
      } else {
        // This captures errors from the API (like invalid key)
        console.log("Error response:", data);
        toast.error(data.message || "Submission failed. Please check your API key.");
      }
    } catch (error) {
      // This captures browser/network level errors
      console.error("Fetch error:", error);
      toast.error("Network error. Please check your internet or disable Ad-blockers.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-8 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="Ready to grow your brand? Let’s connect and build something exceptional together."
      />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-5 max-w-2xl w-full"
      >
        {/* Anti-Spam Honeypot Field (Invisible to users) */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Your Name</label>
          <div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 focus-within:ring-2 focus-within:ring-primary/50 transition-all">
            <img src={assets.person_icon} alt="" className="w-4 h-4" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-3 text-sm bg-transparent outline-none dark:text-white"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Email Address</label>
          <div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 focus-within:ring-2 focus-within:ring-primary/50 transition-all">
            <img src={assets.email_icon} alt="" className="w-4 h-4" />
            <input
              type="email" 
              name="email"
              placeholder="Email"
              className="w-full p-3 text-sm bg-transparent outline-none dark:text-white"
              required
            />
          </div>
        </div>

        <div className="sm:col-span-2 flex flex-col gap-2">
          <label className="text-sm font-medium">Your Message</label>
          <textarea
            rows={5}
            name="message"
            placeholder="Tell us about your project..."
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 focus-within:ring-2 focus-within:ring-primary/50 transition-all dark:text-white"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full sm:w-max flex items-center justify-center gap-2 bg-primary text-white text-sm px-12 py-3.5 rounded-full transition-all font-semibold ${
            isSubmitting ? "opacity-50 cursor-wait" : "hover:shadow-lg active:scale-95"
          }`}
        >
          {isSubmitting ? "Sending Request..." : "Submit Form"}
          {!isSubmitting && <img src={assets.arrow_icon} alt="" className="w-4" />}
        </button>
      </motion.form>
    </motion.section>
  );
};

export default ContactUs;