
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SettingsIcon from '@material-ui/icons/Settings';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { green } from '@material-ui/core/colors';

import '../App.css'

const HeaderContainer = styled.div`
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

const MeltchHeader = styled.h1`

`

const BotaoEsquerdo = styled.button`
  border:none;
  background-color:transparent;
  :focus{
    outline:none
  }
`

const BotaoDireito = styled.button`
  border:none;
  color:red;
  background-color:transparent;
  :focus{
    outline:none
  }
`


const Header = (props) => {
    console.log(props.pagina)
    let iconeDireito
    let iconeEsquerdo
    switch (props.pagina) {
        case 'exibePaginaMatches':
            iconeDireito = <WhatshotIcon className='white'/>
            iconeEsquerdo = <ArrowBackIcon onClick={props.botaoVoltar} />
            break;
        case 'exibePaginaPerfis':
            iconeDireito = <WhatshotIcon onClick={props.mostraMatchs}/>
            iconeEsquerdo = <SettingsIcon onClick={props.mostraConfig}/>
            break;
        case 'exibePaginaConfiguracoes':
            iconeDireito = <WhatshotIcon className='white'/>
            iconeEsquerdo = <ArrowBackIcon onClick={props.botaoVoltar} />
            break;
    }

    return (
        <HeaderContainer>
            <BotaoEsquerdo>{iconeEsquerdo}</BotaoEsquerdo>
            <MeltchHeader>Meltch</MeltchHeader>
            <BotaoDireito>{iconeDireito}</BotaoDireito>
        </HeaderContainer>
    )
}
export default Header;
