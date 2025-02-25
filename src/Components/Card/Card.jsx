import "./Card.css";
import { StarFill, BagFill } from "react-bootstrap-icons";

const Card = ({ prod, addToCart }) => {
  return (
    <div className="card">
      <img src={prod.image} alt={prod.title} className="card-image" />
      <div className="card-content">
        <h3 className="title">{prod.title}</h3>
        <h4 className="rate">
          <StarFill className="star" /> {prod.rate}
        </h4>
        <h3 className="price">${prod.price}</h3>
        <button className="addToCart" onClick={() => addToCart(prod)}>
          <BagFill className="addCartIcon" />
        </button>
      </div>
    </div>
  );
};

export default Card;
