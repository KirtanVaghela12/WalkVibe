import React from "react";
import video from "../assets/video1.mp4"; // ✅ Make sure this path is correct

const HeroSection = () => {
  return (
    <div style={{ position: "relative", height: "500px", overflow: "hidden" }}>
      {/* 🔥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔲 Overlay Text */}
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "32px",
          fontWeight: "bold",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        New Collection — Elegant Styles for Every Season
      </div>
    </div>
  );
};

export default HeroSection;
