import React, { useState } from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const Footer = ({ theme }) => {
  const [openModal, setOpenModal] = useState(null); // "privacy" | "terms" | "disclaimer"

  const closeModal = () => setOpenModal(null);

  return (
    <>
      {/* 🌐 MAIN FOOTER SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-10 px-4 sm:px-10 lg:px-24 xl:px-40"
      >
        {/* Footer Top */}
        <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
          >
            <img
              src={theme === "dark" ? assets.logo_dark : assets.logo}
              alt=""
              className="w-32 sm:w-44"
            />
            <p className="max-w-md">
              From strategy to execution, we craft digital solutions that move
              your business forward.
            </p>

            {/* ⚙️ Footer Links */}
            <ul className="flex flex-wrap gap-6">
              <li>
                <a className="hover:text-primary" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#our-work">
                  Our work
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#contact-us">
                  Contact Us
                </a>
              </li>

              {/* 🧾 Legal / Policy Links */}
              <li>
                <button
                  onClick={() => setOpenModal("privacy")}
                  className="hover:text-primary underline"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenModal("terms")}
                  className="hover:text-primary underline"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpenModal("disclaimer")}
                  className="hover:text-primary underline"
                >
                  Disclaimer
                </button>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400"
          >
            <h3 className="font-semibold">Subscribe to our newsletter</h3>
            <p className="text-sm mt-2 mb-6">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>

            <div className="flex gap-2 text-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
              />
              <button className="bg-primary text-white rounded px-6">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        <hr className="border-gray-300 dark:border-gray-600 my-6" />

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap"
        >
          <p>Copyright 2025 © Adnex - All Right Reserved.</p>

          <div className="flex items-center justify-between gap-4">
            <a
              href="https://www.instagram.com/adnexindia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a
              href="https://www.linkedin.com/company/adnex-technologies"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com/adnexindia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.instagram_icon} alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/adnex-technologies"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* 🪟 MODAL OVERLAY (shared for all policies) */}
      {openModal && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[99999]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-800 max-w-lg w-[90%] p-6 rounded-xl shadow-xl text-gray-700 dark:text-gray-300 overflow-y-auto max-h-[80vh]"
          >
            <h2 className="text-xl font-semibold mb-4 text-center">
              {openModal === "privacy" && "Privacy Policy"}
              {openModal === "terms" && "Terms of Service"}
              {openModal === "disclaimer" && "Disclaimer"}
            </h2>

            {openModal === "privacy" && (
              <p>
                At <strong>Adnex Technologies</strong>, we respect your privacy.
                We collect only necessary data to provide better services and
                never share your information with third parties unless required
                by law.
              </p>
            )}

            {openModal === "terms" && (
              <p>
                By using our website, you agree to comply with our terms. You
                may not use our site for any illegal or harmful activities.
                Content is the property of Adnex Technologies.
              </p>
            )}

            {openModal === "disclaimer" && (
              <p>
                The content on this website is provided to showcase our expertise and services.
            While we aim to keep all information accurate and up to date, it should not be
            considered legal or contractual advice. For project-specific discussions or
            commitments, please contact <strong>Adnex Technologies</strong> directly.
              </p>
            )}

            <button
              onClick={closeModal}
              className="mt-6 w-full bg-primary text-white py-2 rounded hover:bg-primary/90"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
