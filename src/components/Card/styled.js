import styled from "styled-components";


export const Cardes = styled.div`
width: 250px;
padding: 20px;
`

export const Image = styled.img`
width: 150px;
height: 200px;
`

export const Identificacao = styled.p`
font-weight: bold;
margin: 0;
`

export const Nome = styled.p`
color: grey;
font-weight: bold;
margin: 0;
`

export const Preco = styled.p`
color: grey;
margin: 0;
`

export const BotaoCard = styled.button`
padding: 5px 10px;
border: none;
font-weight: bold;
background-color: skyblue;
outline: none;
cursor: pointer;

:active{
    background-color: red;
}
`     