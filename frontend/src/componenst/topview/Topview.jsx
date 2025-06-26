import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Topview.css';

// ✅ Images & Videos
import menCategoryImage from '../../assets/For_Men.webp';
import womenCategoryImage from '../../assets/For_Women.webp';
import offer1 from '../../assets/offer1.jpeg';
import offer2 from '../../assets/offer2.jpeg';
import offer3 from '../../assets/offer3.jpeg';
import offer4 from '../../assets/offer4.jpeg';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';

const Topview = () => {
  const { addToCart } = useCart();

  // Dummy data for offers
  const videoOffers = [
    { id: 'v1', src: video2, label: 'Limited Time', name: 'Limited Time Offer', price: '₹0' },
    { id: 'v2', src: video3, label: 'Weekend Drop', name: 'Weekend Drop Deal', price: '₹0' }
  ];

  const imageOffers = [
    { id: 'o1', src: offer1, label: '50% OFF', name: '50% OFF Offer', price: '₹999' },
    { id: 'o2', src: offer2, label: 'Buy 1 Get 1', name: 'BOGO Offer', price: '₹1299' },
    { id: 'o3', src: offer3, label: 'Mega Sale', name: 'Mega Sale', price: '₹899' },
    { id: 'o4', src: offer4, label: 'Flat ₹999', name: 'Flat ₹999 Deal', price: '₹999' }
  ];

  return (
    <div className="topview-container">
      <div className="main-flex">

        {/* ✅ Left: Men & Women Categories */}
        <div className="left-column">
          <h2 className="section-title">Shop by Category</h2>
          <div className="vertical-image-column">
            <Link to="/category/Men" className="image-wrapper">
              <img src={menCategoryImage} alt="Men" className="category-column-image" />
              <div className="image-label">Men's Shoes</div>
            </Link>
            <Link to="/category/Women" className="image-wrapper">
              <img src={womenCategoryImage} alt="Women" className="category-column-image" />
              <div className="image-label">Women's Shoes</div>
            </Link>
          </div>
        </div>

        {/* ✅ Right: Offers */}
        <div className="right-column">
          <h2 className="section-title">Hot Offers</h2>
          <div className="offer-grid">

            {/* ✅ 1. Video Offers with Add to Cart */}
            {videoOffers.map((item) => (
              <div key={item.id} className="offer-card">
                <button
                  onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, image: item.src })}
                  className="add-to-cart-btn"
                >
                  Add to Cart
                </button>
                <Link to="/offers">
                  <video
                    className="offer-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="offer-label">{item.label}</div>
                </Link>
              </div>
            ))}

            {/* ✅ 2. Image Offers with Add to Cart */}
            {imageOffers.map((item) => (
              <div key={item.id} className="offer-card">
                <button
                  onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, image: item.src })}
                  className="add-to-cart-btn"
                >
                  Add to Cart
                </button>
                <Link to="/offers">
                  <img src={item.src} alt={item.label} className="offer-image" />
                  <div className="offer-label">{item.label}</div>
                </Link>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Topview;
