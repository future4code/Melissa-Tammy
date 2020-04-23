import React from 'react';
import PerguntaAberta from './PerguntaAberta'
import PerguntaFechada from './PerguntaFechada'

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

function Etapa3() {
    return (
        <div>
            <Container>
            <h1>Etapa 3 - Informações Gerais de Ensino</h1>
            <PerguntaAberta pergunta={"7. Por que você não terminou um curso de graduação?"}/>
            <p>8. Você fez algum curso complementar?</p>
            <select>
                <option>Nenhum</option>
                <option>Curso Tecnico</option>
                <option>Curso de Inglês</option>
            </select>
            </Container>
        </div>
    );
}

export default Etapa3;

