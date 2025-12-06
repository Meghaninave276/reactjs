import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import College from './College'
import { subjectcontext } from './Contextdata'

// import './App.css'

function App() {
  const [subjects,setSubjects]=useState("English")


  return (
    <div style={{backgroundColor:'yellow' , padding:'10px'}}>
    <subjectcontext.Provider value={subjects}>
      <select name="" value={subjects} id="" onChange={(e)=>setSubjects(e.target.value)}>
        <option value="">Select subject</option>
        <option value="Maths">Maths</option>
        <option value="English">English</option>
        <option value="C">C</option>
      </select>
      <button onClick={()=>setSubjects("")}>clear subject</button>
      <h1>context api</h1>
      
      <College/>
      </subjectcontext.Provider>
    </div>
  )
}

export default App
