import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from 'styled-components'
import HeaderPublic from './HeaderPublic';

const ListTripsPage = (props) => {
    return (
      <div>
        <HeaderPublic></HeaderPublic>
        <h1>list trip public</h1>
      </div>
    );
  }
  export default ListTripsPage;