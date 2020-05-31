import { Switch, Route, BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import HomePage from './HomePage'
import ListTripsPage from './ListTripsPage';
import Login from './Login';
import SingUp from './SingUp';
import ApplyToTrip from './ApplyToTrip';
import HomePagePrivate from './HomePagePrivate'
import CreateTripPage from './CreateTripPage';
import TripDetailsPage from './TripDetailsPage';
import DecideCandidatePage from './DecideCandidatePage'

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
        <Route exact path="/singup">
          <SingUp />
        </Route>
        <Route exact path="/trips/apply">
          <ApplyToTrip />
        </Route>
        <Route exact path="/trips/listTripsPage">
          <ListTripsPage />
        </Route>
        <Route exact path="/private">
          <HomePagePrivate />
        </Route>
        <Route path="/private/details">
          <TripDetailsPage/>
        </Route>
        <Route exact path="/private/create">
          <CreateTripPage />
        </Route>
        <Route exact path="/private/candidate/:id">
          <DecideCandidatePage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;