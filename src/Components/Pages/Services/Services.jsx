import './Services.css';
import { Truck, ShieldCheck, Headset, CreditCard } from 'react-bootstrap-icons';

const Services = () => {
  return (
    <section className="services-container">
      <h1>Why Shop With <span>Us?</span></h1>
      <p className="services-intro">
        Discover the benefits of shopping with us. We provide the best services to enhance your shopping experience.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <Truck className="service-icon" />
          <h2>Fast & Free Shipping</h2>
          <p>Enjoy quick and free shipping on all orders with no extra charges.</p>
        </div>

        <div className="service-card">
          <ShieldCheck className="service-icon" />
          <h2>Secure Payment</h2>
          <p>Your transactions are 100% secure with our encrypted payment system.</p>
        </div>

        <div className="service-card">
          <Headset className="service-icon" />
          <h2>24/7 Customer Support</h2>
          <p>Our support team is available around the clock to assist you.</p>
        </div>

        <div className="service-card">
          <CreditCard className="service-icon" />
          <h2>Easy Returns</h2>
          <p>Not satisfied? Return your product within 30 days with no hassle.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
