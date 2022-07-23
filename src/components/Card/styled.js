import styled from "styled-components";


export const Cardes = styled.div`
width: 85%;
margin: 2vh auto;
background-color: rgba(0, 0, 0,1);
border-radius: 5px;
`
export const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
`;

export const Image = styled.img`
width: 100%;
border-radius: 5px;
`
export const Tag = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 2vh;
`;

export const Identificacao = styled.p`
font-weight: bold;
margin: 0;
display: none;
`

export const Nome = styled.p`
color: white;
font-weight: bold;
margin: 0 5px 0 0;
`

export const Preco = styled.p`
color: white;
margin: 0;
`

export const BotaoCard = styled.button`
width: 100%;
padding: 5px 10px;
border: none;
font-weight: bold;
background-color: skyblue;
outline: none;
cursor: pointer;

:active{
    background-color: black;
    color: white;
}
`     