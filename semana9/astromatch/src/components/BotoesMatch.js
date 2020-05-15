import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import SettingsIcon from '@material-ui/icons/Settings';
import FavoriteIcon from '@material-ui/icons/Favorite';
import axios from "axios"

import '../App.css'


const BotoesContainer = styled.div`
  position: fixed;
  display:flex;
  justify-content: space-around;
  padding-bottom:10vw;
  width:100%;
  bottom:0;
`

const Yep = styled.button`
    color:green;

`

const Nope = styled.button`
color:red;

`


const BotoesMatch = (props) => {

    const [escolhaPositiva, setEscolhaPositiva] = useState(true)
    const [escolhaNegativa, setEscolhaNegativa] = useState(false)

    const onClickNeg = () =>{
        escolhePerfil(props.perfil.id, escolhaNegativa)
    }

    const onClickCoracao = () =>{
        escolhePerfil(props.perfil.id, escolhaPositiva)
    }

    const escolhePerfil = (idPerfil, escolha) => {
        const body = {
            id: idPerfil,
            choice: escolha
        }
        axios
            .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/melissa-melonio-julian/choose-person',
                body,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then(response => {
                {props.proximo()}
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <BotoesContainer className="botoes">
            <Nope className="botaoNope"
            onClick={onClickNeg}>
                <CloseIcon
                    fontSize="large"
                />
            </Nope>
            <Yep className="botaoYep"
            onClick={onClickCoracao}>
                <FavoriteIcon
                    fontSize="large"
                />
            </Yep>
        </BotoesContainer>
    );
}

export default BotoesMatch;
