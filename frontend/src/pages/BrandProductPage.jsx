// src/pages/BrandProductPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { menShoes } from '../data/menShoeData';
import './CategoryPage.css';

const BrandProductPage = () => {
  const { brand } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const brandShoes = menShoes.filter(
    (shoe) => shoe.brand.toLowerCase() === brand.toLowerCase()
  );

  return (
    <div className="category-container">
      {/* ✅ Centered Back Button */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
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

      <h2 style={{ textAlign: 'center' }}>{brand} Shoes</h2>

      <div className="product-grid">
        {brandShoes.map((shoe) => (
          <div key={shoe.id} className="product-card">
            <img src={shoe.image} alt={shoe.name} />
            <h4>{shoe.name}</h4>
            <p>{shoe.brand}</p>
            <p className="price">{shoe.price}</p>
            <button onClick={() => addToCart(shoe)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandProductPage;
