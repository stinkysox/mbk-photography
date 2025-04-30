import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Shrink logo after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    console.log(id);
    if (id === "bookappointment") {
      window.location.href =
        "https://api.whatsapp.com/send/?phone=917799000575&text&type=phone_number&app_absent=0";
      return;
    }
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu after clicking a link
    }
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, ease: "easeOut" },
    }),
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <motion.img
          src="https://i.postimg.cc/B6xPVD70/Screenshot-2025-04-30-112222-Picsart-Ai-Image-Enhancer.png"
          alt="Logo"
          className="nav-logo-image"
          animate={{ height: isScrolled ? 60 : 80 }} // now allows larger height
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
      <AnimatePresence>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          {[
            "About mbk photography",
            "My Services",
            "Studio",
            "Portfolio",
            "Map",
            "Book Appointment",
          ].map((item, index) => {
            const id = item.toLowerCase().replace(/\s+/g, "");
            return (
              <motion.li
                key={item}
                variants={navVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                custom={index}
                onClick={() => scrollToSection(id)}
              >
                <a
                  href="#"
                  className={item === "Book Appointment" ? "btn" : ""}
                >
                  {item}
                </a>
              </motion.li>
            );
          })}
        </ul>
      </AnimatePresence>
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
