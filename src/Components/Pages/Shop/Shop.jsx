import "./Shop.css";
import Card from "../../Card/Card";
import products from '../../../Data/Data';

const Shop = () => {
  return (
    <div className="shop-container">
      <h1>Shop Now</h1>
      <div className="cards">
        {products.map((prod) => (
          <Card key={prod.id} product={prod} />
        ))}
      </div>
        <br />
        <br />
    </div>
  );
};

export default Shop;


