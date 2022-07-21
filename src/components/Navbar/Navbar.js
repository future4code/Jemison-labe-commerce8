import React from "react";
import { Cabecalho, Carrinho, IconeDoCarrinho, NomeDoSite } from "./styled";

const Navbar = ({ setCompra, size }) => {
  return (

      <Cabecalho>
        <NomeDoSite onClick={() => setCompra(true)}>
          E-commerce
        </NomeDoSite>
        <Carrinho onClick={() => setCompra(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <IconeDoCarrinho>{size}</IconeDoCarrinho>
        </Carrinho>
      </Cabecalho>

  );
};

export default Navbar;