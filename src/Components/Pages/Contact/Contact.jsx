import './Contact.css';
import { Envelope, Telephone, GeoAlt } from 'react-bootstrap-icons';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-container">
      <h1>Contact <span>Us</span></h1>
      <p className="contact-intro">
        Have questions? We'd love to hear from you! Reach out to us using the form below.
      </p>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-item">
            <GeoAlt className="contact-icon" />
            <p>123 Main Street, City, Country</p>
          </div>
          <div className="info-item">
            <Telephone className="contact-icon" />
            <p>+123 456 7890</p>
          </div>
          <div className="info-item">
            <Envelope className="contact-icon" />
            <p>support@ecommerce.com</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
          {submitted && <p className="success-message">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
