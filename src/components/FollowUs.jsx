import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./FollowUs.css";

const FollowUs = () => {
  return (
    <div className="follow-us">
      <h2>Follow Us</h2>
      <p>
        For latest updates on Rishita Setty Creative Photography, Baby
        Photography, and Maternity Photography, follow our social channels
        either on Instagram or Facebook.
      </p>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/rishitasetty"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icon facebook" />
        </a>
        <a
          href="https://www.instagram.com/rishita_setty/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon instagram" />
        </a>
      </div>
    </div>
  );
};

export default FollowUs;
