import React, { useState } from 'react'

export default function Cons() {
    const [name,setName]=useState("");
    const [password,setpassword]=useState("");
    const [email,setEmail]=useState("");
  return (
    <div>
        <form action="">
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter name' />
            <br /> <br />
            <input type="password" value={password}onChange={(e)=>setpassword(e.target.value)} placeholder='enter password' />
            <br /> <br />
            <input type="email" value={email}onChange={(e)=>setEmail(e.target.value)} placeholder='enter email' />
            <br /> <br />
            <button>submit</button>
            <button onClick={()=>{setEmail(""),setName(""),setpassword("")}}>clear</button>
            <h3>{name}</h3>
            <h3>{password}</h3>
            <h3>{email}</h3>
            
        </form>
    </div>
  )
}
