import React from 'react';



function PerguntaFechada(props) {
    // const lista = {props.opcoes}.map((cada) => {
    //     <p>{cada}</p>
    // })

    return (
        < div >
        <p>{props.pergunta}</p>
        <p>{props.opcoes}</p>
        </div >
    );
}

export default PerguntaFechada;