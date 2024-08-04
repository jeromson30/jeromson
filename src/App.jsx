import { useState } from 'react'
import photoProfil from './assets/profil.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope, faJ } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareInstagram, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
      <div className="lines">
        <div className="line"></div>
      </div>
      <div className='logo'><FontAwesomeIcon icon={faJ} /></div>
       <nav className="menu">
          <a>Accueil</a>
          <a>Compétences</a>
          <a>Projets</a>
       </nav>
      </header>
      <main>
      <div></div>
      <div className='Profil'>
        <h1>Jérôme CORSO</h1>
        <img src={photoProfil} className='photoProfil' />
        <sup>Web Developper</sup>
        <div className="contactIcons">
        <FontAwesomeIcon icon={faSquareEnvelope} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faSquareGithub} />
        <FontAwesomeIcon icon={faSquareInstagram} />
        </div>
      </div>
      <section>
        <h2>Under construction</h2>
      </section>
      
      </main>
      <footer>

      </footer>

      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
      <div class="firefly"></div>
    </>
  )
}

export default App
