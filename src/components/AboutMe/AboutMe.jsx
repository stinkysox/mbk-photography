import React from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me" id="aboutmbkphotography">
      <div className="about-me-content">
        <motion.img
          src="https://i.postimg.cc/B6xPVD70/Screenshot-2025-04-30-112222-Picsart-Ai-Image-Enhancer.png"
          alt="MBK Photography"
          className="about-me-image"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to MBK Photography, where every shot tells a story. We believe
          in capturing the raw emotion and beauty of every moment, whether it's
          a wedding, a portrait session, or a special event. With years of
          experience and a deep passion for photography, we strive to create
          timeless memories that you can cherish forever.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          At MBK Photography, we pride ourselves on our creative vision and
          professional approach. Our goal is to ensure that every client feels
          comfortable and confident in front of the camera, so they can truly be
          themselves. From natural candid shots to meticulously crafted
          portraits, our work reflects our commitment to excellence and artistic
          expression.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          We’re here to make your memories last a lifetime. Whether you’re
          looking for an intimate portrait session or need a photographer for
          your next big event, we’re excited to work with you and bring your
          vision to life!
        </motion.p>
      </div>
    </section>
  );
};

export default AboutMe;
