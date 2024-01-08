import styled from 'styled-components'

import Baground from '../../assets/background.svg'

export const Container = styled.div`
background: url(${Baground});
background-size: cover;
 

display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

height: 100%;
min-height: 100vh;

`;

export const Image = styled.img`
margin-top: 30px;

`;

export const ContainerItens = styled.div`
background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
border-radius: 61px 61px 0px 0px;
padding: 50px 37px;
backdrop-filter: blur(45px);

display: flex;
flex-direction: column;
height: 100%;
min-height: calc(100vh - 170px);

`;


export const H1 = styled.h1 `
font-family: Roboto;
font-size: 34px;
font-weight: 700;
line-height: 40px;
letter-spacing: 0px;
text-align: center;
margin-bottom: 80px;
color: #ffff;

`;

export const Button = styled.button`
background: transparent;
width: 342px;
height: 74px;
border-radius: 14px;
border: 1px solid #ffff;
font-family: Roboto;
font-size: 17px;
font-weight: 700;
line-height: 28px;
letter-spacing: 0px;
color: #ffff;
cursor: pointer;
margin-top: 120px;

display: flex;
align-items: center;
justify-content: center;


&:hover {
    opacity: 0.7;
}

&:active {
    opacity: 0.5;
}

`;

export const User = styled.li `
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 20px;
box-shadow: 0px 4px 4px 0px #00000040;
border-radius: 14px;
background: rgba(255, 255, 255, 0.6);
width: 342px;
height: 57px;
border: none;
outline: none;

p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #ffff;
}

button {
    background: none;
    border: none;
    cursor: pointer;
}



`

