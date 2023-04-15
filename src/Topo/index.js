
import React from 'react';
import img from '../assets/logo.png';
import './style.css';
import { Link } from 'react-router-dom'

export default function Topo() {
    return(
        <header>
            <img src={img}></img>

            <div className="nav"> 
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sabores">Sabores</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>   
                </div>
         
         </header>
    )
}