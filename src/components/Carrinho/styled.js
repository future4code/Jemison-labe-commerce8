import styled from "styled-components";

export const ContePai = styled.div`
width: 60%;
margin: 10vh auto 0 auto;
`

export const Itens = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 20px;
border-bottom: 2px solid #000;
padding-bottom: 5px;
`

export const ImagemENome = styled.div`
display: flex;
width: 400px;
`

export const ImagemItens = styled.img`
width: 75px;
border-radius: 10px;
// height: ;
`

export const NomeItem = styled.p`
font-weight: bold;
margin-left: 10px;
`

export const BotaoAddItem = styled.button`
padding: 5px 10px;
font-weight: bold;
margin-right: 5px;
`

export const Preco = styled.span`
background-color: lightgreen;
padding: 5px 10px;
border-radius: 5px;
margin-right: 10px;
`

export const Remover = styled.button`
padding: 5px 10px;
font-weight: bold;
letter-spacing: 2px;
border: none;
outline: none;
color: white;
background-color: #000;
border-radius: 5px;
cursor: pointer;

:hover{
background-color: rgb(245, 28, 61);
}
`

export const FraseDoTotal = styled.span` 
font-size: 2rem;
color: #000;
font-weight: bold;
letter-spacing: 2px;
`

export const ValorTotal = styled.div`
font-size: 2rem;
color: green;
font-weight: bold;
`

export const ConteTotal = styled.div`
display: flex;
justify-content: space-between;
`
