import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';


export default function Header() {
    return (
        <div className="header">
            <div className="header-links">
                <NavLink className="link" to="/">Home</NavLink>
                <NavLink className="link" to="/projects">Projects</NavLink>
                <NavLink className="link" to="/about">About</NavLink>
            </div>
        </div>
    )
}


