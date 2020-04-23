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

function Etapa1() {
    return (
        <div>
            <Container>
                <h1>Etapa 1 - Dados Gerais</h1>
                <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
                <PerguntaAberta pergunta={"2. Qual a sua idade?"} />
                <PerguntaAberta pergunta={"3. Qual o seu e-mail?"} />
                <PerguntaAberta pergunta={"4. Qual a sua escolaridade?"} />
                <PerguntaFechada
                    pergunta={"4. Qual a sua escolaridade?"}
                    opcoes={[
                        "Ensino médio incompleto",
                        "Ensino médio completo",
                        "Ensino superior incompleto",
                        "Ensino superior completo"
                    ]}/>
            </Container>
        </div>
    );
}

export default Etapa1;
