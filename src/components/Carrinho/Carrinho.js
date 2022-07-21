import React, { useState, useEffect } from "react";
// import "../Styles/Carrinho.css";
import { BotaoAddItem, ContePai, ImagemItens, Itens, NomeItem, ImagemENome, Preco, Remover, FraseDoTotal, ValorTotal, ConteTotal } from "./styled";


const Carrinho = ({ carrinho, setCarrinho, handleChange }) => {
  const [preco, setPreco] = useState(0);

  const handleRemover = (id) => {
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
    <ContePai>
      {carrinho.map((item) => (
        <Itens key={item.id}>
          <ImagemENome>
            <ImagemItens src={item.foto} alt="" />
            <NomeItem>{item.nome}</NomeItem>
          </ImagemENome>
          <div>
            <BotaoAddItem onClick={() => handleChange(item, 1)}>+</BotaoAddItem>
            <BotaoAddItem>{item.qtd}</BotaoAddItem>
            <BotaoAddItem onClick={() => handleChange(item, -1)}>-</BotaoAddItem>
          </div>
          <div>
            <Preco>R${item.preco},00</Preco>
            <Remover onClick={() => handleRemover(item.id)}>Remover</Remover>
          </div>
        </Itens>
      ))}
      <ConteTotal>
        <FraseDoTotal>Preço total do seu carrinho</FraseDoTotal>
        <ValorTotal>R${preco},00</ValorTotal>
      </ConteTotal>
    </ContePai>
  );
};

export default Carrinho;