import React from "react";
import { Cardes, BotaoCard, Preco, Identificacao, Image, Nome } from "./styled";

const Cards = ({ item, handleClick }) => {
  const { id, preco, foto, nome } = item;
  return (
    <Cardes>
      <div>
        <Image src={foto} alt="" />
      </div>
      <div>
        <Identificacao>{id}</Identificacao>
        <Nome>{nome}</Nome>
        <Preco>R$ {preco},00</Preco>
        <BotaoCard onClick={() => handleClick(item)}>Adicionar ao carrinho</BotaoCard>
      </div>
    </Cardes>
  );
};

export default Cards;