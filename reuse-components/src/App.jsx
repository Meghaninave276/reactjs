import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rs from '../Rs'
import Clock from './Clock'

function App() {
  const [color,setColor]=useState("red");
  

  return (
    <>
    <select onChange={(e)=>setColor(e.target.value)} name="" id="">
      <option value={"green"}>green</option>
      <option value={"red"}>red</option>
      <option value={"yellow"}>yellow</option>
    </select>
    {/* <Rs/> */}
    <Clock color={color}/>
      
    </>
  )
}

export default App
