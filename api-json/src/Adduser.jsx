import React, { useState } from 'react'

export default function Adduser() {
    const [name,setName]=useState("");
    const [age,setAge]=useState();
    const [email,setEmail]=useState("");

    const createuser=async()=>{
        console.log(name,email,age);
        let response=await fetch("http://localhost:3000/users",{
          method:'Post',
          headers: {
        "Content-Type": "application/json"
      },
          body:JSON.stringify({name,age,email})
        })
      response= await response.json()
      if(response)
      {
        alert("new user added");

      }
        
    }
  return (
    <div>
        <h1>Add new user</h1>
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='enter name'/>
        <br /><br />
        <input type="number" onChange={(e)=>setAge(e.target.value)} placeholder='enter age'/>
         <br /><br />
        <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='enter email'/>
         <br /><br />
         <button onClick={createuser}>Add user</button>
    </div>
  )
}
