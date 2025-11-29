import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const fruit=(name)=>
  {
    alert(name)

  }

function App() {
const fruit=(name)=>
  {
    alert(name)

  }

  return (
    <>
     <button onClick={()=>fruit("apple")}>apple</button>
     <button onClick={()=>fruit("banana")}>banana</button>
    </>
  )
}

export default App
