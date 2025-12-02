import React, { useEffect } from 'react'

export default function Counter({count,data}) {
    useEffect(()=>{
        console.log("mounting phase only")

    },[]);
      useEffect(()=>{
        console.log("update phase only")

    },[count]);


useEffect(()=>{
       return ()=>{
        console.log("unmount phase only");
       }

    },[count]);


  return (
    <div>
        <h1 style={{color:"black", background:"red"}}>counter value{count}</h1>
        <h1>data value{data}</h1>
    </div>
    
  )
}
