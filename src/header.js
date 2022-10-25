import React from 'react';
import './styles.css';
import './card.css';
import './w3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBars, faGamepad} from '@fortawesome/free-solid-svg-icons'
import { Profile } from './login';


const navBar = (
    <nav className="w3-bar w3-left-align w3-large w3-red">
        <button className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white" title="Toggle Navigation Menu"><FontAwesomeIcon icon={faBars} /></button>
        <button className="w3-bar-item w3-button w3-padding-large w3-hover-white" id="LoginButton"><FontAwesomeIcon icon={faHouse} /> Inicio</button>
        <button className="w3-right w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"><FontAwesomeIcon icon={faGamepad} /> Nosotros</button>
        <Profile/>
        
    </nav>
)

const logo = (
    <div className='logo'>
        <img className="centerImage" src="Imagenes/Unidex.png" alt="UnidexLogo" />
        <img className="centerImage" src="Imagenes/Pokeballs icon.png" alt="Pokeballs" /> 
    </div>
)

function _Header(){
    return(
    <header className="header1">
        {navBar}
        {logo}
    </header>
    )
}

export default function Header(){
    return(
        _Header()
        )
}