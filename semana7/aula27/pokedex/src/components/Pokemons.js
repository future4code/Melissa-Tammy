import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width:100vw;
  display:flex;
  justify-content: center;
`

const ContainerPokemon = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px black solid;
`

class Pokemons extends React.Component {
    render() {

        const imprimePokemons = this.props.pegaListaPokemon.map((poke) => {
            return(
                <ContainerPokemon>
                    <h3>{poke.name}</h3>
                    <img src={poke.url}/>
                </ContainerPokemon>
            )
        })

        return (
            <Container>
                {imprimePokemons}
            </Container>

        );
    }

}

export default Pokemons;
