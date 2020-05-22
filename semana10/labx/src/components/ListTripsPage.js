import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from 'styled-components'
import HeaderPublic from './HeaderPublic';
import './BlackBody.css'
import { useHistory } from "react-router-dom";


const ListTripsPageContainer = styled.div`
  width:100vw;
  display:flex;
  flex-direction:column;

`
const MainContainer = styled.div`
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  padding:2vw;
`

const Fundo = styled.div`
  border:3px black solid;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://4.bp.blogspot.com/-EFQEXmmdBXo/XKG5Noll6xI/AAAAAAAABGw/2epUYa2fuEUzCK0Q9J4ncAr88cG5Q2XSQCKgBGAs/w3840-h1600-p-k-no-nu/space-astronaut-sci-fi-uhdpaper.com-4K-111.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position:absolute;
  filter:blur(2px);  
  height:100vh;
  width:100vw;
  z-index:-1;
`

const Titulo = styled.h1`
  width:100%;
  position: relative;
  z-index:1;
`

const CardViagem = styled.div`
  width:24%;
  border: 1px black solid;
  background-color:white;
`

const Nome = styled.h3`
 text-align:center;
 height: 3vw;
 margin-left:5%;
 margin-right:5%;
 margin-bottom:5%;
`

const Local = styled.p`
 margin-left:5%;
 margin-right:5%;
`
const Data = styled.p`
 margin-left:5%;
 margin-right:5%;
`
const Duracao = styled.p`
 margin-left:5%;
 margin-right:5%;
`

const ImgPlanet = styled.img`
  width: 100%;
`

const ListTripsPage = (props) => {

  const history = useHistory();

  const goToApply = () =>{
    history.push("/trips/apply");
  }

  const [listaViagens, setListaViagens] = useState([])
  useEffect(() => {
    axios
      .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/melissa-melonio-julian/trips')
      .then(response => {
        setListaViagens(response.data.trips)
        console.log(response.data.trips)
        console.log(listaViagens)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <ListTripsPageContainer>
      <HeaderPublic></HeaderPublic>
      <Fundo />
      <MainContainer>

        <Titulo>{listaViagens.length} VIAGENS FORAM ENCONTRADAS</Titulo>
        {listaViagens.map((viagem) => {
          return (
            <CardViagem>
              <ImgPlanet src='https://images2.minutemediacdn.com/image/upload/c_crop,h_711,w_1264,x_99,y_0/f_auto,q_auto,w_1100/v1567178616/shape/mentalfloss/screen_shot_2019-08-30_at_11.22.42_am.png'></ImgPlanet>
              <Nome>{viagem.name}</Nome>
              <Local>Local: {viagem.planet}</Local>
              <Data>Data: {viagem.date}</Data>
              <Duracao>Duração: {viagem.durationInDays} dias</Duracao>
              <button onClick={goToApply}>Inscrever-se</button>
            </CardViagem>
          )
        })
        }
      </MainContainer>
    </ListTripsPageContainer>
  );
}
export default ListTripsPage;