import React from 'react';
import PerguntaAberta from './PerguntaAberta'


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

function Etapa2() {
    return (
        <div>
            <Container>
            <h1>Etapa 2 - Informações do Ensino Superior</h1>
            <PerguntaAberta pergunta={"5. Qual curso?"}/>
            <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"}/>
            </Container>
        </div>
    );
}

export default Etapa2;
