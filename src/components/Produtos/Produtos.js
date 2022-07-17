import React, { useState } from "react";
import lista from "./components/MockDados/MockDados";
import Cards from "./components/Card/Card";
import "../Styles/Produtos.css";

const Produto = ({ handleClick }) => {
  return (
    <section>
      {lista.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Produto;