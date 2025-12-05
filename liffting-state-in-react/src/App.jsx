import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Adduser from './Adduser'
import Displayuser from './Displayuser'

function App() {
    const [user,setUser]=useState("");
 

  return (
    <>
    <Adduser setUser={setUser}/>
    <Displayuser user={user}/>
    </>
  )
}

export default App
