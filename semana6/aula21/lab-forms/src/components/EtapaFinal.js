import React from 'react';

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

function EtapaFinal() {
    return (
        <div>
            <Container>
            <h1>O FORMULÁRIO ACABOU</h1>
            <p>Muito obrigado por participar! Entraremos em contato!</p>
            </Container>
        </div>
    );
}

export default EtapaFinal;
