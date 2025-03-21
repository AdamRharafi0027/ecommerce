import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Services, Contact, Cart, Header, Shop, Footer } from './Components/Pages/index';
import './App.css'
import Account from "./Components/Account/Account";

const App = () => {
  

  return (
    <>
      <Router basename="/ecommerce">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/account" element={<Account  />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
