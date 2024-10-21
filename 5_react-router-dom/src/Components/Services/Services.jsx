import React from "react";
import "./Services.css"
const Services = () => {
  return (
    <main>
      <section class="services">
        <h1>Our Services</h1>

        <div class="service-item">
          <h2>Service One</h2>
          <p>
            Comprehensive consultation services tailored to meet your unique
            needs. Our experts will guide you through every step.
          </p>
        </div>

        <div class="service-item">
          <h2>Service Two</h2>
          <p>
            High-quality product development and design services. We bring your
            ideas to life with innovative solutions.
          </p>
        </div>

        <div class="service-item">
          <h2>Service Three</h2>
          <p>
            Marketing strategies that work. Our team creates impactful campaigns
            to elevate your brand and reach your audience.
          </p>
        </div>

        <div class="service-item">
          <h2>Service Four</h2>
          <p>
            Ongoing support and maintenance to ensure your solutions continue to
            perform optimally. We're here for you every step of the way.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Services;
