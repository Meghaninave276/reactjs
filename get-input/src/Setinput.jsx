import React, { useEffect, useState } from 'react'

export default function Setinput() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [surname,setSurname]=useState("")
    useEffect(()=>{
        console.log("name",name);
        console.log("email",email);
        console.log("surname",surname);
        
    },[name,email,surname])
  return (
    <div>
        <input type="text"  placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='surname' value={surname} onChange={(e)=>setSurname(e.target.value)}/>
    </div>
  )
}
