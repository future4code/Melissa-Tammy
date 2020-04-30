import React from 'react';
import User from './User'
import InputNome from './InputNome'
import styled from 'styled-components'
import MaisInfo from './MaisInfo'

const InputEditar = styled.div`
    background-color:red;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin:2vw;
`

class ListaUsers extends React.Component {
    render() {
        //console.log(this.props.)
        const listaDeComponentes = this.props.arrayUsuarios.map((cadaUsuario) => {
            return (
                <div>
                    <User
                        onClickMaisListaUsers={this.props.onClickMaisLista}
                        mostraSalvarEditarEcluir={this.props.mostraBotao}
                        onClickBotaoEditar={this.props.onClickEditar}
                        onClickEditarListaUsers={this.props.onCLickEditarLista}
                        onClickExcluirListaUsers={this.props.onClickExcluir}
                        nomeUser={cadaUsuario}>
                    </User>
                </div>
            )
        })

        return (
            <Container>
                {this.props.mostraBotao ? (
                    <InputEditar>
                        <InputNome
                            onChangeInputNome={this.props.onChangeInput}
                            valorInput={this.props.valorInputNome}
                        />
                    </InputEditar>
                ) : (
                        <div />
                )}

                {this.props.mostraInfoLista ? (
                <MaisInfo mostraEmailLista={this.props.mostraEmail} onClickVoltarListaUsers={this.props.onClickVoltarLista}></MaisInfo>
                ) : (
                <ul>
                    {listaDeComponentes}
                </ul>
                )}

            </Container>
        );
    }
}

export default ListaUsers;