import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header"; // ✅ Import Header component
import Hero from "./components/Hero"; // ✅ Import Hero component
import Services from "./components/Services"; // ✅ Import Services component
import PricingTable from "./components/PricingTable"; // ✅ Import PricingTable component
import Gallery from "./components/Gallery"; // ✅ Import Gallery
import Testimonials from "./components/Testimonials"; // ✅ Import Testimonials Component
import Footer from "./components/Footer"; // ✅ Import Footer




function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      {/* ✅ Header Component */}
      <Header />

      {/* ✅ Hero Section Component (Pass openModal function as prop) */}
      <Hero openModal={openModal} />

      {/* ✅ Services Component */}
      <Services />

      {/* ✅ Pricing Table Component */}
      <PricingTable />

      <Gallery /> {/* ✅ Add Gallery Here */}

      <Testimonials /> {/* ✅ Add Testimonials Here */}
      <Footer /> {/* ✅ Add Footer Here */}

      {/* ✅ Modal Form (Only visible when isModalOpen is true) */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Request a Free Quote</h2>
            <form>
              <label>From Zip:</label>
              <input type="text" required />

              <label>To Zip:</label>
              <input type="text" required />

              <label>Move Date:</label>
              <input type="date" required />

              <label>Bedrooms:</label>
              <select>
                <option>1 Bedroom</option>
                <option>2 Bedrooms</option>
                <option>3 Bedrooms</option>
                <option>4+ Bedrooms</option>
              </select>

              <label>Name:</label>
              <input type="text" required />

              <label>Phone:</label>
              <input type="tel" required />

              <label>Email:</label>
              <input type="email" required />

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
