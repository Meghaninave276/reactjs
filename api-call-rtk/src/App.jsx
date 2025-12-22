import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Products from './Products/Products'
import Header from './Header'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cartlist from './Cartlist/Cartlist'




function App() {
  

  return (
    <>
   <BrowserRouter>
    <Header/>
<Routes>
  <Route path='/' element={<Products/>}/>
  <Route path='/cart' element={<Cartlist/>}/>
</Routes>
   </BrowserRouter>
    </>
  )
}

export default App
