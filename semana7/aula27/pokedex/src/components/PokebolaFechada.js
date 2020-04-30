import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width:100vw;
  display:flex;
  flex-direction: column;
  justify-content: center;
`

const ContainerVermelho = styled.div`
  max-width:100vw;
  background-color: red;
  height: 50vh;
  border-bottom: 2vw black solid;

`

const ContainerBranco = styled.div`
  max-width:100vw;
  background-color: white;
  height: 50vh;
  border-top: 2vw black solid;
`

const BotaoBokebola = styled.button`
  border-radius: 100vw;
  width: 15vw;
  height: 15vw;
  position: absolute;
  display:  flex;
  align-self: center;
  justify-self: center;
  border: 1.5vw black solid;
  background-color: rgba(255, 255, 255);
  transition: filter 0.2s;
`

class PokebolaFechada extends React.Component {
    render() {
        return (
            <Container>
                <ContainerVermelho />
                <BotaoBokebola onClick={this.props.onClickBotaoPokebolaApp} />
                <ContainerBranco />
            </Container>

        );
    }

}

export default PokebolaFechada;
