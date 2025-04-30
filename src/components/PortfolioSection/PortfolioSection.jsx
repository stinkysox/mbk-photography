import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon
import "./PortfolioSection.css"; // We'll add custom styling here

const portfolioImages = [
  "https://i.postimg.cc/T15Yp5Fs/Sonika-wedding-21-1.jpg",
  "https://i.postimg.cc/hPxTYXvM/Sonika-wedding-10-1.jpg",
  "https://i.postimg.cc/VkbRwzgL/00-1.jpg",
];

const PortfolioSection = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <div className="portfolio-section">
      <h2 className="portfolio-title">My Portfolio</h2>
      <Slider {...settings} className="portfolio-slider">
        {portfolioImages.map((image, index) => (
          <div key={index} className="portfolio-slide">
            <img
              src={image}
              alt={`Portfolio Image ${index + 1}`}
              className="portfolio-image"
            />
          </div>
        ))}
      </Slider>

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
