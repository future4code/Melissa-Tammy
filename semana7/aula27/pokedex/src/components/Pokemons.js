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
    padding:1vw;
`

const ContainerPokemon = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Nome = styled.h1`
    font-size:150%;
    text-transform: capitalize;
`

const Foto = styled.img`
    width:50%;
`
const Detalhes = styled.div`
    display: flex;
    flex-direction: column;
    width:80%;
    text-align:left;
`
const Tipo = styled.p`
    margin:0;
`

class Pokemons extends React.Component {
    render() {
        const imprimePokemons = this.props.pegaListaPokemon.map((poke) => {

            return (
                <CardPokemon>
                    <Foto src={poke.foto} />
                    <Nome>{poke.nome}</Nome>
                    <Detalhes>
                        <Tipo>{poke.tipo[0]}</Tipo>
                        <Tipo>{poke.tipo[1]}</Tipo>
                    </Detalhes>

                </CardPokemon>
            )
        })
        let listaOrdenada = imprimePokemons
        listaOrdenada = listaOrdenada.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
        console.log(listaOrdenada)
        return (
            <Container>
                <ContainerPokemon>
                    {listaOrdenada}
                </ContainerPokemon>
            </Container >

        );
    }

}

export default Pokemons;
