import React from 'react';
import App from "./components/app";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "./components/home";
import RandomPlanet from "./components/random-planet";
import StarShips from "./components/starship-details";

const Router = () => {
    return (
        <BrowserRouter>
            <App>
                <Switch>
                    <Redirect exact from="/" to="/home" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route path="/randomplanet" component={RandomPlanet} />
                    <Route path="/starships" component={StarShips} />
                </Switch>
            </App>
        </BrowserRouter>
    )
}

export  default Router;
