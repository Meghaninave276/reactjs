import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'

function App() {
  

  return (
    <>
 <BrowserRouter>
 <Link to="/">Home</Link>
 <Link to="/about">about</Link>
 <Link to="/contact">contact</Link>
 <Routes>
  <Route path='/' element={<h1>home</h1>}/>
  <Route path='/about' element={<h1>about</h1>}/>
  <Route path='/contact' element={<h1>contact</h1>}/>
 </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
