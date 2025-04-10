import React from "react";
import "./PricingTable.css"; // Ensure you create this CSS file

const PricingTable = () => {
  return (
    <section id="pricing">
      <h2>Our Pricing</h2>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Pricing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Moving Services</td>
            <td>Priced per job</td>
          </tr>
          <tr>
            <td>Dump Runs</td>
            <td>Priced per job</td>
          </tr>
          <tr>
            <td>Cleaning Services</td>
            <td>Priced per job</td>
          </tr>
          <tr>
            <td>Organizing (Closets, Pantries)</td>
            <td>Priced per job</td>
          </tr>
          <tr>
            <td>General Admin Project Support</td>
            <td>$75/hour</td>
          </tr>
          <tr>
            <td>Additional Design Consultation</td>
            <td>$200/hour</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default PricingTable;
