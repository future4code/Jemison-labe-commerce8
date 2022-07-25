import React from 'react'
import styled from 'styled-components';

// direcionar esses itens para o arquivo único de styled components (não esquecer do export)

const Conteiner = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2vh 0;
`;

const Titulo = styled.h3`
  margin: 0 0 10px 0;
`;

const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;

  label {
     //screen reader only
     position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
  }

  input {
    padding: 10px;
    border-radius: 10px;
    border: 2px solid gray;
  }

  input:hover {
    border: 2px solid #87ceeb;
    cursor: pointer;
  }

  input[type=number]{
    -moz-appearance: textfield;
};

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }

  select{
    padding: 10px;
    border-radius: 10px;
    border: 2px solid gray;
    margin: 1vw 0vw 0vw 0vw;
  }

  select:hover{
    border: 2px solid #87ceeb;
    cursor: pointer;
  }

  input:focus {
    border: 2px solid #87ceeb;
    outline: none;

  }
`


export const Filtro = (props) => {

  return (
    <Conteiner>
      <Titulo>Busca</Titulo>
      <Formulario>
        <label>Filtrar por Nome do Produto</label>
        <input type='text' value={props.inputNome} onChange={props.handleInputNome} placeholder='por Nome do Produto'/>
        <label>Filtrar por Valor Mínimo</label>
        <input type='number' value={props.inputMinValor} onChange={props.handleInputMinValor} placeholder='por Valor Mínimo'/>
        <label>Filtrar por Valor Máximo</label>
        <input type='number' value={props.inputMaxValor} onChange={props.handleInputMaxValor} placeholder='por Valor Máximo' />
        <select
        nome='ordenacao'
        value={props.ordenacao}
        onChange = {props.handleOrdenacao}
        >
          <option value={'crescente'}>Crescente</option>
          <option value={'decrescente'}>Decrescente</option>
        </select>
      </Formulario>
    </Conteiner>
  )
}
