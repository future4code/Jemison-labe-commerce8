import React from "react";
import lista from "../MockDados/MockDados";
import Cards from "../Card/Card";
import { ContPai } from "./styled";

const Produtos = (props) => {
  return (
    <ContPai>
      {lista.filter((item)=>{
          return item.nome.includes(props.inputNome)
        }).filter((item)=>{
          return item.preco >= props.inputMinValor || props.inputMinValor === ''
        }).filter((item)=>{
          return item.preco <= props.inputMaxValor || props.inputMaxValor === ''
        }).sort((inicio, fim)=>{
          switch (props.ordenacao){
            case 'decrescente':
              return inicio.preco - fim.preco
            case 'crescente':
              return fim.preco - inicio.preco
            default:
          }
        }).map((item) => (
        <Cards key={item.id} item={item} handleClick={props.handleClick} />
      ))}
    </ContPai>
  );
};

export default Produtos;