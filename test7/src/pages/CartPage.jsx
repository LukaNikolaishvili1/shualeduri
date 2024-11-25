import React, { useState } from "react";
import "./CartPage.css";

const CartPage = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Stylish Shoes", price: 100 },
  ]);

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)} className="remove-btn">
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
