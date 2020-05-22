import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from 'styled-components'
import HeaderPublic from './HeaderPublic';
import './BlackBody.css'
import { useHistory } from "react-router-dom";
import { useInputValue } from './hooks/useInputValue'


const ApplyToTripPageContainer = styled.div`
  width:100vw;
  display:flex;
  flex-direction:column;

`
const MainContainer = styled.div`
  display:flex;
  padding:2vw;
  justify-content: center;
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
    margin-bottom: 5%;
`

const ContainerForm = styled.div`
  width:50%;
  height: 60%;
  border-radius:10px;
  background-color:white;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items:center;
  padding:1vw;
  padding-top:2vw;
  padding-bottom:3vw;

`

const InputContainer = styled.div`
  width:80%;
  display:flex;
  flex-direction:column;
`

const InputLogin = styled.input`
  width:100%;
  display:block;
`

const LabelLogin = styled.label`
  font-size: 1em;

`

const BotaoEntrar = styled.button`
  width:80%;
  color: white;
  min-height:20px;
  min-width:95px;
  padding:0.5%;
  background-color:#009085;
  border:none;
  border: 1px white solid;
  border-radius:3px;
  font-size:1rem;
  text-transform: uppercase;
  transition: 0.7s;
  :hover{
      background-color: #004641;
      border: 1px #ffffff73 solid;
  }
`


const ApplyToTrip = (props) => {

    const history = useHistory();
    const [nome, onChangeNome] = useInputValue()
    const [idade, onChangeIdade] = useInputValue()
    const [profissao, onChangeProfissao] = useInputValue()
    const [pais, onChangePais] = useInputValue() 
    const [textoAplicacao, onChangeTextoAplicacao] = useInputValue()
    const onClickEntrar = () => {
      const body = {
        name: nome,
        age: idade,
        applicationText: textoAplicacao,
        profession: profissao,
        country: pais
    }
      axios
        .post(
          `https://us-central1-labenu-apis.cloudfunctions.net/labeX/melissa-melonio-julian/trip/${props.id}`,
          body,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        .then((response) => {
          console.log(response)
        })
        .catch((error) =>{
          console.log(error)
        })
    }

    return (
        <ApplyToTripPageContainer>
            <HeaderPublic></HeaderPublic>
            <Fundo />
            <MainContainer>
                <ContainerForm>
                    <Titulo>INSCRIÇÃO</Titulo>
                    <InputContainer>
                        <LabelLogin>Nome</LabelLogin>
                        <InputLogin placeholder={"Nome"} value={nome} onChange={onChangeNome}></InputLogin>
                    </InputContainer>
                    <InputContainer>
                        <LabelLogin >Idade</LabelLogin>
                        <InputLogin placeholder={"Idade"} value={idade} onChange={onChangeIdade} type={"number"}></InputLogin>
                    </InputContainer>
                    <InputContainer>
                        <LabelLogin >Texto para aplicação</LabelLogin>
                        <textarea placeholder={"texto"} value={textoAplicacao} onChange={onChangeTextoAplicacao} type={"text"}></textarea>
                    </InputContainer>
                    <InputContainer>
                        <LabelLogin >Profissão</LabelLogin>
                        <InputLogin placeholder={"Profissão"} value={profissao} onChange={onChangeProfissao} type={"text"}></InputLogin>
                    </InputContainer>
                    <InputContainer>
                        <LabelLogin >País</LabelLogin>
                        <select onChange={onChangePais}>
                            <option value='Brasil'>Brasil</option>
                        </select>
                    </InputContainer>
                    <BotaoEntrar onClick={onClickEntrar}>Entrar</BotaoEntrar>
                </ContainerForm>


            </MainContainer>
        </ApplyToTripPageContainer>
    );
}
export default ApplyToTrip;