import React from "react";

const Map = () => {
  return (
    <div
      id="map"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "400px",
      }}
    >
      <iframe
        title="MBK Photography Studio"
        width="80%"
        height="80%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=Vijayawada,+Andhra+Pradesh&output=embed"
      ></iframe>
    </div>
  );
};

export default Map;
