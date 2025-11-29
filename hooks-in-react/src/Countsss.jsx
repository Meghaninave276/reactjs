import React, { useEffect } from 'react'

export default function Countsss({count,data}) {
    const handlecount=()=>{
        console.log("handle")
    }
    const handledata=()=>{
        console.log("handledata called");
    }
    useEffect(()=>{
        handlecount();

    },[count])
    useEffect(()=>{
        handledata();
    },[data])
     useEffect(()=>{
        
        handledata();
    },[count,data])
    
  return (
    <div>
        <h1>counter component{count}</h1>
        <h1>data:{data}</h1>
    </div>
  )
}
