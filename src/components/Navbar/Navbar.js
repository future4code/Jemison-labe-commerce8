import React from "react";
import "../Styles/Navbar.css";

const Navbar = ({ setCompra, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="minha_compra" onClick={() => setCompra(true)}>
          E-commerce
        </span>
        <div className="carrinho" onClick={() => setCompra(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;