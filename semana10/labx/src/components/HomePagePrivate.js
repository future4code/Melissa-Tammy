import React, { useState, useEffect } from 'react';
import axios from "axios"
import '../App.css'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import HeaderPrivate from './HeaderPrivate';

const HomePageContainer = styled.div`
  width:100vw;
  height: 100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
`

const TextImg = styled.h1`
  width:100vw;
  height:70vh;
  padding-left:5vw;
  padding-right:5vw;
  text-align: center;
  font-size: 7vw;
  font-weight: bold;
  text-transform: uppercase;
  display:flex;
  justify-content:center;
  align-items:center;
  font-family: 'Montserrat';
  color: white;
`
const BotaoMostrarMais = styled.button`
  border: 2px black solid;
  width:40%;
  min-height:60px;
  padding:1vw;
  text-align: center;
  font-size: 1.5vw;
  font-weight: bold;
  text-transform: uppercase;
  transition:0.7s;
  :hover{
    border: 2px #009085 solid;
    color:#009085;
    background-color: #0000003b;
  }
`

const Foguete = styled.img`
position:relative;
top:400px;
left:-400px;
`

const HomePagePrivate = (props) => {
  const history = useHistory();
  const goToTripDetailsPage = () =>{
    history.push("/private/details");
  }
  const goToCreateTripPage = () =>{
    history.push("/private/create");
  }
  const goToDecideCandidatePage = () =>{
    history.push("/private/decide");
  }
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      history.push("/login");
    }
  }, [history]);
    return (
      <HomePageContainer>
        <HeaderPrivate></HeaderPrivate>
        <BotaoMostrarMais onClick={goToTripDetailsPage}>Detalhes de viagens</BotaoMostrarMais>
        <BotaoMostrarMais onClick={goToCreateTripPage}>Criar viagens</BotaoMostrarMais>
        <Foguete className='foguetinho' src="https://img.icons8.com/color/96/000000/rocket.png"/>
      </HomePageContainer>
    );
  }
  export default HomePagePrivate;