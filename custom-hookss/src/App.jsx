import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usetoggle from './Usetoggle'

function App() {
  const [value,togglevalue]=Usetoggle(true);
  const [data,setDate]=Usetoggle(true);
  console.log(value)

  return (
    <div>
    <button onClick={togglevalue}>toggle</button>
    <button onClick={()=>togglevalue(false)}>hide</button>
    <button onClick={()=>togglevalue(true)}>show</button>
     {
      value? <h1>custom hooks</h1>:null
     }
     <hr />
      <button onClick={setDate}>toggle</button>
    <button onClick={()=>setDate(false)}>hide</button>
    <button onClick={()=>setDate(true)}>show</button>
    {
      data? <h1>second heading</h1>:null
    }

    </div>
  )
}

export default App
