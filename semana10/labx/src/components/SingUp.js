import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from 'styled-components'
import HeaderPublic from './HeaderPublic';
import { useInputValue } from './hooks/useInputValue'


const LoginPageConatiner = styled.div`
  width:100vw;
  height:100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://4.bp.blogspot.com/-EFQEXmmdBXo/XKG5Noll6xI/AAAAAAAABGw/2epUYa2fuEUzCK0Q9J4ncAr88cG5Q2XSQCKgBGAs/w3840-h1600-p-k-no-nu/space-astronaut-sci-fi-uhdpaper.com-4K-111.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const ContainerForm = styled.div`
  width:25%;
  height: 60%;
  border-radius:10px;
  background-color:white;
  position: relative;
  left:60%;
  top:10%;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items:center;
  padding:1vw;
  padding-top:3vw;
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


const Login = (props) => {

  const [email, onChangeEmail] = useInputValue()
  const [senha, onChangeSenha] = useInputValue()

  const onClickEntrar = () => {
    const body = {
      email: email,
      password: senha
    }
    axios
      .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/melissa-melonio-julian/signup',
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
    <LoginPageConatiner>
      <HeaderPublic></HeaderPublic>
      <ContainerForm>
        <h1>Sing Up</h1>
        <InputContainer>
          <LabelLogin>e-mail</LabelLogin>
          <InputLogin placeholder={"email"} value={email} onChange={onChangeEmail}></InputLogin>
        </InputContainer>
        <InputContainer>
          <LabelLogin >senha</LabelLogin>
          <InputLogin placeholder={"senha"} value={senha} onChange={onChangeSenha} type={"password"}></InputLogin>
        </InputContainer>
        <BotaoEntrar onClick={onClickEntrar}>Entrar</BotaoEntrar>
      </ContainerForm>
    </LoginPageConatiner>
  );
}
export default Login;