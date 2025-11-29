import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount]=useState(0);
    const [rcount,setrCount]=useState(10);
  return (
    <div>
        <h1>counter:{count}</h1>
        <h2>rcounter:{rcount}</h2>
        <button onClick={()=>setCount(count+1)}>update counter</button>
        <button onClick={()=>setrCount(rcount-1)}>rcounter</button>
    </div>
  )
}
