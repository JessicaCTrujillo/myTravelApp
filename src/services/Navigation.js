import React from "react";
import LandingPage from "../components/landingPage/LandingPage";
import RegisterPage from "../components/landingPage/RegisterPage";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "../components/landingPage/Login";
import SpecialsList from "../components/specials/SpecialsList";
import Profile from "../components/profile/Profile";
import DisplayTrips from "../components/myTrips/DisplayTrips";
import GoogleMaps from "../components/google/GoogleMaps";
import ToDo from "../components/myTrips/ToDo";
import { renderComponent } from "recompose";
const Navigation = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={Login} />
        <Route path="/specials" component={SpecialsList} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/displayTrips" component={DisplayTrips} />
        <Route path="/map" component={GoogleMaps} />
        <Route path="/toDo" component={ToDo} />
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
