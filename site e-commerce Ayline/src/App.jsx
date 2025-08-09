import { useState } from 'react'
import Logo from './assets/logo-lumiere.png'
import './style.css'

function App() {

  return (
    <>
      <header id='header-page'>
        <div id='header-div'>
          <img src={Logo} alt="logo Lumière&Foi" />
        </div>
      </header>
    </>
  )
}

export default App
