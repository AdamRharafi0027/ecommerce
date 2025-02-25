import { Link } from "react-router-dom";
import "./Header.css";
import "./Responsive.css";
import { Cart2, Search, XLg, PersonCircle } from "react-bootstrap-icons";
import { useState } from "react";

const Header = ({ cart }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const toggleActiveMenu = () => {
    setActiveMenu((prev) => !prev);
  };

  const openSearch = () => setSearchActive(true);
  const closeSearch = () => setSearchActive(false);

  return (
    <header>
      <div className="banner">
        <h4>Sign up and get 20% off your first order.</h4>
        <a href="#">Sign Up Now</a>
        <XLg className="close" />
      </div>
      <div className="header-container">
        <div className="logo">
          <Link to={"/"}>E-commerce</Link>
        </div>
        <div className={`search ${searchActive ? "active" : ""}`}>
          <XLg className="search-close" onClick={closeSearch} />
          <Search className="search-icon" />
          <input type="search" id="search" placeholder="Search" />
        </div>

        <div className="items">
          <div className="icons">
            <Search
              className="search-header-icon header-icon"
              onClick={openSearch}
            />
            <Link to={"/cart"} className="cart-icon">
              <Cart2 className="header-icon" />
              <sapn className="count">{cart.length}</sapn>
            </Link>
            <Link to="/account">
              <PersonCircle className="header-icon" />
            </Link>
          </div>

          <div className="menu-container">
            <div
              className={`menu-bars ${activeMenu ? "active" : ""}`}
              onClick={toggleActiveMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            <nav className={activeMenu ? "active" : ""}>
              <ul>
                <li>
                  <Link
                    to={"/"}
                    onClick={() => {
                      setActiveMenu(false);
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    onClick={() => {
                      setActiveMenu(false);
                    }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/shop"}
                    onClick={() => {
                      setActiveMenu(false);
                    }}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    onClick={() => {
                      setActiveMenu(false);
                    }}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/services"}
                    onClick={() => {
                      setActiveMenu(false);
                    }}
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
