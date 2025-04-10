import React from "react";
import "./Testimonials.css"; // Import the CSS file for styling

const testimonialsData = [
  {
    quote: "Thank you for this accounting. You were wonderful with everything! From the staging to selling our things, to overseeing our move, you gave us peace of mind during a stressful time...",
    author: "Dave & Kristina"
  },
  {
    quote: "My wife and I had the pleasure of working with Tami and her team in preparation for listing our home... She exhibited a high degree of care for her work and our home...",
    author: "Ignacio A."
  },
  {
    quote: "I highly recommend Tami's services, whether to prep a home for sale or assist with relocation. She has a great network of resources that are responsive and flexible...",
    author: "R. Ignacio"
  }
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>"{testimonial.quote}"</p>
            <h4>— {testimonial.author}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
