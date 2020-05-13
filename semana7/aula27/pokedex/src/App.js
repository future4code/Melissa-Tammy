import React from 'react';
import './App.css';
import PokebolaFechada from './components/PokebolaFechada'
import Pokemons from './components/Pokemons'
import styled from 'styled-components';
import axios from 'axios'

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
  width:100%;
  display: flex;
  justify-content: center;

`
const Footer = styled.div`
  background-color: white;
  border-top: 2vw black solid;
  height: 5vw;
  width:100%;

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
    listaNomes: [],
    listaPokemons: [],
    abrePokebola: false
  }

  onClickBotaoPokebola = () => {
    this.setState({
      abrePokebola: !this.state.abrePokebola
    })
  }

  componentDidMount = () => {
    console.log("entrou do did mount")
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        console.log("antes set state Nome")
        this.setState({
          listaNomes: response.data.results
        })
        console.log(this.state.listaNomes)
        {
          this.state.listaNomes.map((poke) => {
            console.log("Entrou no map")
            axios
              .get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
              .then((response) => {
                const auxPokemon = {
                  id: response.data.id,
                  nome: response.data.name,
                  tipo: response.data.types.map((poke) => {
                    return (
                      poke.type.name
                    )
                  }),
                  foto: `https://pokeres.bastionbot.org/images/pokemon/${response.data.id}.png`
                }
                let arrayAux = [auxPokemon, ...this.state.listaPokemons];
                arrayAux = arrayAux.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
                this.setState({
                  listaPokemons: arrayAux
                })
                console.log(this.state.listaPokemons)

                console.log(`Deu certo o get, tipo é ${response.data.types}`)
              }).catch((error) => {
                console.log(error.response)
              })
            return (
              <div />
            )
          })
        }
      }).catch((error) => {
        console.log(error.response)
      })
  }




  render() {
    return (
      <Container>
        {this.state.abrePokebola ? (
          <ContainerPokebolaAberta>
            <NavBar>
              <BotaoBokebola onClick={this.onClickBotaoPokebola} />
            </NavBar>
            <Pokemons pegaListaPokemon={this.state.listaPokemons}>

            </Pokemons>
            <Footer></Footer>
          </ContainerPokebolaAberta>
        ) : (
            <PokebolaFechada onClickBotaoPokebolaApp={this.onClickBotaoPokebola} />
          )}
      </Container>
    );
  }

}

export default App;
