// src/pages/CartPage.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './cartpage.css';

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, clearItem, getTotalPrice } = useCart();
  const [isCODSelected, setIsCODSelected] = useState(false);

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);

  const handlePlaceOrder = () => {
    if (isCODSelected) {
      toast.success('🎉 Order placed successfully with Cash on Delivery!');
    } else {
      toast.error('⚠️ Please select a payment method.');
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Your Cart</h2>

      <ToastContainer position="top-center" autoClose={3000} />

      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-item-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-img" />
                <div className="cart-item-details">
                  <h4 className="cart-title">{item.name}</h4>
                  <p className="cart-text">{item.price}</p>
                  <p className="cart-text">Quantity: {item.quantity}</p>
                  <div className="cart-buttons">
                    <button onClick={() => removeFromCart(item.id)} className="cart-btn">-</button>
                    <button onClick={() => addToCart(item)} className="cart-btn">+</button>
                    <button onClick={() => clearItem(item.id)} className="cart-remove-btn">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">Total: {formatPrice(getTotalPrice())}</div>

          <div className="cod-wrapper">
            <label>
              <input
                type="checkbox"
                checked={isCODSelected}
                onChange={() => setIsCODSelected(!isCODSelected)}
              />
              Cash on Delivery (COD)
            </label>

            {isCODSelected && (
              <div className="cod-confirm">
                You have selected <strong>Cash on Delivery</strong> as your payment method.
              </div>
            )}
          </div>

          <div className="place-order-btn-wrapper">
            <button onClick={handlePlaceOrder} className="place-order-btn">
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;


// const containerStyle = {
//   padding: '30px',
//   backgroundColor: '#f9f9f9',
//   minHeight: '100vh',
// };

// const headingStyle = {
//   fontSize: '2rem',
//   marginBottom: '20px',
// };

// const emptyTextStyle = {
//   fontSize: '1.2rem',
//   color: '#666',
// };

// const cartListStyle = {
//   display: 'grid',
//   gap: '20px',
// };

// const itemStyle = {
//   display: 'flex',
//   gap: '20px',
//   alignItems: 'center',
//   padding: '15px',
//   border: '1px solid #ccc',
//   borderRadius: '10px',
//   backgroundColor: '#fff',
// };

// const imgStyle = {
//   width: '100px',
//   height: '100px',
//   objectFit: 'cover',
//   borderRadius: '8px',
//   border: '1px solid #ddd',
// };

// const titleStyle = {
//   margin: '0 0 5px',
// };

// const textStyle = {
//   margin: '0 0 10px',
// };

// const buttonGroupStyle = {
//   display: 'flex',
//   gap: '10px',
// };

// const buttonStyle = {
//   padding: '6px 12px',
//   borderRadius: '4px',
//   border: '1px solid #ccc',
//   cursor: 'pointer',
//   backgroundColor: '#fff',
// };

// const removeBtn = {
//   padding: '6px 12px',
//   borderRadius: '4px',
//   border: 'none',
//   backgroundColor: '#ff4d4f',
//   color: 'white',
//   cursor: 'pointer',
// };

// const totalStyle = {
//   fontSize: '20px',
//   fontWeight: 'bold',
//   textAlign: 'right',
// };

// const codWrapper = {
//   marginTop: '25px',
//   backgroundColor: '#f0f0f0',
//   padding: '12px',
//   borderRadius: '8px',
// };

// const codConfirm = {
//   marginTop: '10px',
//   padding: '10px',
//   backgroundColor: '#e9ffe9',
//   borderLeft: '4px solid green',
//   color: '#155724',
//   fontSize: '14px',
// };

// const placeOrderWrapper = {
//   textAlign: 'right',
//   marginTop: '20px',
// };

// const placeOrderBtn = {
//   padding: '10px 20px',
//   backgroundColor: '#333',
//   color: '#fff',
//   border: 'none',
//   borderRadius: '6px',
//   fontSize: '16px',
//   cursor: 'pointer',
// };

// export default CartPage;
