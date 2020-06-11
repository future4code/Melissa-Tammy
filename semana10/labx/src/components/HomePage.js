import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import HeaderPublic from './HeaderPublic';

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

const HomePage = (props) => {
  const history = useHistory();

  const goToListTripPage = () =>{
    history.push("/trips/listTripsPage");
  }


    return (
      <HomePageContainer>
        <HeaderPublic></HeaderPublic>
        <TextImg>to infinity and beyond</TextImg> 
        <BotaoMostrarMais onClick={goToListTripPage}>confira nossas viagens</BotaoMostrarMais>
      </HomePageContainer>
    );
  }
  export default HomePage;