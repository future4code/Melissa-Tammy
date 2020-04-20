import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div>
            <div className="smallcard-container">
                <img src={props.imagem1} />
                <div>
                    <p><b>E-mail:</b> {props.email}</p>
                </div>
            </div>
            <div className="smallcard-container">
                <img src={props.imagem2} />
                <div>
                    <p><b>Endereço: </b> {props.endereco}</p>
                </div>
            </div>
        </div>
    )
}

export default CardPequeno;