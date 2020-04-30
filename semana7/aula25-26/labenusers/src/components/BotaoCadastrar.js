import React from 'react';
import styled from 'styled-components'

const BotaoContainer = styled.button`
    background-color: green;
    width:100%;
    height: 100%;
    margin:0;
    border: 0px;
    border-bottom-left-radius: 2vw;
    border-bottom-right-radius: 2vw;
    padding-top:0.5vw;
    padding-bottom:0.5vw;
    border-bottom: 1px black solid;

`

class BotaoCadastrar extends React.Component {
    render() {
        return (
            <BotaoContainer onClick={this.props.onClickBotaoCadastrar}>Cadastrar</BotaoContainer>
        );
    }
}
export default BotaoCadastrar;