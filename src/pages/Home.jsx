import React from "react";
import Navbar from "../components/Navbar/Navbar";
import FirstCarousel from "../components/FirstCarousel/FirstCarousel";
import OffersWeProvide from "../components/OffersWeProvide/OffersWeProvide";
import PortfolioSection from "../components/PortfolioSection/PortfolioSection";
import Testimonial from "../components/Testimonials/Testimonials";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import YouTubeComponent from "../components/YoutubeComponent/YoutubeComponent";
import Map from "../components/Map";
import FollowUs from "../components/FollowUs";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <FirstCarousel />
      <AboutMe />
      <PortfolioSection />

      <OffersWeProvide />
      <Testimonial />
      <YouTubeComponent />
      <Contact />
      <Map />
      <FollowUs />
      <Footer />
    </div>
  );
};

export default Home;
