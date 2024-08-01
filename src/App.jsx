import { useState } from 'react'
import photoProfil from './assets/profil.jpg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
       <nav id="menu">
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
      </div>
      <h2>Under construction</h2>
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
