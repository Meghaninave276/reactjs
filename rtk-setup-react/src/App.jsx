import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Product from './Product/Product'
import {useDispatch} from 'react-redux'
import { clearitem } from './redux/slice'


function App() {
  const dispatch=useDispatch();
 

  return (
    <>
    
 
     <Header/>
     <button className='add-cart' onClick={()=>dispatch(clearitem())}>Clear</button>
 <Product/>
    </>
  )
}

export default App
