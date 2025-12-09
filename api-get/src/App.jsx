import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [userdata,setuserdata]=useState([]);
  useEffect(()=>{
    getusers();
  },[])
  const getusers=async()=>{
    let response = await fetch("https://dummyjson.com/users");
    response= await response.json();
    setuserdata(response.users);


  }
  
  return (
    <>
      <div>
        {
       userdata.map((user,index)=>(
           <div key={index}>
           <ul style={{display:"flex", justifyContent:"space-between", textDecoration:"none",listStyle:"none", width:"800px",height:"40px"}}>
            <li>  firstname:{user.firstName}</li>
            <li>  lastname:{user.lastName}</li>
            <li>  age:{user.age}</li> 
            <li>  email:{user.email}</li> 
            <li>  haircolor:{user.hair.color}</li>
           </ul>
           </div>
           
            

          ))
        }
      </div>
    </>
  )
}

export default App
