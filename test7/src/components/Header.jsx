import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="header">
      <div className="header-logo">E-Shop</div>
      <div className={`header-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <Link to="/" className="header-link">Products</Link>
        <Link to="/cart" className="header-link">Cart</Link>
      </div>
      <button className="header-hamburger" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? "✖" : "☰"}
      </button>
    </nav>
  );
};

export default Header;
