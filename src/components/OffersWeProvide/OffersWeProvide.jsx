import React from "react";
import "./OffersWeProvide.css";

const offers = [
  {
    image:
      "https://i.pinimg.com/736x/61/a9/89/61a9896f7c8dd8a61a9b41df6c78604d.jpg", // Replace with your image URLs
    title: "Photographer & Wedding Filmer",
    description: "Capturing timeless moments with cinematic flair.",
  },
  {
    image:
      "https://i.pinimg.com/736x/c0/8a/6b/c08a6b93db05ebdbf4724422f1b63ca8.jpg", // Replace with your image URLs
    title: "Fashion | Wedding | Advertising",
    description: "Stylized, polished shoots tailored to your vision.",
  },
  {
    image:
      "https://i.pinimg.com/736x/16/5d/a9/165da990fb499fb48bfe5012a6435dc5.jpg", // Replace with your image URLs
    title: "Baby Shoots | Maternity Shoots",
    description: "Cherish your little one’s first memories forever.",
  },
  {
    image:
      "https://i.pinimg.com/736x/31/15/3b/31153bee999b255ef9ab7ea05963b541.jpg", // Replace with your image URLs
    title: "Product / Service Promotion",
    description: "High-quality visuals to boost your brand’s presence.",
  },
];

const OffersWeProvide = () => {
  return (
    <section className="offers-section">
      <div className="container">
        <h2 className="section-title">Offers We Provide</h2>
        <div className="offers-grid">
          {offers.map((offer, index) => (
            <div key={index} className="offer-card">
              <div className="image-container">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="offer-image"
                />
              </div>
              <h3 className="offer-title">{offer.title}</h3>
              <p className="offer-description">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersWeProvide;
