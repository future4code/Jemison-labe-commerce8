import React from "react";
import lista from "../MockDados/MockDados";
import Cards from "../Card/Card";
import "../Styles/Produtos.css";

const Produtos = ({ handleClick }) => {
  return (
    <section>
      {lista.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Produtos;