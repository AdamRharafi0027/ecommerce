import { useState } from "react";
import './Cart.css';

const Cart = ({ cart, removeFromCart }) => {
  const [message, setMessage] = useState("");
  const totalPrice = cart.reduce((total, prod) => total + prod.price, 0);

  const handleRemove = (index) => {
    removeFromCart(index);
    setMessage("Removed successfully!"); 
    setTimeout(() => setMessage(""), 2000); 
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {message && <div className="message">{message}</div>}

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((prod, index) => (
            <div key={index} className="cart-item">
              <img src={prod.image} alt={prod.title} className="cart-image" />
              <div className="cart-details">
                <h3>{prod.title}</h3>
                <p>${prod.price}</p>
                <button className="remove-btn" onClick={() => handleRemove(index)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="cart-footer">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
