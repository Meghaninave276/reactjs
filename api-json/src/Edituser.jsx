import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Edituser() {
     const [name,setName]=useState("");
      const [age,setAge]=useState();
      const [email,setEmail]=useState("");
      const navigate=useNavigate();
         
  const {id}=useParams();

  const url = `http://localhost:3000/users/${id}`;
  console.log(id);

  useEffect(()=>{
    getuserdata();


  },[])
  const getuserdata=async()=>{
    console.log(id);
 
    let response=await fetch(url);
    response=await response.json();
    console.log(response);
    setName(response.name);
    setAge(response.age);
    setEmail(response.email); 
  }

  const updateusersdata=async()=>{
    console.log(name,email,age);
    let response=await fetch(url,{
      method:'Put',
      body:JSON.stringify({name,email,age})
    });
    response=await response.json()
    console.log(response);
    if(response)
{
  alert("user data updated successfully!");
  navigate("/");
}    
  }
  return (
    <div>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder='enter name'/>
        <br /><br />
        <input type="number" onChange={(e)=>setAge(e.target.value)} value={age} placeholder='enter age'/>
        <br /><br />
        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='enter email'/>
        <br /><br />
        <button onClick={updateusersdata}>update user</button>
     
    </div>
  )
}
