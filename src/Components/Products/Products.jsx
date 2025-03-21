import './Products.css';
import Card from '../Card/Card';
import products from '../../Data/Data';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section className="products-container">
      <div className="products">
        <h2>Our Products</h2>
        <div className="cards">
          {products.slice(0, 4).map((prod) => (
                <Card key={prod.id} product={prod} />
          ))}
        </div>
      </div>
      <Link to="/shop">
        <button className="viewAll">View All</button>
      </Link>
    </section>
  );
};

export default Products;
