import React from 'react';
import './Header.css';


export default function Header(props){

    return(
        <div className="header">
            <div className="header-links">
                <a title='Home' onClick={() => props.goTo('home')}>Home</a>
                <a title='Projects' onClick={() => props.goTo('projects')}>Projects</a>
                <a title='About' onClick={() => props.goTo('about')}>About</a>
            </div>
        </div>
    );
}