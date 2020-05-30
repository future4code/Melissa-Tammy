import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from 'styled-components'
import HeaderPublic from './HeaderPublic';
import { useHistory } from "react-router-dom";
import { useForm } from './hooks/useForm'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


const ApplyToTripPageContainer = styled.div`
  width:100%;
  height: 100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
`

const ContainerForm = styled.div`
  width:50%;
  height: 80%;
  border-radius:10px;
  background-color:white;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items:center;
  padding:1vw;
  padding-top:2vw;
  padding-bottom:3vw;
  margin-top:2vw;
`

const Titulo = styled.h1`
    margin-bottom: 5%;
`


const InputContainer = styled.div`
  width:80%;
  height: 60%;
  display:flex;
  flex-direction:column;
`

const InputApply = styled(TextField)`
  width:100%;
  height: 100%;
  display:flex;
  justify-content:space-between;

`

const LabelLogin = styled.label`
  font-size: 1em;

`

const BotaoEntrar = styled.button`
  width:80%;
  color: white;
  min-height:30px;
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
  const { form, onChange } = useForm({ nome: "", idade: "", textoAplicacao: "", profissao: "", pais: "" });

  const handleInputChange = event => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const paises = [
    {
      value: 'Brasil',
      label: 'brasil',
    },
    {
      value: 'Cuba',
      label: 'cuba',
    },
    {
      value: 'Canada',
      label: 'canada',
    },
    {
      value: 'Japão',
      label: 'japao',
    },
  ];

  const onClickEntrar = () => {
    const body = {
      name: form.nome,
      age: form.idade,
      applicationText: form.textoAplicacao,
      profession: form.profissao,
      country: form.pais
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
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <ApplyToTripPageContainer>
      <HeaderPublic></HeaderPublic>
        <ContainerForm>
          <Titulo>INSCRIÇÃO</Titulo>
          <InputContainer>
            <InputApply placeholder={"Nome"} value={form.nome} onChange={handleInputChange}></InputApply>
            <InputApply placeholder={"Idade"} value={form.idade} onChange={handleInputChange} type={"number"}></InputApply>
            <InputApply placeholder={"texto"} value={form.textoAplicacao} onChange={handleInputChange} type={"text"}></InputApply>
            <InputApply placeholder={"Profissão"} value={form.profissao} onChange={handleInputChange} type={"text"}></InputApply>
            <TextField
              select
              label="Pais"
              onChange={handleInputChange}
              helperText="Please select your currency">
              {paises.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </InputContainer>
          <BotaoEntrar onClick={onClickEntrar}>Inscrever-se</BotaoEntrar>
        </ContainerForm>
    </ApplyToTripPageContainer>
  );
}
export default ApplyToTrip;