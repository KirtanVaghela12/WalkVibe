// src/pages/BrandListPage.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BrandListPage.css';

import nikeLogo from '../assets/nike1.avif';
import pumaLogo from '../assets/puma1.avif';
import jordanLogo from '../assets/jordan1.avif';
import skecLogo from '../assets/skec1.webp';
import adidasLogo from '../assets/adidas1.avif';

const brands = [
  { name: 'Nike', image: nikeLogo },
  { name: 'Puma', image: pumaLogo },
  { name: 'Jordan', image: jordanLogo },
  { name: 'Skechers', image: skecLogo },
  { name: 'Adidas', image: adidasLogo },
];

const BrandListPage = () => {
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
            to={`/brand/${brand.name}`}
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

export default BrandListPage;
