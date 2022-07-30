import React from "react";
import { Cardes, BotaoCard, Preco, Identificacao, Image, Nome, Tag, Flex } from "./styled";

const Cards = ({ item, handleClick }) => {
  const { id, preco, foto, nome } = item;
  return (
    <Cardes>
      <div>
        <Image src={foto} alt="" />
      </div>
      <Flex>
        <Tag>
        <Identificacao>{id}</Identificacao>
        <Nome>{nome}</Nome>
        <Preco>R${preco}</Preco>
        </Tag>
        <BotaoCard onClick={() => handleClick(item)}>Adicionar ao carrinho</BotaoCard>
      </Flex>
    </Cardes>
  );
};

export default Cards;