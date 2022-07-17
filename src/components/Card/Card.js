import React from "react";

const Cards = ({ item, handleClick }) => {
  const { id, nome, preco, foto } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={foto} alt="" />
      </div>
      <div className="descricao">
        <p>{id}</p>
        <p>{nome}</p>
        <p>Preço - {preco}R$</p>
        <button onClick={() => handleClick(item)}>Adicionar ao carrinho</button>
      </div>
    </div>
  );
};

export default Cards;