import React from 'react'
import { useParams } from 'react-router-dom'

export default function Userdetails() {
    const paramsdata=useParams();
    console.log(paramsdata);
   
  return (
    <div>
        <h1>Users details</h1>
        <h2>user id is:{paramsdata.id}</h2>
        
    </div>
  )
}
