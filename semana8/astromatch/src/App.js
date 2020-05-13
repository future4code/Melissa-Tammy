import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from 'styled-components'

import CardPessoa from './components/CardPessoa'
import BotoesMatch from './components/BotoesMatch';
import PaginaMatches from './components/PaginaMatches';

import SettingsIcon from '@material-ui/icons/Settings';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { red } from '@material-ui/core/colors';


import './App.css';

const AppContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  height:100vh;
  width:100vw;
`

const Header = styled.div`
  box-shadow: 0 0.07vw 50px #dfdfdf, inset 0px 0vw 8px 0px #0000002e;
  border-bottom: 1px solid #0000001e;
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
  height: 10%;
  padding:1vw;
  padding-left: 2vw;
  padding-right: 2vw;
`

const Main = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  height:90%;
  width:100%;
  padding-top:5vw;
  background-color: #e6e6e64d;
  box-shadow: inset 0 -53px 114px #ababab4d;
`

const MeltchHeader = styled.h1`

`

const BotaoMostraMatchs = styled.button`
  border:none;
  background-color:transparent;
  :focus{
    outline:none
  }
`

const App = (props) => {

  const [perfilExibido, setPerfilExibido] = useState([])
  const [listaDeMatches, setListaDeMatches] = useState([])
  const [statusProximoPerfil, setStatusProximoPerfil] = useState(false)
  const [statusMostraMatchs, setStatusMostraMatchs] = useState(false)

  const proximoPerfil = () => {
    setStatusProximoPerfil(!statusProximoPerfil)
  }

  const mostraMatchs = () => {
    setStatusMostraMatchs(!statusMostraMatchs)
  }

  useEffect(() => {
    axios
      .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/melissa-melonio-julian/person')
      .then(response => {
        setPerfilExibido(response.data.profile)
        console.log(perfilExibido)
      })
      .catch(error => {
        console.log(error)
      })

      axios
      .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/melissa-melonio-julian/matches')
      .then(response => {
          setListaDeMatches(response.data.matches)
      })
      .catch(error => {
      })

  }, [statusProximoPerfil])

  return (
    <AppContainer>
      <Header>
        <SettingsIcon
          color="action" />
        <MeltchHeader>Meltch</MeltchHeader>
        <BotaoMostraMatchs
          onClick={mostraMatchs}>
          <WhatshotIcon
            style={{ color: red[500] }} />
        </BotaoMostraMatchs>
      </Header>
      {statusMostraMatchs ? (
        <PaginaMatches
        matches={listaDeMatches}
        />
      ) : (
          <Main>
            <CardPessoa perfil={perfilExibido} />
            <BotoesMatch
              perfil={perfilExibido}
              proximo={proximoPerfil} />
          </Main>
        )

      }

    </AppContainer>
  );
}

export default App;
