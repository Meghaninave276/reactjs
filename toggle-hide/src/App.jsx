import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User';

function App() {
const [display,setDisplay]=useState(true);

  return (
    <>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
    {/* {
      display?<h1>megha</h1>:<h1>no user</h1>
    } */}
    {
      display?<User/>:null
    }
  
    </>
  )
}

export default App
