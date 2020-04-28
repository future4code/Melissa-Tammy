import React from 'react';
import './App.css';
import InputEmail from './components/InputEmail'
import InputNome from './components/InputNome'
import BotaoCadastrar from './components/BotaoCadastrar'
import ListaUsers from './components/ListaUsers'
import BotaoLista from './components/BotaoLista'
import axios from "axios"

import styled from 'styled-components'

const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
font-family: 'Montserrat', sans-serif;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgb(249, 255, 191);
width: 100vw;
height: 100vh;
`
const ContainerForm = styled.div`
border-radius: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
min-width:20vw;
`
const ContainerLista = styled.div`
border-radius: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
min-width:20vw;
`

const TituloCadastrar = styled.h1`
  font-size: 2rem;
`

class App extends React.Component {
  state = {
    usuarios: [],
    novoUsuario: "",
    inputNomeValor: "",
    inputEmailValor: ""
  };

  componentDidMount() {
    this.pegaUsuarios()
  }

  pegaUsuarios = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "melissa-melonio-julian"
          }
        }
      )
      .then((resposta) => {
        this.setState({ usuarios: resposta.data })
      }).catch((error) => {
        console.log("deu ruim")
      })
  }
  onChangeNome = event => {
    this.setState({
      inputNomeValor: event.target.value
    })
  }
  onChangeEmail = event => {
    this.setState({
      inputEmailValor: event.target.value
    })
  }
  cadastrar = () => {
    console.log("entrou no cadastrar")
  }
  render() {
    return (
      <Container>
        <ContainerForm>
          <TituloCadastrar>Cadastrar</TituloCadastrar>
          <InputNome
            onChangeInputNome={this.onChangeNome} valorInput={this.state.inputNomeValor} />
          <InputEmail
            onChangeInputEmail={this.onChangeEmail} valorInput={this.state.inputEmailValor} />
          <BotaoCadastrar onClickBotaoCadastrar={this.cadastrar}/>
        </ContainerForm>

        <ContainerLista>
          <ListaUsers
            arrayUsuarios={this.state.usuarios} />
          <BotaoLista ></BotaoLista>
        </ContainerLista>
      </Container>
    );
  }
}

export default App;
