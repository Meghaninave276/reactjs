import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'

function App() {
  

  return (
    <>
    <Link to="/"><h1>Home</h1></Link>
    <Link to="/about"><h1>About</h1></Link>
    <Link to="/login"><h1>Login</h1></Link>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
   
      
    </>
  )
}

export default App
