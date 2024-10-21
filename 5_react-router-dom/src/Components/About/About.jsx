import React from "react";
import "./About.css"

const About = () => {
  return (
    <main>
      <section className="about">
        <h1>About Us</h1>
        <p>
          We are a dedicated team committed to providing top-notch services to
          our clients. Our mission is to deliver exceptional value and exceed
          expectations.
        </p>

        <h2>Our History</h2>
        <p>
          Founded in 2020, we started with a small team and a big dream. Over
          the years, we have grown and adapted to meet the changing needs of our
          customers.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Satisfaction</li>
          <li>Collaboration</li>
        </ul>

        <h2>Meet the Team</h2>
        <div className="team-member">
          <h3>Jane Doe</h3>
          <p>CEO & Founder</p>
        </div>
        <div className="team-member">
          <h3>John Smith</h3>
          <p>Chief Technology Officer</p>
        </div>
        <div className="team-member">
          <h3>Emily Johnson</h3>
          <p>Head of Marketing</p>
        </div>
      </section>
    </main>
  );
};

export default About;
