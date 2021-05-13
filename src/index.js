import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import App from './components/app';

import Home from './components/home'
import RandomPlanet from './components/random-planet'
import StarShips from './components/starship-details'
import Router from "./Router";

ReactDOM.render((
    <Router />
), document.getElementById('root'));