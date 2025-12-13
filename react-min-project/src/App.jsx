import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const colors=JSON.parse( localStorage.getItem("color"));
  const [r,setR]=useState(colors && colors.r?colors.r:0);
  const [g,setG]=useState(colors && colors.g?colors.g:0);
  const [b,setB]=useState(colors && colors.b?colors.b:0);
  const save=()=>{
   
    localStorage.setItem("color",JSON.stringify({r,g,b}));
     console.log("save");
  }
 

  return (
    <>
      <h1>Code mixer</h1>
      <div style={{backgroundColor:'rgb('+r+', '+g+', '+b+')', height:200, width:200}}>

      </div>
      <label htmlFor="">red</label>
      <input type="range" value={r} onChange={(e)=>setR(e.target.value)} min={0} max={255}/>
      <br /><br />
      <label htmlFor="">green</label>
      <input type="range" value={g} onChange={(e)=>setG(e.target.value)} min={0} max={255}/>
      <br /><br />
      <label htmlFor="">blue</label>
      <input type="range" value={b} onChange={(e)=>setB(e.target.value)} min={0} max={255}/>
      <br /><br />
      <button onClick={save}>save color combination</button>
    </>
  )
}

export default App
