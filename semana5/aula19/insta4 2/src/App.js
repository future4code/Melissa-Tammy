import React from 'react';
import Post from './components/Post/Post';

import styled from 'styled-components'


const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px black solid;
  padding: 50px;
  margin-bottom: 20px;
`
const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "meltammy",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/300/150"
      },
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/51/50",
        fotoPost: "https://picsum.photos/301/150"
      },
      {
        nomeUsuario: "João",
        fotoUsuario: "https://picsum.photos/52/50",
        fotoPost: "https://picsum.photos/302/150"
      }
    ],
    valorInputUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFoto: ""
  };

  aoPostar = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFoto
    };
    const novosPosts = [...this.state.posts, novoPost];
    this.setState({ posts: novosPosts });
  };
  onChangeUsuario = event => {
    this.setState({ valorInputUsuario: event.target.value });
  };
  onChangeFotoPerfil = event => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };
  onChangeFoto = event => {
    this.setState({ valorInputFoto: event.target.value });
  };

  render() {
    const listaDePosts = this.state.posts.map(post => {
      return (
        <AppContainer>
          <Post
            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}
          />
        </AppContainer>
      );
    });

    return (
      <div>
        <ContainerInput>
          <input
            onChange={this.onChangeUsuario}
            placeholder={"Usuário"}
            value={this.state.valorInputUsuario}
          />
          <input
            onChange={this.onChangeFotoPerfil}
            placeholder={"link da foto de perfil"}
            value={this.state.valorInputFotoUsuario}
          />
          <input
            onChange={this.onChangeFoto}
            placeholder={"link da foto"}
            value={this.state.valorInputFoto}
          />
          <button onClick={this.aoPostar}>Postar</button>
        </ContainerInput>
        <div>{listaDePosts}</div>
      </div>
    );
  }
}

export default App;
