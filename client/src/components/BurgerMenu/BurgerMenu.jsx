import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

export default function BurgerMenu(){

    return (
        <div className="menu">
            <input type="checkbox" id="burger-checkbox" className="burger-checkbox"/>
            <label htmlFor="burger-checkbox" className="burger"></label>
            <ul className="menu-list">
                <li><Link to="/" className="menu-item">Group</Link></li>
                <li><Link to="/teams" className="menu-item">Teams</Link></li>
                <li><Link to="/pilots" className="menu-item">Pilots</Link> </li>
            </ul>
        </div>
    );
};

