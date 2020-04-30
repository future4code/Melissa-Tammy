import React from 'react';
import styled from 'styled-components'

const BotaoExcluir = styled.button`
    background-color: red;
    color: white;
    font-size: 10px;
    border: none;
    border-radius: 100vw;
    margin-left: 1vw;
`

const Container = styled.div`
    margin: 1vw;
    display: flex;
    flex-direction: column;
`

const ContainerUser = styled.div`
    margin: 1vw;
    display: flex;
    justify-content: space-between;
`

const BotaoEditar = styled.button`
    background-color: blue;
    color: white;
    font-size: 10px;
    border: none;
    border-radius: 100vw;
    margin-left: 1vw;
`
const BotaoSalvar = styled.button`
    background-color: green;
    display:flex;
    justify-content: center;
    color: white;
    font-size: 10px;
    border: none;
    border-radius: 100vw;
    margin-left: 1vw;
`
const BotaoMais = styled.button`
    color: blue;
    font-size:16px;
    border: none;
    border-radius: 100vw;
    margin-left: 1vw;
`

class User extends React.Component {
    render() {
        return (
            <Container>
                <ContainerUser>
                    <li>{this.props.nomeUser.name}</li>
                    <div>{
                        this.props.mostraSalvarEditarEcluir ? (

                            <BotaoSalvar onClick={() => this.props.onClickEditarListaUsers(this.props.nomeUser.id)}>Salvar</BotaoSalvar>

                        ) : (
                                <div>
                                    <BotaoMais onClick={() => this.props.onClickMaisListaUsers(this.props.nomeUser.id)}>+</BotaoMais>
                                    <BotaoEditar onClick={this.props.onClickBotaoEditar}>Editar</BotaoEditar>
                                    <BotaoExcluir onClick={() => this.props.onClickExcluirListaUsers(this.props.nomeUser.id)}>X</BotaoExcluir>
                                </div>
                            )
                    }
                    </div>
                </ContainerUser>
            </Container>
        );
    }

}

export default User;