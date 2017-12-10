import React, { Component } from 'react';
import './about.css';


export default class About extends Component{


    render(){

        return(
            <div className="about">
                <h1>snabb fakta:</h1>
                <div>
                    <h4>Jag gillar att:</h4>
                    <p><span>klättra</span></p>
                    <p><span>segla</span></p>
                    <p><span>silversmida</span></p>
                    <p><span>odla och plantera snygga växter</span></p>
                    <p><span>bygga och skapa saker</span></p>
                </div>
                <div>
                    <h4>Kontakt och mer info:</h4>
                    <p><span>github</span></p>
                    <p><span>linkedIn</span></p>
                    <p><span>mail</span></p>
                    <p><span>webshop</span></p>
                </div>
            </div>
        );
    }
}
