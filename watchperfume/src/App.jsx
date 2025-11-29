import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './Register/Register'

function App() {
 

  return (
    <>
        <Route path="/" element={< Register/>} />
    </>
  )
}

export default App
