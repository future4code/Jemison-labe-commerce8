import React, { useState } from "react";
import Produtos from "./components/Produtos/Produtos";
import Navbar from "./components/Navbar/Navbar";
import Carrinho from "./components/Carrinho/Carrinho";
import { Filtro } from "./components/Filtro/Filtro";
import lista from "./components/MockDados/MockDados";

const App = () => {
  // código pertencente ao componente Filtro começa aqui
  const [inputNome, setInputNome] = useState('')
  const [inputMinValor, setInputMinValor] = useState(-Infinity)
  const [inputMaxValor, setInputMaxValor] = useState(Infinity)

  const handleInputNome = (e) => {
    setInputNome(e.target.value)
  }

  const handleInputMinValor = (e) => {
    setInputMinValor(e.target.value)
  }

  const handleInputMaxValor = (e) => {
    setInputMaxValor(e.target.value)
  }

  // código pertencente ao componente Filtro termina aqui

  const [compra, setCompra] = useState(true);
  const [carrinho, setCarrinho] = useState([]);

  const handleClick = (item) => {
    if (carrinho.indexOf(item) !== -1) return;
    setCarrinho([...carrinho, item]);
  };

  const handleChange = (item, d) => {
    const escolher = carrinho.indexOf(item);
    const car = carrinho;
    car[escolher].qtd += d;

    if (car[escolher].qtd === 0) car[escolher].qtd = 1;
    setCarrinho([...car]);
  };

  return (
    <React.Fragment>
      <Navbar setCompra={setCompra} size={carrinho.length} />
      <Filtro mockDeDados={lista} inputNome={inputNome} inputMinValor={inputMinValor} inputMaxValor={inputMaxValor} handleInputNome={handleInputNome} handleInputMinValor={handleInputMinValor} handleInputMaxValor={handleInputMaxValor}/>
      {compra ? (
        <Produtos inputNome={inputNome} inputMinValor={inputMinValor} inputMaxValor={inputMaxValor} handleClick={handleClick} />
      ) : (
        <Carrinho carrinho={carrinho} setCarrinho={setCarrinho} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
};

export default App;