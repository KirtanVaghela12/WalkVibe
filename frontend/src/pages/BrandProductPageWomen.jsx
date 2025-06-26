// src/pages/BrandProductPageWomen.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { womenShoes } from '../data/womenShoeData';
import './CategoryPage.css';

const BrandProductPageWomen = () => {
  const { brand } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const filteredShoes = womenShoes.filter(
    (item) => item.brand.toLowerCase() === brand.toLowerCase()
  );

  return (
    <div className="category-page">
  {/* ✅ Centered Back Button with extra top spacing */}
  <div style={{ textAlign: 'center', margin: '60px 0 30px' }}>
    <button
      onClick={() => navigate(-1)}
      style={{
        padding: '10px 20px',
        borderRadius: '8px',
        backgroundColor: '#333',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
      }}
    >
      ← Back
    </button>
  </div>

  <h2 className="section-title">{brand} Shoes</h2>

  <div className="product-grid">
    {filteredShoes.map((item) => (
      <div key={item.id} className="product-card">
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>₹{item.price}</p>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    ))}
  </div>
</div>

  );
};

export default BrandProductPageWomen;
