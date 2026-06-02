import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "framer-motion";

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-20 py-4 sticky top-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-gray-900/70 border-b border-gray-100 dark:border-white/10"
    >
      {/* ✅ Logo */}
      <Link to="/">
        <img
          src={theme === "dark" ? assets.logo_dark : assets.logo}
          alt="Adnex Logo"
          className="w-32 sm:w-40 cursor-pointer"
        />
      </Link>

      {/* ✅ DESKTOP MENU */}
      <div className="hidden sm:flex items-center gap-8 text-gray-700 dark:text-white text-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-primary transition ${
              isActive ? "text-primary font-semibold" : ""
            }`
          }
        >
          Home
        </NavLink>

        <a href="#services" className="hover:text-primary transition">
          Services
        </a>

        <a
          href="/#contact-us"
          onClick={(e) => {
            e.preventDefault();
            setTimeout(() => {
              document
                .getElementById("contact-us")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
          className="hover:text-primary transition"
        >
          Contact
        </a>

        <NavLink to="/web-design">Web Design</NavLink>
        <NavLink to="/web-development">Development</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </div>

      {/* ✅ RIGHT SIDE */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Theme Toggle */}
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        {/* Mobile Menu Button */}
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt="menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-8 sm:hidden cursor-pointer"
        />

        {/* Contact Button */}
        <a
          href="/#contact-us"
          className="hidden sm:flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full text-sm hover:scale-105 transition-transform"
        >
          Contact
          <img src={assets.arrow_icon} width={14} alt="arrow" />
        </a>
      </div>

{/* ✅ MODERN MOBILE DROPDOWN */}
<motion.div
  initial={false}
  animate={menuOpen ? "open" : "closed"}
  variants={{
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.35,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.07,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.25,
        ease: "easeIn",
        when: "afterChildren",
      },
    },
  }}
  className="absolute top-full left-0 w-full sm:hidden overflow-hidden"
>
<div className="mx-3 mt-2 rounded-2xl 
bg-white/80 dark:bg-gray-900/80
backdrop-blur-[4px] border border-gray-200 dark:border-white/10 shadow-2xl ">

    <motion.div
      className="flex flex-col px-5 py-4 gap-3 text-gray-700 dark:text-white text-sm"
    >

      {[
        { label: "Home", to: "/" },
        { label: "Services", href: "#services" },
        { label: "Contact", href: "/#contact-us" },
        { label: "Web Design", to: "/web-design" },
        { label: "Development", to: "/web-development" },
        { label: "Blog", to: "/blog" },
      ].map((item, i) => (
        <motion.div
          key={i}
          variants={{
            open: { opacity: 1, y: 0 },
            closed: { opacity: 0, y: -10 },
          }}
        >
          {item.to ? (
            <NavLink
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition"
            >
              {item.label}
            </NavLink>
          ) : (
            <a
              href={item.href}
              onClick={(e) => {
                if (item.label === "Contact") {
                  e.preventDefault();
                  setMenuOpen(false);
                  setTimeout(() => {
                    document
                      .getElementById("contact-us")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                } else {
                  setMenuOpen(false);
                }
              }}
              className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition"
            >
              {item.label}
            </a>
          )}
        </motion.div>
      ))}

    </motion.div>
  </div>
</motion.div>

      {/* ✅ OPTIONAL OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm sm:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </motion.div>
  );
};

export default Navbar;