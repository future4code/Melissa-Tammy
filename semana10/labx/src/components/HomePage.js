import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import HeaderPublic from './HeaderPublic';

const HomePageContainer = styled.div`
  width:100vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

const TextImg = styled.h1`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://4.bp.blogspot.com/-EFQEXmmdBXo/XKG5Noll6xI/AAAAAAAABGw/2epUYa2fuEUzCK0Q9J4ncAr88cG5Q2XSQCKgBGAs/w3840-h1080-p-k-no-nu/space-astronaut-sci-fi-uhdpaper.com-4K-111.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  margin-top: 4vh;
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