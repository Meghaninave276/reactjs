import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Userinput from './Userinput';

function App() {
  const inputref=useRef(null);
  const updateinput=(e)=>{
    e.preventDefault();
    inputref.current.value="100";
    inputref.current.focus();
    inputref.current.style.color="red"
    inputref.current.style.background="green"
    console.log("hello");

  }

  return (
    <>
      <h1>forward red</h1>
      <Userinput ref={inputref}/>
      <button onClick={updateinput}>update input field</button>
    </>
  )
}

export default App
