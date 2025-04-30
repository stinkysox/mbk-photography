import React from "react";
import { FaInstagram } from "react-icons/fa";
import "./PortfolioSection.css";

const portfolioImages = [
  "https://i.postimg.cc/T15Yp5Fs/Sonika-wedding-21-1.jpg",
  "https://i.postimg.cc/hPxTYXvM/Sonika-wedding-10-1.jpg",
  "https://i.postimg.cc/VkbRwzgL/00-1.jpg",
];

const PortfolioSection = () => {
  return (
    <div className="portfolio-section" id="portfolio">
      <h2 className="portfolio-title">My Portfolio</h2>

      <div className="portfolio-grid">
        {portfolioImages.map((image, index) => (
          <div key={index} className="portfolio-card">
            <img
              src={image}
              alt={`Portfolio Image ${index + 1}`}
              className="portfolio-image"
            />
          </div>
        ))}
      </div>

      <a
        href="https://www.instagram.com/mbk_photography_9/"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-button"
      >
        <FaInstagram className="instagram-icon" />
        <span>Visit My Instagram</span>
      </a>
    </div>
  );
};

export default PortfolioSection;
