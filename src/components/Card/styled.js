import styled from "styled-components";


export const Cardes = styled.div`
width: 85%;
margin: 2vh auto;
background-color: rgba(0, 0, 0,1);
//padding: 10px;
//border-radius: 10px;
 // box-shadow: 
    //5px 5px 12px 0 rgba(0, 0, 0, 0.10),
    //-1px -1px 16px 0 rgba(255, 255, 255, 0.2)
//  box-shadow: -1px 2px 24px 0 rgba(0, 0, 0, 0.2),
//    2px -1px 24px 0 rgba(255, 255, 255, 0.5);
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
// border-radius: 5px;
outline: none;
cursor: pointer;
//box-shadow: -1px -1px 6px 0 rgba(0, 0, 0, 0.2),
//    2px 2px 6px 0 rgba(255, 255, 255, 0.5);

:active{
    background-color: skyblue;
}
`     