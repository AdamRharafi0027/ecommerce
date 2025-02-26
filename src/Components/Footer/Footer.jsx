import './Footer.css';
import { Facebook, Instagram, Twitter, Linkedin } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We provide high-quality products with a seamless shopping experience.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><Facebook /></a>
            <a href="#"><Instagram /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><Linkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} E-commerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
