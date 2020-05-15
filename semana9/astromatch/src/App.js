import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from 'styled-components'

import CardPessoa from './components/CardPessoa'
import PaginaMatches from './components/PaginaMatches';
import PaginaPerfis from './components/PaginaPerfis'
import PaginaConfiguracoes from './components/PaginaConfiguracoes'



import './App.css';

const AppContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  height:100vh;
  width:100vw;
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


const App = (props) => {

  const [perfilExibido, setPerfilExibido] = useState([])
  const [listaDeMatches, setListaDeMatches] = useState([])
  const [statusProximoPerfil, setStatusProximoPerfil] = useState(false)
  const [statusMostraPagina, setStatusMostraMatchs] = useState('exibePaginaPerfis')

  const FunctionProximoPerfil = () => {
    setStatusProximoPerfil(!statusProximoPerfil)
  }

  const onClickBotaoMatches = () => {
    setStatusMostraMatchs('exibePaginaMatches')
  }

  const onClickBotaoVoltar = () => {
    setStatusMostraMatchs('exibePaginaPerfis')
  }

  const onClickBotaoVoltarPaginaDeConfiguracoes = () => {
    setStatusMostraMatchs('exibePaginaConfiguracoes')
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


  let paginaExibida
  switch (statusMostraPagina) {
    case 'exibePaginaMatches':
      paginaExibida =
        <PaginaMatches
          mostraPagina={statusMostraPagina}
          matches={listaDeMatches}
          ativaVoltar={onClickBotaoVoltar}
        />
      break;
    case 'exibePaginaPerfis':
      paginaExibida =
        <PaginaPerfis
          mostraPagina={statusMostraPagina}
          botaoMatches={onClickBotaoMatches}
          botaoConfig={onClickBotaoVoltarPaginaDeConfiguracoes}
          proximoPerfil={FunctionProximoPerfil}
          PegaPerfilExibido={perfilExibido}
        />
      break;
    case 'exibePaginaConfiguracoes':
      paginaExibida =
        <PaginaConfiguracoes 
        mostraPagina={statusMostraPagina}
        ativaVoltar={onClickBotaoVoltar}
        />
      break;

    default:

      break;
  }

  return (
    <AppContainer>
      {paginaExibida}
    </AppContainer>
  );
}

export default App;
