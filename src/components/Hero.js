import React from "react";
import "./Hero.css"; // ✅ Import CSS

const Hero = ({ openModal }) => {
  return (
    <section id="hero" style={{ backgroundColor: "#4CAF50", padding: "50px 0", textAlign: "center" }}>
      <div className="hero-content" style={{ maxWidth: "800px", margin: "auto", background: "#1e4620", padding: "20px", borderRadius: "10px" }}>
        <h2 style={{ color: "white" }}>
          We Are the Only Full-Service Business When You are Ready to Sell Your Home!
        </h2>
        <p style={{ color: "white" }}>
          Get expert help with moving, staging, and organizing your home.
        </p>
        <button className="cta-button" onClick={openModal} style={{ backgroundColor: "#FFA500", color: "white", padding: "10px 20px", fontSize: "16px", borderRadius: "5px", border: "none", cursor: "pointer" }}>
          Get a Free Consultation
        </button>
      </div>
    </section>
  );
};

export default Hero;
