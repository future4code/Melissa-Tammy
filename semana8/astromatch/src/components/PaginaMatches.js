import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: 100%;
  height:90%;
  display: flex;
  align-items: initial;
  flex-direction:column;
  border-radius: 3px;
  overflow: hidden;
  transition: all 0.5s ease 0s;
  animation: 0.5s ease 0s 1 normal forwards running none;
  background-color: #e6e6e663;;
`
const CardPessoa = styled.div`
    border-bottom: 1px grey solid;
    width:100%;
    display:flex;
    align-items:center;
    height:20%;
    padding:3%;
    box-shadow: inset 0px -7px 20px 0px #ababab8c, 
    inset 0px 7px 20px #ffffff00, 
    inset 7px 0px 20px #ffffff, 
    inset -7px 0px 20px #ffffff;

`

const Foto = styled.img`
    border-radius:500px;
    height: 18vw;
    width: 18vw;
`

const Nome = styled.h3`
    margin-left:5vw;
`

const PaginaMatches = (props) => {

    const parametro = true
    console.log(props.matches)
    return (
        <Container>
            {props.matches.map((perfil) => {
                return (
                    <CardPessoa>
                        <Foto src={perfil.photo}/>
                    <Nome>{perfil.name}</Nome>
                    </CardPessoa>
                )
            })}
        </Container>
    );
}

export default PaginaMatches;
