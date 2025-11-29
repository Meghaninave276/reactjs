import React, { useState } from 'react'

export default function Getinput() {
    const [val,setVal]=useState("");

  return (
    <div>
        <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} placeholder='enter name'/>
        <h1>{val}</h1>
        <button onClick={()=>setVal("")}>clear</button>
        
    </div>
  )
}
