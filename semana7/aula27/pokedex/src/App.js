import React from 'react';
import './App.css';
import PokebolaFechada from './components/PokebolaFechada'
import Pokemons from './components/Pokemons'
import styled from 'styled-components';

const Container = styled.div`
  max-width:100vw;
  display:flex;
  flex-direction: column;
`

const ContainerPokebolaAberta = styled.div`
  max-width:100vw;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  min-height:100vh;
`

const NavBar = styled.div`
  background-color: red;
  border-bottom: 2vw black solid;
  height: 8vw;
  width:100vw;
  display: flex;
  justify-content: center;
`
const Footer = styled.div`
  background-color: white;
  border-top: 2vw black solid;
  height: 5vw;
  width:100vw;
`

const BotaoBokebola = styled.button`
  border-radius: 100vw;
  width: 15vw;
  height: 15vw;
  margin-top: 5vw;
  position: absolute;
  display:  flex;
  align-self: center;
  justify-self: center;
  border: 1.5vw black solid;
  background-color: rgba(255, 255, 255);
  transition: filter 0.2s;
`

class App extends React.Component {
  state = {
    listaPokemons:[ {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
  },
  {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/"
  },
  {
      "name": "venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon/3/"
  },
  {
      "name": "charmander",
      "url": "https://pokeapi.co/api/v2/pokemon/4/"
  },
  {
      "name": "charmeleon",
      "url": "https://pokeapi.co/api/v2/pokemon/5/"
  },
  {
      "name": "charizard",
      "url": "https://pokeapi.co/api/v2/pokemon/6/"
  }],
    abrePokebola: true
  }

  onClickBotaoPokebola = () => {
    this.setState({
      abrePokebola: !this.state.abrePokebola
    })
  }

  render() {
    return (
      <Container>
        {this.state.abrePokebola ? (
          <ContainerPokebolaAberta>
            <NavBar>
            <BotaoBokebola onClick={this.onClickBotaoPokebola}/>
            </NavBar>
            <Pokemons pegaListaPokemon={this.state.listaPokemons}>

            </Pokemons>
            <h1>Testeee</h1>
            <Footer></Footer>
          </ContainerPokebolaAberta>
        ) : (
          <PokebolaFechada onClickBotaoPokebolaApp={this.onClickBotaoPokebola}/>
          )}
      </Container>
    );
  }

}

export default App;
