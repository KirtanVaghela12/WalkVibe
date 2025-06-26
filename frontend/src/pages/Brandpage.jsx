import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CategoryPage.css';

// All brand shoe images and data
import { menShoes } from '../data/menShoeData'; // We'll move your shoe data to this file

const BrandPage = () => {
  const { brandName } = useParams();
  const { addToCart } = useCart();

  const brandShoes = menShoes.filter(shoe => shoe.brand.toLowerCase() === brandName.toLowerCase());

  return (
    <div className="category-container">
      <h2>{brandName} Shoes</h2>
      <div className="product-grid">
        {brandShoes.map(shoe => (
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

export default BrandPage;
