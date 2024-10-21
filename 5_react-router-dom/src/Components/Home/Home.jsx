import React from "react";
import "./Home.css"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <main>
      <section className="hero">
        <h1>Welcome to My Website</h1>
        <p>
          Your one-stop solution for all your needs. Explore our services and
          get in touch!
        </p>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-item">
          <h3>Service One</h3>
          <p>Brief description of Service One.</p>
        </div>
        <div className="service-item">
          <h3>Service Two</h3>
          <p>Brief description of Service Two.</p>
        </div>
        <div className="service-item">
          <h3>Service Three</h3>
          <p>Brief description of Service Three.</p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions, feel free to <Link to="#">reach out</Link> to
          us!
        </p>
      </section>
    </main>
  );
};

export default Home;
