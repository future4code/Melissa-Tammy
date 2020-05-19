import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from 'styled-components'
import Button from '@material-ui/core/Button';


const HeaderContainer = styled.header`
    background-color:#009085;
    width:100%;
    height: 7vw;
    display:flex;
    align-items:center;
    padding-left:2vw;
    padding-right:5vw;
    justify-content:space-between;
`
const Lab = styled.h1`
    color:white;
`

const BotaoLogin = styled.button`
   color: white;
   width:7vw;
   padding:0.5vw;
   background-color:transparent;
   border:none;
   border: 1px white solid;
   border-radius:3px;
   font-size:1.5vw;
   text-transform: uppercase;
   transition: 0.7s;
   :hover{
       background-color: #0000003b;
       border: 1px #ffffff73 solid;
   }
`

const HeaderPublic = (props) => {
    return (
      <HeaderContainer>
          <img src="https://img.icons8.com/cotton/64/000000/rocket-take-off.png"/>
        <BotaoLogin>Login</BotaoLogin>
      </HeaderContainer>
    );
  }
  export default HeaderPublic;