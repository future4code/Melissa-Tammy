import React from 'react';
import styled from 'styled-components'
import User from './User'

class ListaUsers extends React.Component {
    render() {

        const listaDeComponentes = this.props.arrayUsuarios.map((cadaUsuario) =>{
            return <User nomeUser={cadaUsuario}></User>
        })

        return (
            <ul>
                {listaDeComponentes}
            </ul>
        );
    }
}

export default ListaUsers;