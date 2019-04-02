import React, { Component } from "react";
import "./App.css";
import LandingPage from "./components/landingPage/LandingPage";
import RegisterPage from "./components/landingPage/RegisterPage";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/landingPage/Login";
import SpecialsList from "./components/specials/SpecialsList";
import Profile from "./components/profile/Profile";
import DisplayTrips from "./components/myTrips/DisplayTrips";
import { GoogleMap } from "react-google-maps";
import GoogleMaps from "./components/google/GoogleMaps";
import Navigation from './services/Navigation'
// import ToDo from "./components/myTrips/ToDo";

class App extends Component {
  render() {
    return (
      <Navigation/>
      
    );
  }
}

export default App;
