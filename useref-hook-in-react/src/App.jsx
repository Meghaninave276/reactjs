import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const inputref=useRef(null);
  const inputhandler=()=>{
    console.log(inputref)
    inputref.current.focus();
    inputref.current.style.color='red'
    inputref.current.placeholder='enter password'
    inputref.current.value='123'
  }
  
const togglehandler=()=>{
    if( inputref.current.style.display!='none')
    {
      inputref.current.style.display='none'

    }
    else
    {
      inputref.current.style.display='inline'
    }

}

  return (
    <>
    <button onClick={togglehandler}>toggle</button>
    <input type="text" ref={inputref} placeholder='user name' />
    <button onClick={inputhandler}>focus on input</button>
     
    </>
  )
}

export default App
