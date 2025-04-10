import React from "react";
import "../App.css"; // Import global styles
import "./Header.css"; // Import header-specific styles

function Header() {
  return (
    <header>
      {/* Logo Section */}
      <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/images/second-logo.png`} alt="Rescue Home Solutions Logo" className="logo" />
      </div>

      {/* Company Name */}
      <h1 className="header-title">Rescue Home Solutions</h1>

      {/* Contact Info Section */}
      <div className="contact-info">
        <p>📞 <a href="tel:+14255031817">+1 (425) 503-1817</a></p>
        <p>✉️ <a href="mailto:tamitotherescue@gmail.com">Tamitotherescue@gmail.com</a></p>
      </div>

      {/* Navigation Bar */}
      <nav>
        <ul className="nav-links">
          <li className="dropdown">
            <a href="#" className="dropbtn">Services</a>
            <ul className="dropdown-content">
              <li><a href="#">Staging</a></li>
              <li><a href="#">Local Moving</a></li>
              <li><a href="#">Long Distance Moving</a></li>
              <li><a href="#">Storage</a></li>
              <li><a href="#">Packing</a></li>
              <li><a href="#">Garbage Dump</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">About Us</a>
            <ul className="dropdown-content">
              <li><a href="#">Our History</a></li>
              <li><a href="#">Reviews</a></li>
              <li><a href="#">Our Values</a></li>
            </ul>
          </li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
