import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope, faJ } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareInstagram, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

import '../App.css'


function Header() {
return (
    <header className="lines backdrop-blur-sm bg-white/30">
            <div className="line"></div>
        <div className='logo'><FontAwesomeIcon icon={faJ} /></div>
        <nav className="menu">
            <a>Accueil</a>
            <a>Compétences</a>
            <a>Projets</a>
        </nav>
     </header>
)}

export default Header