import React from 'react';
import styled from 'styled-components'

const EmailContainer = styled.div`
    background-color: white;
    margin:0;
    padding-bottom:1vw;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;

`

class InputEmail extends React.Component {
    render() {
        return (
            <EmailContainer>
            <label>e-mail: </label>
                <input onChange={this.props.onChangeInputEmail} value={this.props.valorInput} />
            </EmailContainer>
        );
    }
}
export default InputEmail;
