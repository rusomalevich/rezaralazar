import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header, Card } from './components'

function App() {

  return (
    <div className='body'>

      <Header />
      <main>
        <Card />
      </main>

    </div>
  )
}

export default App
