import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from 'styled-components'
import HeaderPrivate from './HeaderPrivate';
import { useHistory } from "react-router-dom";
import { useForm } from './hooks/useForm'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


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

const InputForm = styled(TextField)`
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


const CreateTripPage = (props) => {
  const history = useHistory();
  const { form, onChange } = useForm({ nome: "", planeta: "", data: "", descricao: "", duracaoEmDias: "" });

  const handleInputChange = event => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      history.push("/login");
    }
  }, [history]);

  const onClickCriar = () => {
    const body = {
      name: form.nome,
      planet: form.planeta,
      date: form.data,
      description: form.descricao,
      durationInDays: form.duracaoEmDias
    }
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/melissa-melonio-julian/trips`,
        body,
        {
          headers: {
            'Content-Type': 'application/json',
            'auth': `${localStorage.getItem("token")}`
          }
        }
      )
      .then((response) => {
        alert("Viagem cadastrada!")
        history.push("/private/details");
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <ApplyToTripPageContainer>
      <HeaderPrivate/>
      <Fundo />
      <MainContainer>
        <ContainerForm>
          <Titulo>CRIAR VIAGEM</Titulo>
          <InputContainer>
            <InputForm
              label="nome"
              name="nome"
              value={form.nome}
              onChange={handleInputChange} />
            <InputForm
              label="planeta"
              name="planeta"
              value={form.planeta}
              onChange={handleInputChange}
              type={"text"} />
            <textarea
              label="data"
              name="data"
              value={form.data}
              onChange={handleInputChange}
              type={"date"} />
            <InputForm
              label="descricao"
              name="descricao"
              value={form.descricao}
              onChange={handleInputChange}
              type={"text"} />
            <InputForm
              label="Duracao em Dias"
              name="duracaoEmDias"
              value={form.duracaoEmDias}
              onChange={handleInputChange}
              type={"number"} />
          </InputContainer>
          <BotaoEntrar onClick={onClickCriar}>Criar</BotaoEntrar>
        </ContainerForm>


      </MainContainer>
    </ApplyToTripPageContainer>
  );
}
export default CreateTripPage;