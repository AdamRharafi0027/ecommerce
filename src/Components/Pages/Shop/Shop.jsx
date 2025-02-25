import "./Shop.css";
import Card from "../../Card/Card";

const Shop = ({ prods, addToCart }) => {
  return (
    <div className="shop-container">
      <h1>Shop Now</h1>
      <div className="cards">
        {prods.map((prod) => (
          <Card key={prod.id} prod={prod} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
