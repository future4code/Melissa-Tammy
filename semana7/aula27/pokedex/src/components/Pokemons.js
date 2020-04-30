import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  align-items: center;
  margin-top:7.0vw;
  padding-left:0;

`

const CardPokemon = styled.div`
    display: flex;
    width: 25%;
    flex-direction: column;
    border: 1px black solid;
    border-radius: 5px;
    margin: 1vw;
    justify-content: center;
    align-items: center;
`

const ContainerPokemon = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Nome = styled.h1`
    font-size:1em;
`

class Pokemons extends React.Component {
    render() {
        const imprimePokemons = this.props.pegaListaPokemon.map((poke) => {
            return (
                <CardPokemon>
                    <Nome>{poke.nome}</Nome>
                    <img src={poke.foto} />
                </CardPokemon>
            )
        })

        return (
            <Container>
                <ContainerPokemon>
                    {imprimePokemons}
                </ContainerPokemon>
            </Container >

        );
    }

}

export default Pokemons;
