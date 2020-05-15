import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from 'styled-components'

import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';

import Header from './Header'

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  height:100vh;
  width:100vw;
`

const BotaoRefresh = styled(Button)`
    top:40%;
`

const PaginaConfiguracoes = (props) => {

    const onClickRefresh = () => {
        axios
            .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/melissa-melonio-julian/clear')
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <Container>
            <Header
                pagina={props.mostraPagina}
                botaoVoltar={props.ativaVoltar}
            />
            <BotaoRefresh
                variant="contained"
                color="secondary"
                onClick={onClickRefresh}>
                <RefreshIcon />
                Refresh API
            </BotaoRefresh>
        </Container>
    );
}

export default PaginaConfiguracoes;
