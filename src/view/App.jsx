import { useState } from 'react'

import Header from './Header.jsx'
import Carousels from './Carroussels.jsx'
import '/src/css/reset.css'
import '/src/css/color.css'
import '/src/css/style.css'
import '/src/css/header.css'
import '/src/css/portrait.css'
import '/src/css/landscape.css'
import '/src/css/carousel.css'

function App() {

  return (
   <>
    <Header />
    <Carousels></Carousels>
   </>
  )
}

export default App
