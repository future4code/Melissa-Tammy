import React from 'react';
import styled from 'styled-components'

const BotaoListaContainerCadastro = styled.button`
    background-color: orangered;
    margin: 0;
    width: 100%;
    height: 50px;
    border-radius: 2vw;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border: 0px;
`

const BotaoListaContainer = styled.button`
    background-color: salmon;
    margin: 0;
    height: 50px;
    border-radius: 2vw;
    border: 0px;
    justify-self: flex-start;
    align-self:center;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width:30vw;
    max-width: 70vw;
    width:100%;    
    padding-bottom: 30vh;
`

class BotaoLista extends React.Component {
    render() {
        return (
            <Container>{
                this.props.ListaOuForm ? (<BotaoListaContainer onClick={this.props.onClickBotaoLista}>Ver Lista</BotaoListaContainer>
                ) : (<BotaoListaContainerCadastro onClick={this.props.onClickBotaoLista}>Cadastrar Usuário</BotaoListaContainerCadastro>
                    )}
            </Container>
        );
    }
}

export default BotaoLista;