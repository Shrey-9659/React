import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
            <li>
              <Link to="#">Terms of Service</Link>
            </li>
            <li>
              <Link to="#">Help Center</Link>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <h4>Follow Us</h4>
          <Link to="#">Facebook</Link>
          <Link to="#">Twitter</Link>
          <Link to="#">Instagram</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
