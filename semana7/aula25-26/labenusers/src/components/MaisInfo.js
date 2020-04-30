import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    background-color: white;
    margin:0;
    margin-bottom: 2vw;
    padding-bottom:1vw;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Mais = styled.p`
    margin:0;
`

const BotaoVoltar = styled.button`
    border: none;
    margin-top:2vw;
`

class MaisInfo extends React.Component {
    render() {
        return (
            <Container>
                <h2>{this.props.mostraEmailLista.name}</h2>
                <Mais>{this.props.mostraEmailLista.email}</Mais>
                <Mais>{this.props.mostraEmailLista.id}</Mais>
                <BotaoVoltar onClick={this.props.onClickVoltarListaUsers}>voltar</BotaoVoltar>
            </Container>
        );
    }
}
export default MaisInfo;
