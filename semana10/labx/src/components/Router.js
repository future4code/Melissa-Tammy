import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from 'styled-components'
import HomePage from './HomePage'
import CreateTripPage from './CreateTripPage';
import ListTripsPage from './ListTripsPage';
import TripDetailsPage from './TripDetailsPage';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from './Login';

const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/trips/create">
          <CreateTripPage />
        </Route>
        <Route exact path="/trips/listTripsPage">
          <ListTripsPage />
        </Route>
        <Route path="/trips/details">
          <TripDetailsPage/>
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}
export default Router;