import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount]=useState(1);
    const add=()=>{
        setCount(count+1);
    }
    const sub=()=>{
       setCount(count-1);

    }
    const mul=()=>{
       let temp=count;
       temp*=2;
       setCount(temp);
    }
    const divison=()=>{
      let temp=count;
      temp/=2;
      setCount(temp);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={add} >add</button>
        <button onClick={sub} >sub</button>
        <button onClick={mul} >mul</button>
        <button onClick={divison} >div</button>

    </div>
  )
}
