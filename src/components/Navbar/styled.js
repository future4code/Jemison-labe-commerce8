import styled from "styled-components";

export const Cabecalho = styled.nav`
width: 100%;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
line-height: 60px;
background-color: #87ceeb;
`
export const NomeDoSite = styled.span`
font-size: 1.5rem;
font-weight: bold;
color: black;
font-family: Arial, Helvetica, sans-serif;
cursor: pointer;
margin-left: 12vw;

    :hover {
        color: white;
        text-decoration: underline;
    }
`
export const Carrinho = styled.div`
cursor: pointer;
    :hover {
        color: white;}
`
export const IconeDoCarrinho = styled.span`
padding: 0 3px;
background-color: red;
color: white;
font-weight: bolx;
border-radius: 5px;
position: relative;
margin-right: 5vw;
`