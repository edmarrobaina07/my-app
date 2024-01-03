import styled from 'styled-components'
import Baground from './assets/background1.svg'

export const Container = styled.div`
background: url(${Baground});
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

height: 170vh;

`;

export const Image = styled.img`
margin-top: 30px;

`;

export const ContainerItens = styled.div`
background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
border-radius: 61px 61px 0px 0px;
padding: 50px 37px;

display: flex;
flex-direction: column;
height: 200vh;

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

export const InputLabel = styled.p`
font-family: Roboto;
font-size: 18px;
font-weight: 700;
line-height: 22px;
letter-spacing: -0.40799999237060547px;
text-align: left;
color: #ffff;
margin-left: 25px;

`;

export const Input = styled.input`
box-shadow: 0px 4px 4px 0px #00000040;
border-radius: 14px;
background: rgba(255, 255, 255, 0.6);
width: 342px;
height: 57px;
border: none;
outline: none;
padding-left: 25px;
margin-bottom: 34px;
font-family: Roboto;
font-size: 20px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0px;
text-align: left;
color: #ffff;


`;

export const Button = styled.button`
background: #000000CC;
width: 342px;
height: 74px;
border-radius: 14px;
border: none;
font-family: Roboto;
font-size: 17px;
font-weight: 700;
line-height: 28px;
letter-spacing: 0px;
color: #ffff;
cursor: pointer;

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

