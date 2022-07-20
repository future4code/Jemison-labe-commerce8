import React from "react";
import lista from "../MockDados/MockDados";
import Cards from "../Card/Card";
import { ContPai } from "./styled";

const Produtos = ({ handleClick }) => {
  return (
    <ContPai>
      {lista.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </ContPai>
  );
};

export default Produtos;