import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Aarav Mehta",
    stars: 5,
    review:
      "Absolutely loved the experience! The team was professional and captured every moment perfectly.",
  },
  {
    name: "Nisha Kapoor",
    stars: 4,
    review:
      "Wonderful service and great attention to detail. Would definitely recommend to others!",
  },
  {
    name: "Kabir Verma",
    stars: 5,
    review:
      "A cinematic masterpiece! The output exceeded our expectations. Will hire again!",
  },
  {
    name: "Rhea Malhotra",
    stars: 5,
    review:
      "The photos had so much emotion and beauty in them. I was moved to tears. Thank you!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h3>What Our Clients Say</h3>
      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05, // Scale up slightly on hover instead of translateY
              transition: { duration: 0.2, ease: "easeInOut" },
            }} // Use scale and ease for a smoother transition
          >
            <h4>{item.name}</h4>
            <div className="stars">
              {"★".repeat(item.stars)}
              {"☆".repeat(5 - item.stars)}
            </div>
            <p>"{item.review}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
