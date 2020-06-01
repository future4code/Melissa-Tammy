import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";


const HeaderContainer = styled.header`
    background-color:#009085;
    width:100%;
    height: 12vh;
    min-height:72px;
    display:flex;
    align-items:center;
    padding-left:2vw;
    padding-right:5vw;
    justify-content:space-between;
`

const ContainerBotoes = styled.div`
  width:20%;
  height:100%;
  display:flex;
  justify-content:space-between;
  align-items: center;

`

const BotaoLogOut = styled.button`
   color: white;
   width:7vw;
   min-height:20px;
   min-width:95px;
   padding:1.5vh;
   margin-left:1vw;
   margin-right:1vw;
   background-color:transparent;
   border:none;
   border: 1px white solid;
   border-radius:3px;
   font-size:1rem;
   text-transform: uppercase;
   transition: 0.7s;
   :hover{
       background-color: #0000003b;
       border: 1px #ffffff73 solid;
   }
`

const HeaderPublic = (props) => {

  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(false);

  };
  const goToHomePage = () => {
    history.push("/private");
  }

  return (
    <HeaderContainer>
      <img onClick={goToHomePage} src="https://img.icons8.com/cotton/64/000000/rocket-take-off.png" />
      <ContainerBotoes>
      <BotaoLogOut onClick={handleLogout}>Logout</BotaoLogOut>
      </ContainerBotoes>
    </HeaderContainer>
  );
}
export default HeaderPublic;