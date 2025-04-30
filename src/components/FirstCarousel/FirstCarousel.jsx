import React, { useState, useEffect } from "react";
import "./FirstCarousel.css";
import { BsStars } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const firstCarousel = [
  "https://i.postimg.cc/0ymWZXGX/Whats-App-Image-2025-04-29-at-4-36-46-PM.jpg",
  "https://i.postimg.cc/4ymwcWN5/Whats-App-Image-2025-04-29-at-4-36-47-PM.jpg",
  "https://i.postimg.cc/mgxVcNxY/Whats-App-Image-2025-04-29-at-4-36-47-PM-1.jpg",
  "https://i.postimg.cc/4ySL2rFq/Whats-App-Image-2025-04-29-at-4-36-48-PM.jpg",
  "https://i.postimg.cc/G2SxbvJs/Whats-App-Image-2025-04-29-at-4-36-48-PM-1.jpg",
  "https://i.postimg.cc/0jMdjrcX/Whats-App-Image-2025-04-29-at-4-36-48-PM-2.jpg",
  "https://i.postimg.cc/Vvx9C1hf/Whats-App-Image-2025-04-29-at-4-36-49-PM.jpg",
  "https://i.postimg.cc/zD64jhZB/Whats-App-Image-2025-04-29-at-4-36-49-PM-1.jpg",
];

const FirstCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === firstCarousel.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="top-carousel">
      <motion.div
        className="first-carousel-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={firstCarousel[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
      </motion.div>
      <motion.p
        className="top-para"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        A wedding day filled with magic, captured through our lens.
        <br />
        <BsStars className="star" />
        <FaHeart className="heart" />
      </motion.p>
    </div>
  );
};

export default FirstCarousel;
