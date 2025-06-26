// src/pages/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About WalkVibe</h1>
      <p>
        Welcome to <strong>WalkVibe</strong> — where comfort meets style, and every step makes a statement. 
        We bring you the latest in footwear fashion, with premium shoes for <strong>Men</strong>, <strong>Women</strong>, and <strong>Kids</strong>.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is simple: to empower every walk with confidence, comfort, and unmatched design.
        Whether you're running errands or turning heads at a party, WalkVibe shoes elevate your stride.
      </p>

      <h2>Why Walk With Us?</h2>
      <ul>
        <li>✔ Curated collections from top brands like Nike, Adidas, Puma, Jordan & Skechers</li>
        <li>✔ Ultra-comfortable soles & stylish finishes</li>
        <li>✔ Quick delivery across India</li>
        <li>✔ Dedicated customer service that cares</li>
      </ul>

      <h2>📍 Visit Us</h2>
      <iframe
        title="Surat Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.6981073042095!2d72.83105627487213!3d21.21008978171296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e5e546d1d3f%3A0x7e9f3c19b87b2c70!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1718614443321!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0, borderRadius: '10px', marginTop: '20px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <h2>📞 Contact Us</h2>
      <p>Email: <a href="mailto:support@walkvibe.com">support@walkvibe.com</a></p>
      <p>Phone: <a href="tel:+919586226183">+91 95862 26183</a></p>
    </div>
  );
};

export default About;
