import React, { useState } from "react";
import Produtos from "./components/Produtos/Produtos";
import Navbar from "./components/Navbar/Navbar";
import Carrinho from "./components/Carrinho/Carrinho";

const App = () => {
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

  // useEffect(() => {
   // console.log("carrinho");
   //}, [carrinho]);

  return (
    <React.Fragment>
      <Navbar setCompra={setCompra} size={carrinho.length} />
      {compra ? (
        <Produtos handleClick={handleClick} />
      ) : (
        <Carrinho carrinho={carrinho} setCarrinho={setCarrinho} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
};

export default App;