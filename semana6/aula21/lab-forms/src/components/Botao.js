import React from 'react';

import styled from 'styled-components';

function Botao(props) {
    return (
        <div>
            <button onClick={props.aoClicar}>Próxima Etapa</button>
        </div>
    );
}

export default Botao;
