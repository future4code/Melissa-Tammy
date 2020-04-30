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
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #dbdbdb;
width: 100vw;
height: 100vh;
`
const ContainerForm = styled.div`
border-radius: 2vw;
border-top: 1px grey solid;
border-left: 1px grey solid;
border-right: 1px grey solid;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
min-width:30vw;
max-width: 70vw;
width:100%;
margin-top: 5vw;
`
const ContainerLista = styled.div`
border-radius: 30px;
border-bottom-left-radius: 0;
border-bottom-right-radius: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
min-width:30vw;
max-width: 70vw;
width:100%;
margin-top: 5vw;

`

const TituloCadastrar = styled.h1`
  font-size: 2rem;
`

class App extends React.Component {
  state = {
    usuarios: [],
    email: "",
    inputNomeValor: "",
    inputEmailValor: "",
    mostraLista: false,
    mostraBotaoEditar: false,
    mostraInfo: false
  };

  componentDidMount() {
    this.pegaUsuarios()
  }

  onChangeNome = event => {
    this.setState({
      inputNomeValor: event.target.value
    })
    console.log(this.state.inputNomeValor)
  }

  onChangeEmail = event => {
    this.setState({
      inputEmailValor: event.target.value
    })
  }

  onClickLista = () => {
    this.setState({
      mostraLista: !this.state.mostraLista,
      mostraBotaoEditar: false
    })
    console.log("blica butão")
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

  criaUsuario = (novoNomeUsuario, novoEmailUsuario) => {
    const body = {
      name: novoNomeUsuario,
      email: novoEmailUsuario
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "melissa-melonio-julian"
          }
        }
      )
      .then((resposta) => {
        console.log("deu certo POST")

        alert("Usuário cadastrado")
        this.setState({
          inputNomeValor: '',
          inputEmailValor: ''
        })
        this.pegaUsuarios();
      })
      .catch((error) => {
        alert("Dados inválidos ou usuário já cadastrado")
        console.log("deu ruim POST", error.response)
      })

  }

  cadastrar = () => {
    console.log("entrou no cadastrar")
    this.criaUsuario(this.state.inputNomeValor, this.state.inputEmailValor)
  }

  onClickExcluirUsuario = (id) => {
    console.log("Entrou no excluir")
    console.log(id)
    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      {
        headers: {
          Authorization: "melissa-melonio-julian"
        }
      }
    )
      .then((resposta) => {
        const confirmAux = window.confirm("Você está prestes a deletar um usuário, deseja mesmo continuar?")
        if (confirmAux) {
          console.log("deu certo DELETE")
          this.pegaUsuarios();
          alert("Usuário deletado com sucesso")
        }

      }).catch((error) => {
        alert("Erro ao deletar usuário")
        console.log("deu ruim")
      })
  }

  onClickBotaoEditar = () => {
    this.setState({
      mostraBotaoEditar: !this.state.mostraBotaoEditar
    })
    console.log("entrou no botao editar")
  }

  onClickMais = (id) => {
    console.log("Entrou no mais")
    console.log(id)
    this.setState({mostraInfo: true})
    axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      {
        headers: {
          Authorization: "melissa-melonio-julian"
        }
      }
    )
    .then((resposta) => {
      console.log(resposta.data)
      this.setState({ email: resposta.data })
      console.log(this.state.email)
    }).catch((error) => {
      console.log("deu ruim")
    })
  }

  onClickSalvar = (id) => {
    console.log(this.state.inputNomeValor)
    this.editarUsuario(this.state.inputNomeValor, id)
  }

  onClickVoltar = () => {
    this.setState({
      mostraInfo: !this.state.mostraInfo
    })
  }

  editarUsuario = (novoNomeUsuario, id) => {
    console.log("Entrou no editar")
    console.log(id)
    console.log(novoNomeUsuario)

    const body = {
      name: novoNomeUsuario,
    };

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        body,
        {
          headers: {
            Authorization: "melissa-melonio-julian"
          }
        }
      )
      .then((resposta) => {
        if (novoNomeUsuario !== '') {
          console.log("deu certo Editar")
          this.pegaUsuarios();
          alert("Usuário Editado com sucesso")
          this.setState({
            inputNomeValor: '',
            mostraBotaoEditar: false
          })
        } else {
          alert("insira um nome")
        }

      }).catch((error) => {
        alert("Erro ao editar usuário")
        console.log("deu ruim EDITAR")
      })
  }

  render() {
    return (
      <Container className={"fonteBonita"}>
        {this.state.mostraLista ? (
          <ContainerForm>
            <TituloCadastrar>Cadastrar</TituloCadastrar>
            <InputNome
              onChangeInputNome={this.onChangeNome} valorInput={this.state.inputNomeValor} />
            <InputEmail
              onChangeInputEmail={this.onChangeEmail} valorInput={this.state.inputEmailValor} />
            <BotaoCadastrar onClickBotaoCadastrar={this.cadastrar} />
          </ContainerForm>
        ) : (
            <ContainerLista>
              <ListaUsers
                mostraInfoLista={this.state.mostraInfo}
                mostraEmail={this.state.email}
                onClickMaisLista={this.onClickMais}
                onClickVoltarLista={this.onClickVoltar}
                mostraBotao={this.state.mostraBotaoEditar}
                arrayUsuarios={this.state.usuarios}
                onClickExcluir={this.onClickExcluirUsuario}
                onClickEditar={this.onClickBotaoEditar}
                onCLickEditarLista={this.onClickSalvar}
                onChangeInput={this.onChangeNome}
                valorInputNome={this.state.inputNomeValor}
              />
            </ContainerLista>
          )
      }
        <BotaoLista onClickBotaoLista={this.onClickLista} ListaOuForm={this.state.mostraLista} />





      </Container>
    );
  }
}

export default App;
