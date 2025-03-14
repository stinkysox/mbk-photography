import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imagesArray = [
  "https://i.postimg.cc/FKv0DRkP/rishita-setty-photography-baby-wrap-shoot.jpg",
  "https://i.postimg.cc/1zyNDjb2/rishita-setty-photography-new-born-prop-theme.jpg",
  "https://i.postimg.cc/9z3D08Gx/rishita-setty-photography-creative-maternity-shoot.jpg",
  "https://i.postimg.cc/3JpBBzbx/rishita-setty-photography-baby-twins-shoot-1108x739.jpg",
];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true, // Allows images to scale properly
    variableWidth: false, // Ensures full width of parent container
  };

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "900px",
        margin: "auto",
        padding: "20px",
      }}
    >
      <Slider {...settings}>
        {imagesArray.map((image, index) => (
          <div key={index} style={{ width: "100%" }}>
            {" "}
            {/* Ensuring full width */}
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
