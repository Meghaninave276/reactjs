import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';


function App() {
  const [fruit,setFruit]=useState("apple");
  const [count,setCount]=useState("")

  const handlefruit=()=>{
    setFruit("banana");
  }
 

  return (
    <>
    <h1>{fruit}</h1>
    <button onClick={handlefruit}>change</button>
    <Counter/>
    
    </>
  )
}

export default App
