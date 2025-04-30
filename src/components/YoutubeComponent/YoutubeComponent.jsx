import React, { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import "./YouTubeComponent.css";

const YouTubeComponent = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    window.open("https://www.youtube.com/@baluk4030", "_blank");
  };

  return (
    <div className="youtube-container">
      <FaYoutube
        className={`youtube-icon ${clicked ? "clicked" : ""}`}
        onClick={handleClick}
      />
    </div>
  );
};

export default YouTubeComponent;
