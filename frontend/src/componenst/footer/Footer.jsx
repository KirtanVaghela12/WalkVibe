import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section about">
        <h3>About WalkVibe</h3>
        <p>
          At <strong>WalkVibe</strong>, we bring you stylish and comfortable footwear crafted for every walk of life. Quality shoes, affordable prices, and doorstep delivery!
        </p>
      </div>

      <div className="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/about">About WalkVibe</a></li>
          <li><a href="/categories">Shop Shoes</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/faq">FAQs</a></li>
        </ul>
      </div>

      <div className="footer-section contact">
        <h3>Contact Us</h3>
        <p>Email: support@walkvibe.com</p>
        <p>Phone: +91-9586226183</p>
        <p>Address: Surat, Gujarat, India</p>
      </div>
    </footer>
  );
};

export default Footer;
