import React from "react";
import lista from "../MockDados/MockDados";
import Cards from "../Card/Card";
import "../Styles/Produtos.css";

const Produtos = (props) => {
  return (
    <section>
      {lista.filter((item)=>{
          return item.nome.includes(props.inputNome)
        }).filter((item)=>{
          return item.preco >= props.inputMinValor
        }).filter((item)=>{
          return item.preco <= props.inputMaxValor
        }).map((item) => (
        <Cards key={item.id} item={item} handleClick={props.handleClick} />
      ))}
    </section>
  );
};

export default Produtos;