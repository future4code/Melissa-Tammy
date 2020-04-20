import React, { Component } from 'react';
import Etapa1 from '../src/components/Etapa1'
import Etapa2 from '../src/components/Etapa2'
import Etapa3 from '../src/components/Etapa3'
import EtapaFinal from '../src/components/EtapaFinal'
import Botao from '../src/components/Botao'


import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 5vw;
    margin-right: 5vw;
    padding-left: 5vw;
    padding-right: 5vw;
`

class App extends React.Component {
  state = {
    etapa: 1
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <EtapaFinal />
    }
  }

  proximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1
    })
  }



  render() {
    let apareceBotao
    if (this.state.etapa < 4) {
      apareceBotao = <Botao aoClicar={this.proximaEtapa}/>
    }
    return (
      <Container>
        {this.renderizaEtapa()}
        {apareceBotao}
      </Container>
    );
  }
}

export default App;
