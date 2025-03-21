import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../Slices/CartSlice"; 
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
import { useState } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.newProduct);
  const [removeMessage, setRemoveMessage] = useState("");

  const handleDeleteFromCart = (product) => {
    dispatch(deleteProduct(product)); 
    setRemoveMessage("❌ Product removed from cart!"); 

    setTimeout(() => {
      setRemoveMessage(""); 
    }, 2000);
  };


  const totalPrice = products.reduce((total, product) => total + product.price, 0);

  return (
    <>
      <div className="cart-container">
        <h2>Your Cart</h2>
        <Link
          to={"/shop"}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArrowLeft style={{ marginRight: "5px" }} />
          Back To Shop
        </Link>
        <br />

        {products.length > 0 ? (
          <div className="cart-items">
            {products.map((product, index) => (
              <div key={index} className="cart-item">
                <img
                  src={product.image}
                  alt={product.title}
                  className="cart-image"
                />
                <div className="cart-details">
                  <h3>{product.title}</h3>
                  <p>${product.price}</p>
                  <button
                    className="remove-btn"
                    onClick={() => handleDeleteFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h1 style={{ textTransform: "uppercase" }}>no item here</h1>
        )}

        {products.length > 0 && (
          <div className="cart-summary">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        )}
      </div>

      {removeMessage && <p className="remove-message">{removeMessage}</p>} 
    </>
  );
};

export default Cart;
