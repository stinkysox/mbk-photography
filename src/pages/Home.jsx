import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { FaInstagram } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Home.css";
import ImageCarousel from "../components/ImagesCarousel/ImagesCarousel";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";
import Map from "../components/Map";
import FollowUs from "../components/FollowUs";
import Footer from "../components/Footer/Footer";
const Home = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <Navbar />
      <div className="sectionOne">
        <h2>Memories</h2>
        <span>By Rishita Setty</span>
        <p>
          A photography studio dedicated to New Borns, Kids, and Maternity
          Photoshoots. Promoted by lead photographer Rishita Setty with
          extensive experience in Visual Media and Photography, the studio setup
          consists of the latest high-tech gear to produce exceptional images
          and photography memories to last forever.
        </p>
        <div className="buttons">
          <button
            className="primary-btn"
            onClick={() => scrollToSection("aboutrishitasetty")}
          >
            About Rishita Setty
          </button>
          <button
            className="secondary-btn"
            onClick={() => scrollToSection("portfolio")}
          >
            View Portfolio
          </button>
        </div>
      </div>

      <div className="sectionTwo" id="aboutrishitasetty">
        <img
          src="https://i.postimg.cc/LXS8FF68/photo-2021-07-01-11-56-25-1076x717.jpg"
          alt="Rishita Setty"
          className="profile-image"
        />
        <div className="text-content">
          <h2>About Rishita Setty</h2>
          <p className="qualification">
            B.Com Advertising, Post Graduate in Graphics & Animations, Advanced
            Diploma in Photography
          </p>
          <p className="bio">
            Hello, my name is <strong>Rishita Setty</strong>. I am a wife,
            mother, and an artist. My goal is to deliver a unique set of
            photographs that are both natural and artistic. My style
            incorporates traditional portraits with the latest technology to
            create exceptional images that shine on social media platforms like
            Facebook and Instagram. After each shoot session, I want my clients
            to walk away with great satisfaction and a smile on their faces.
            This is what drives my creativity. 😊
          </p>
          <button className="insta-btn">
            <FaInstagram />
          </button>
        </div>
      </div>

      <div className="sectionThree" id="photographypackages">
        <h1>Photography Packages</h1>
        <div className="package-card">
          <img
            src="https://i.postimg.cc/hjHw5T8F/photo-2022-03-19-17-29-2-506x506.jpg"
            alt="Newborn Photoshoot"
            className="package-image"
          />
          <div className="package-content">
            <h2>Newborn or Toddler Kids Photoshoot</h2>
            <p>
              The first months of your baby's life pass so fast. Newborn and
              baby photos capture these precious moments so you can cherish them
              forever. I offer a relaxed photo session in my cozy studio,
              ensuring your baby feels completely comfortable. A variety of
              props and wraps are available.
            </p>
            <button
              className="contact-btn"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send/?phone=917799000575&text&type=phone_number&app_absent=0",
                  "_blank"
                )
              }
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="package-card">
          <img
            src="https://i.postimg.cc/V6jBztQP/rishita-setty-cake-smash-and-milk-bath-photoshoot-506x337.jpg"
            alt="Newborn Photoshoot"
            className="package-image"
          />
          <div className="package-content">
            <h2>Cake Smash & Milk Bath Photoshoot</h2>
            <p>
              Cake smash is a joyful way to celebrate upcoming 1st birthday. I
              will capture the precious moments when baby gets to taste sugar
              for first time. Whether it is choosing a right cake or a smashing
              outfit,my guidance will make sure your memories are captured
              perfectly
            </p>
            <button
              className="contact-btn"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send/?phone=917799000575&text&type=phone_number&app_absent=0",
                  "_blank"
                )
              }
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="package-card">
          <img
            src="https://i.postimg.cc/xdmLPmdN/rishita-setty-photography-new-born-baby-theme-506x337.jpg"
            alt="Newborn Photoshoot"
            className="package-image"
          />
          <div className="package-content">
            <h2>Theme based Photoshoot</h2>
            <p>
              Select the themes that suits your baby. These elaborate and
              detailed film style sets will make every parent's dream come true
              regarding their baby Photoshoot. More than 30 plus themes to
              choose from <br />
              1. Super Women <br /> 2. Barbie <br /> 3. Astronaut <br /> 4. Chef
              etc etc..
            </p>
            <button
              className="contact-btn"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send/?phone=917799000575&text&type=phone_number&app_absent=0",
                  "_blank"
                )
              }
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="package-card">
          <img
            src="https://i.postimg.cc/8cZvCBZ9/rishita-setty-photography-creative-maternity-shoot-1-506x759.jpg"
            alt="Newborn Photoshoot"
            className="package-image"
          />
          <div className="package-content">
            <h2>Pregnancy/ Maternity Photoshoot</h2>
            <p>
              This package helps capture the magic of most unique moment in a
              women's life. My photo shoot sessions are tailored for
              announcements, food cravings, expressions which are unique to each
              person. My style for this shoot is spontaneous and relaxed which
              makes whole process natural.
            </p>
            <button
              className="contact-btn"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send/?phone=917799000575&text&type=phone_number&app_absent=0",
                  "_blank"
                )
              }
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="studio" id="studio">
        <h1>My Studio, My Workplace</h1>
        <div className="studio-container">
          <div className="studio-card">
            <img
              src="https://i.postimg.cc/pLCdMX1c/photographystudio-2-695x418.jpg"
              alt="Studio Interior"
              className="studio-image"
            />
            <h2>1500 square feet of shooting space</h2>
            <p>
              My studio is designed in contemporary style using light colors
              coupled with a very high ceiling to make babies/kids comfortable
              and homely. This way, the baby feels relaxed and I get the best
              photo shots possible. Getting babies to relax is my secret recipe.
            </p>
          </div>

          <div className="studio-card">
            <img
              src="https://i.postimg.cc/QxrNBW2n/babyprops-1-465x280.jpg"
              alt="Comfortable Setup"
              className="studio-image"
            />
            <h2>Unique Baby Props</h2>
            <p>
              Standout baby props are vital for getting unique photographs. My
              vast collection of props is suitable for newborns, toddlers, and
              kids of most ages. I also continuously add new props every month
              to give more photo opportunities for my clients.
            </p>
          </div>

          <div className="studio-card">
            <img
              src="https://i.postimg.cc/6pW9cx5r/rishitasettycameragear-2-695x412.jpg"
              alt="Creative Props"
              className="studio-image"
            />
            <h2>Latest gear imported from USA</h2>
            <p>
              Majority of the camera gear and accessories I use are imported. My
              primary workhorse camera is Canon 5D Mark IV, incorporated with
              lenses, seamless backdrops, props, softboxes, lights, flashes, and
              modifiers imported from the USA. This gives me more freedom for
              creativity.
            </p>
          </div>
        </div>
      </div>

      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>

        <p>
          All my work is copyrighted. Unauthorized use of my designs or concepts
          is legal violation. Check or follow my instagram profile for latest
          photoshoot updates.
        </p>

        <ImageCarousel />
      </div>

      <div className="testimonials" id="testimonials">
        <h1>Testimonials</h1>
        <Testimonials />
      </div>

      <div>
        <Contact />

        <div id="map">
          <Map />
        </div>
      </div>
      <FollowUs />
      <Footer />
    </div>
  );
};

export default Home;
