import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <NavLink exact to='/home'>Star DB</NavLink>
            </h3>
            <ul className="d-flex">
                <li><NavLink to='/randomplanet'>Random planets</NavLink></li>
                <li><NavLink to='/starships'>StarShips</NavLink></li>
                {/*<li>
                    <a href="#">People</a>
                </li>*/}
                {/*<li>
                    <a href="#">Planets</a>
                </li>*/}
                {/*<li>
                    <a href="#">Starships</a>
                </li>*/}
            </ul>
        </div>
    )
}

export default Header;