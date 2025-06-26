// src/pages/BrandListPageWomen.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BrandListPage.css'; // Reuse same CSS

// ✅ Women brand preview images
import womenNike from '../assets/women_nike1.avif';
import womenPuma from '../assets/women_puma1.avif';
import womenJordan from '../assets/women_jordan1.avif';
import womenSkec from '../assets/women_skec1.jpg';
import womenAdidas from '../assets/women_adidas1.avif';

const brands = [
  { name: 'Nike', image: womenNike },
  { name: 'Puma', image: womenPuma },
  { name: 'Jordan', image: womenJordan },
  { name: 'Skechers', image: womenSkec },
  { name: 'Adidas', image: womenAdidas },
];

const BrandListPageWomen = () => {
  const navigate = useNavigate();

  return (
    <div className="brand-list-container">
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

      <h2>Select a Brand</h2>

      <div className="brand-grid">
        {brands.map((brand) => (
          <Link
            to={`/brand-women/${brand.name.toLowerCase()}`}
            className="brand-card"
            key={brand.name}
          >
            <img src={brand.image} alt={brand.name} />
            <p>{brand.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandListPageWomen;
