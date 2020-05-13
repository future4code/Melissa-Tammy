import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: 90%;
  height: 70%;
  display: flex;
  align-items: initial;
  border: 1px black solid;
  border-radius: 3px;
  overflow: hidden;
  transition: all 0.5s ease 0s;
  animation: 0.5s ease 0s 1 normal forwards running none;
`

const Content = styled.div`
  z-index: 1;

`

const ImagensContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  width:100%;
  height:75%;
`

const Fundo = styled.div`
  background-image: url("https://assets.papelpop.com/wp-content/uploads/2016/05/sara-ramirez-callie-torres-greys-anatomy.jpg");
  filter: blur(22px);
  height: 75%;
  width: 100%;
  position: absolute;
  border: 20px black solid;
  z-index: -1;
`

const Foto = styled.img`
  width: 100%;
  max-height:100%;
  display: block;
  z-index: 1;
`

const Footer = styled.div`
  bottom:0;
  background-color: white;
  width:100%;
  height:25%;
  padding:3%;
`

const CardPessoa = (props) => {
  console.log(props.perfil)

  const dadosPerfil = props.perfil
  console.log(dadosPerfil)
  return (
    <Container>
      <Content>
        <ImagensContainer>
          <Fundo />
          <Foto src={dadosPerfil.photo} />
        </ImagensContainer>
        <Footer>
          <h3>{dadosPerfil.name}, {dadosPerfil.age}</h3>
          <p>{dadosPerfil.bio}</p>
        </Footer>
      </Content>


    </Container>
  );
}

export default CardPessoa;
