import "./Card.css";
import { StarFill, BagFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { addProduct } from "../Slices/CartSlice";
import { useState } from "react";

const Card = ({ product }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const handleAddToCart = () => {
    dispatch(addProduct(product));
    setSuccessMessage("✅ Added to cart successfully!");
    setTimeout(() => {
      setSuccessMessage("");
    }, 500);
  };

  const { id, title, image, price, rate } = product;
  const dispatch = useDispatch();
  return (
    <>
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h3 className="title">{title}</h3>
          <h4 className="rate">
            <StarFill className="star" /> {rate}
          </h4>
          <h3 className="price">${price}</h3>
          <button className="addToCart" onClick={handleAddToCart}>
            <BagFill className="addCartIcon" />
          </button>
        </div>
      </div>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </>
  );
};

export default Card;
