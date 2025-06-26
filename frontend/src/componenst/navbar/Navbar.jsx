// src/components/navbar/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.jpeg'; // ✅ Your uploaded logo
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="WalkVibe Logo" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/" state={{ resetTopview: true }}>Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li className="cart-link-wrapper">
          <Link to="/cart" className="cart-text-link">
            Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
