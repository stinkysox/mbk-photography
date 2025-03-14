import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./Testimonials.css";
const Testimonial = () => {
  return (
    <section className="testimonial-section light">
      <div className="testimonial-container">
        <div className="testimonial-heading">
          <h2>Customer Reviews</h2>
          <p>
            See what our valued customers have to say about their experience
            with us. Their feedback inspires us to keep delivering the best
            service possible.
          </p>
        </div>

        <div className="testimonial-item">
          <div className="testimonial-item-image">
            <img
              src="https://i.postimg.cc/VsMSJwV4/852583511c3109d7a4efa0c3a233be1e.jpg"
              alt="Akshay Kumar"
            />
          </div>
          <div className="testimonial-item-content">
            <h4>Bhavya Ch</h4>
            <p className="testimonial-rating">
              <FaStar className="active" />
              <FaStar className="active" />
              <FaStar className="active" />
              <FaStarHalfAlt className="active" />
              <FaRegStar className="inactive" />
            </p>
            <p className="testimonial-text">
              I just can't get over how amazing the photos turned out. My entire
              family is just in awe of your talent! You captured every
              expression of my babies, and cute smile in such a beautiful,
              natural manner and with excellent service, great work, the best
              quality of pictures! Overall I am totally satisfied with Rishita.
              she is very professional and will make the best. <br /> Thank you
              Rishita.
            </p>
          </div>
        </div>

        <div className="testimonial-item reverse">
          <div className="testimonial-item-image">
            <img
              src="https://i.postimg.cc/8cVzRF04/Pin-by-michelle-on-power-point-Video-in-2022-Ilustrasi-flat-Ilustrasi-karakter-Kartun.jpg"
              alt="Raima Ray"
            />
          </div>
          <div className="testimonial-item-content">
            <h4>Archana Penumacha</h4>
            <p className="testimonial-rating">
              <FaStar className="active" />
              <FaStar className="active" />
              <FaStar className="active" />
              <FaStarHalfAlt className="active" />
              <FaRegStar className="inactive" />
            </p>
            <p className="testimonial-text">
              All I can say is WOW. She is amazing with her photography. I
              highly recommend that if you are looking for the best photographer
              book her today. In love with the photos she clicked of my baby
              boy. We will cherish these photos forever! I look forward to
              returning for more photos in the future. Thanks Rishitha garu for
              the wonderful pictures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
