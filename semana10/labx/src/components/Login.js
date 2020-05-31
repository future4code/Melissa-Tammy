import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from 'styled-components'
import HeaderPublic from './HeaderPublic';
import { useForm } from './hooks/useForm'
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";


const LoginPageConatiner = styled.div`
  width:100vw;
  height:100vh;

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
  height: 40%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`

const InputLogin = styled(TextField)`
  width:100%;
  display:block;
`

const BotaoEntrar = styled.button`
  width:60%;
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
  const history = useHistory();
  const { form, onChange } = useForm({ emailInserido: "mel", senha: "123" });

  const handleInputChange = event => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const onClickEntrar = () => {
    const body = {
      email: form.emailInserido,
      password: form.senha
    }
    console.log(form.emailInserido, form.senha)
    axios
      .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/melissa-melonio-julian/login',
        body,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/private");
        console.log(response)
      })
      .catch((error) => {
        alert(error)
      })
  }

  return (
    <LoginPageConatiner>
      <HeaderPublic></HeaderPublic>
      <ContainerForm>
        <h1>Login</h1>
        <InputContainer>
          <InputLogin 
          label="e-mail" 
          name="emailInserido"
          value={form.emailInserido}
          onChange={handleInputChange}/>
          <InputLogin 
          label="senha" 
          name="senha"
          value={form.senha}
          onChange={handleInputChange}
          type={"password"}/>
        </InputContainer>
        <BotaoEntrar onClick={onClickEntrar}>Entrar</BotaoEntrar>
      </ContainerForm>
    </LoginPageConatiner>
  );
}
export default Login;