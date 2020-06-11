import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from 'styled-components'
import './App.css';
import Router from './components/Router'



const App = (props) => {
  return (
    <div>
      <Router></Router>
    </div>
  );
}
export default App;
