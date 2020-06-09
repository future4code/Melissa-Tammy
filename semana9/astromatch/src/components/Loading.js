import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import CardPessoa from './CardPessoa'
import BotoesMatch from './BotoesMatch';
import Header from './Header'

import '../App.css'

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  height:100vh;
  width:100vw;
  overflow: hidden;

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

const Loading = (props) => {


    return (
        <Container>
            <Header
                pagina={props.mostraPagina}
                mostraMatchs={props.botaoMatches}
                mostraConfig={props.botaoConfig} />
            <Main>
                <h1>CARREGANDO...</h1>
            </Main>
        </Container>
    )
}
export default Loading;
