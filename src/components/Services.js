import React from "react";
import "./Services.css"; // ✅ Import CSS

const Services = () => {
  return (
    <section id="services" style={{ padding: "40px", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ textAlign: "center" }}>Our Services</h2>
      <div className="service">
        <h3>Design Consultation</h3>
        <p>Walkthrough with homeowner to identify needs, problem areas, and evaluate needs.</p>
        <p><strong>Pricing:</strong> $350 – Larger homes price adjusted</p>
      </div>

      <div className="service">
        <h3>Moving</h3>
        <p>We have full moving service team and truck available.</p>
        <p><strong>Pricing:</strong> TBD by bid</p>
      </div>
      
      <div className="service">
        <h3>Packing</h3>
        <p>We can come in and pack partial rooms or your entire house.</p>
        <p><strong>Pricing:</strong> $35/hour per person per hour – Materials and supplies at market rate</p>
      </div>

      <div className="service">
        <h3>Cleaning</h3>
        <p>We can do lite cleaning or a deep cleaning depending on needs.</p>
        <p><strong>Pricing:</strong> $35/hour per person</p>
      </div>

      <div className="service">
        <h3>Organizing</h3>
        <p>We will come in and completely structure and organize closets with appropriate bins and hangers.</p>
        <p><strong>Pricing:</strong> $35/hour plus supplies</p>
      </div>

      <div className="service">
        <h3>Lite Staging</h3>
        <p>This would be bringing in pillows, bedding, accessories, and greens.</p>
        <p><strong>Pricing:</strong> TBD by bid</p>
      </div>

      <div className="service">
        <h3>Full Staging</h3>
        <p>This is if you need large furniture brought in.</p>
        <p><strong>Pricing:</strong> TBD by bid</p>
      </div>
    </section>
  );
};

export default Services;
