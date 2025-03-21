import "./ProductDetails.css";
import { ArrowLeft, BagFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../Slices/CartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductDetail = () => {
  const prodDetail = useSelector((state) => state.prodDetail.ProductDetails);
  const dispatch = useDispatch();

 const [successMessage, setSuccessMessage] = useState("");
  const handleAddToCart = () => {
    dispatch(addProduct(prodDetail));
    setSuccessMessage("✅ Added to cart successfully!");
    setTimeout(() => {
      setSuccessMessage("");
    }, 500);
  };

  if (!prodDetail || Object.keys(prodDetail).length === 0) {
    return (
      <>
        <h2
        style={{
          marginBottom: "150px",
          marginTop: "250px",
          textAlign: "center",
        }}
      >
        No Product Selected
      </h2>
      <br />
      <Link
        to={"/shop"}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: '-150px',
          marginBottom: "150px",
        }}
      >
        <ArrowLeft style={{ marginRight: "5px" }} />
        Back To Shop
      </Link>
      </>
    );
  }

  return (
    <>
     <Link
        to={"/shop"}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: '170px',
          marginBottom: "-180px",
        }}
      >
        <ArrowLeft style={{ marginRight: "5px" }} />
        Back To Shop
      </Link>
      <div className="product-detail-container">
        <div className="product-image">
          <img src={prodDetail.image} alt={prodDetail.title} />
        </div>
        <div className="product-info">
          <h2 className="product-title">{prodDetail.title}</h2>
          <p className="product-price">${prodDetail.price}</p>
          <p className="product-description">{prodDetail.description}</p>
          <button
            className="addToCart"
            onClick={handleAddToCart}
          >
            <BagFill className="addCartIcon" />
          </button>
        </div>
      </div>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </>
  );
};

export default ProductDetail;
