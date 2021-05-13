import React, { useState, useEffect } from 'react';

import SwapiService from "../../services/swapi-service";

import './random-planet.css'

const RandomPlanet = () => {
    const [num, setNum] = useState(1);
    const [planet, setPlanet] = useState([]);

    const [count, setCount] = useState([]);

    const swapiService = new SwapiService();

    useEffect(() => {
        const id = Math.floor(Math.random()*25) + 2;
        swapiService.getPlanet(id).then( (q) => {
            setPlanet(q)
        })
    }, [num]);

    const changePlanet = (e) => {

        setNum(e.target.value)
        // setNum({
        //     num: e.target.value,
        // });

    }

    function feelOptions(length) {
        let arr = [];
        for (let i = 1; i <= length; i++) {
            arr.push(i)
        }
        return arr
    }

    return (
        <div className="random-planet jumbotron rounded">
            <img className="planet-image"
                 src="https://starwars-visualguide.com/assets/img/planets/5.jpg" />
            <div>
                <h4>{planet.name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{planet.population}</span>
                        {/*{planet && planet.map( d => <span>{d.name}</span>)}*/}

                        {/*{planet ? planet.map(item => {
                                return <span>{item.name}</span>;
                            })
                            : "Loading..."}*/}

                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{planet.rotation_period}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{planet.diameter}</span>
                    </li>
                </ul>
                <select onChange={changePlanet}>
                    {/*{count && count.map( (c, idx) => {
                        return <option key={idx} value={idx}>{idx}</option>
                    })}*/}
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                </select>
            </div>
        </div>
    )
}

export default RandomPlanet;

/*
export default class RandomPlanet extends Component {

    render() {
        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                     src="https://starwars-visualguide.com/assets/img/planets/5.jpg" />
                <div>
                    <h4>Planet Name</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>123124</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>43</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>100</span>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}*/
