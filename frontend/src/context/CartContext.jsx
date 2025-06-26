// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Add item or increase quantity
  const addToCart = (product) => {
    const existing = cartItems.find((item) => item.id === product.id);

    if (existing) {
      const updated = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updated);
      toast.success('✅ Quantity increased', { position: 'top-center' });
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      toast.success('🛒 Item added to cart', { position: 'top-center' });
    }
  };

  // ✅ Remove one quantity or delete item if qty = 1
  const removeFromCart = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (!item) return;

    if (item.quantity > 1) {
      const updated = cartItems.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity - 1 } : i
      );
      setCartItems(updated);
      toast.info('➖ Quantity decreased', { position: 'top-center' });
    } else {
      const filtered = cartItems.filter((i) => i.id !== id);
      setCartItems(filtered);
      toast.warn('❌ Item removed from cart', { position: 'top-center' });
    }
  };

  // ✅ Remove item directly
  const clearItem = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
    toast.warn('🗑️ Item removed', { position: 'top-center' });
  };

  // ✅ Calculate total price (handle ₹ or strings)
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(
        String(item.price).replace(/[^\d]/g, '')
      ) || 0;
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearItem,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ✅ Use inside components
export const useCart = () => useContext(CartContext);
