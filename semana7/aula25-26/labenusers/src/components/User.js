import React from 'react';
import styled from 'styled-components'
import axios from "axios";

class User extends React.Component {
    render() {
        return (
            <li>{this.props.nomeUser.name}</li>
        );
    }

}

export default User;