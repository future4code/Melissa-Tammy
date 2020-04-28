import React from 'react';
import styled from 'styled-components'

const BotaoListaContainer = styled.button`
    background-color: white;
    margin:0;
    padding-bottom:1vw;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

function BotaoLista() {
    return (
        <BotaoListaContainer>Mostrar lista de Users</BotaoListaContainer>
    );
}

export default BotaoLista;