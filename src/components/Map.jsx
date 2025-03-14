import React from "react";

const Map = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "400px",
      }}
    >
      <iframe
        title="Rishita Setty Photography Studio"
        width="80%"
        height="80%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7581749616815!2d80.4270582!3d16.3108067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a7558ffffffff%3A0x18aed90e112494dc!2sRishita%20Setty%20Photography%20Studio!5e0!3m2!1sen!2sin!4v1710430900900!5m2!1sen!2sin"
      ></iframe>
    </div>
  );
};

export default Map;
