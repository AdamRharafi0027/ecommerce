import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Services, Contact, Cart, Header, Shop, Products } from './Components/Pages/index';
import { useState } from "react";
import products from "./Data/Data";
import './App.css'
import Account from "./Components/Account/Account";

const App = () => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState(""); 

  const addToCart = (product) => {
    setCart([...cart, product]);
    setMessage("Added successfully!"); 
    setTimeout(() => setMessage(""), 2000); 
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    setMessage("Removed successfully!"); 
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <>
    <Router ></Router>
      <Router basename="/ecommerce">
        <Header cart={cart} />
        {message && <div className="message">{message}</div>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<Shop prods={products} addToCart={addToCart} />} />
          <Route path="/account" element={<Account  />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
