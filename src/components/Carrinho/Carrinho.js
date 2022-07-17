import React, { useState, useEffect } from "react";
import "../Styles/Carrinho.css";

const Carrinho = ({ carrinho, setCarrinho, handleChange }) => {
  const [preco, setPreco] = useState(0);

  const handleRemove = (id) => {
    const car = carrinho.filter((item) => item.id !== id);
    setCarrinho(car);
    handlePreco();
  };

  const handlePreco = () => {
    let selecao = 0;
    carrinho.map((item) => (selecao += item.qtd * item.preco));
    setPreco(selecao);
  };

  useEffect(() => {
    handlePreco();
  });

  return (
    <article>
      {carrinho.map((item) => (
        <div className="carrinho_box" key={item.id}>
          <div className="carrinho_img">
            <img src={item.foto} alt="" />
            <p>{item.nome}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.qtd}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.preco}</span>
            <button onClick={() => handleRemove(item.id)}>Remover</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Preço total do seu carrinho</span>
        <span>R$ - {preco}</span>
      </div>
    </article>
  );
};

export default Carrinho;