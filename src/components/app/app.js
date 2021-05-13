import React from 'react';
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

const App = ({children}) => {
    return (
        <>
            <Header />
            {children}
            {/*<RandomPlanet />*/}

            {/*<div className="row mb2">
                <div className="col-md-6">
                    <ItemList />
                </div>
                <div className="col-md-6">
                    <PersonDetails />
                </div>
            </div>*/}
        </>
    )

}

export default App;