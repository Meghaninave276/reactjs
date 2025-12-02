import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usrs from './Usrs'


function App() {
  const displayname=(name)=>{
    alert(name)
  }
  const getuser=()=>{
    alert("getuser")
  }
  
  

  return (
    <>
        <h1>call parent component function from child component</h1>
        <Usrs displayname={displayname} name="megha" getuser={getuser}/>
        <Usrs displayname={displayname} name="lalita" getuser={getuser}/>
        <Usrs displayname={displayname} name="gopal" getuser={getuser}/>
        <Usrs displayname={displayname} name="divyesh" getuser={getuser}/>
        
    </>
  )
}

export default App
