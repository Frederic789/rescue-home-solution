import React from "react";
import "./Gallery.css"; // Ensure you have a CSS file for styling

function Gallery() {
  return (
    <section id="gallery">
      <h2>Our Work</h2>
      <div className="image-container">
        {/* Use process.env.PUBLIC_URL to load images from public folder */}
        <img src={`${process.env.PUBLIC_URL}/picture1.jpg`} alt="Moving Service 1" />
        <img src={`${process.env.PUBLIC_URL}/picture2.jpg`} alt="Moving Service 2" />
        <img src={`${process.env.PUBLIC_URL}/background picture.jpg`} alt="Moving Service 3" />
       
      </div>
    </section>
  );
}

export default Gallery;
