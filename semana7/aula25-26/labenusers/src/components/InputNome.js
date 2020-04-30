import React from 'react';
import styled from 'styled-components'

const NomeContainer = styled.div`
    background-color: white;
    margin:0;
    padding-bottom:1vw;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    background-color: ice;
`

class InputNome extends React.Component {
    render() {
        return (
            <NomeContainer>
                <label>Nome: </label>
                <Input onChange={this.props.onChangeInputNome} value={this.props.valorInput} />
            </NomeContainer>
        );
    }

}

export default InputNome;