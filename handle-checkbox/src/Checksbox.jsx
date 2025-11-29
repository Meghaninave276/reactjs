import React from 'react'
import { useState } from 'react'

export default function Checksbox() {
    const [skills,setSkills]=useState([]);
    const handleskills=(event)=>{
        console.log(event.target.value,event.target.checked);
        if(event.target.checked)
        {
            setSkills([...skills,event.target.value])
        }
        else
        {
             setSkills([...skills.filter((item)=>item!=event.target.value)])

        }
        
    }
  return (
    <div>
        <div>
        <h3>select your skills</h3>
        <input type="checkbox" onChange={handleskills} id='html' value="html"/>
        <label htmlFor="html">html</label>
        <br />
        <input type="checkbox" onChange={handleskills} id='css' value="css"/>
        <label htmlFor="css">css</label>
        <br />
        <input type="checkbox" onChange={handleskills} id='js' value="js"/>
        <label htmlFor="js">js</label>
        <br />
    </div>
    <h1>{skills.toString()}</h1>
    </div>
   
  )
}
