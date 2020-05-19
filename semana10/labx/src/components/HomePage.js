import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import HeaderPublic from './HeaderPublic';

const Banner = styled.img`
  width:100vw;
  height:70vh;
  filter: brightness(0.5);
  transition:1s;
  :hover{
    filter: brightness(1)
  }
`
const HomePageContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`

const TextImg = styled.h1`
  width:50%;
  text-align: center;
  font-size: 7vw;
  font-weight: bold;
  text-transform: uppercase;
  position: absolute;
  font-family: 'Montserrat';
  top: 15vw;
  color: white;
`

const HomePage = (props) => {
  const history = useHistory();

  const goToListTripPage = () =>{
    history.push("/trips/listTripsPage");

  }

    return (
      <HomePageContainer>
        <HeaderPublic></HeaderPublic>
        <Banner src='https://4.bp.blogspot.com/-EFQEXmmdBXo/XKG5Noll6xI/AAAAAAAABGw/2epUYa2fuEUzCK0Q9J4ncAr88cG5Q2XSQCKgBGAs/w3840-h1080-p-k-no-nu/space-astronaut-sci-fi-uhdpaper.com-4K-111.jpg'></Banner>
        <TextImg>to infinity and beyond</TextImg>
        <h1 onClick={goToListTripPage}>Que viagem você procura?</h1>
      </HomePageContainer>
    );
  }
  export default HomePage;