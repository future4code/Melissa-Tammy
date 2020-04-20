import React from 'react';
import './formacao.css'

function Formacao(props) {
    return (
        <div>
            <div className="formacao-container">
                <div>                
                <img src={props.imagem} />
                    <p>{props.instituicao}</p>
                </div>
                <div>                
                <img src={props.imagem2} />
                    <p>{props.instituicao2}</p>
                </div>
            </div>
        </div>
    )
}

export default Formacao;