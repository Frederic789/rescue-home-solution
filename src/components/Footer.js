import React from "react";
import "./Footer.css"; // Import footer-specific styles

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Rescue Home Solutions. All Rights Reserved.</p>
        <div className="footer-contact">
          <p>📞 <a href="tel:+14255031817">+1 (425) 503-1817</a></p>
          <p>✉️ <a href="mailto:tamitotherescue@gmail.com">tamitotherescue@gmail.com</a></p>
        </div>
        <div className="footer-social">
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
