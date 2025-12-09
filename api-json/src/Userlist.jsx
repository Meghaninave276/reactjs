import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Userlist() {
  const [userdata,setuserdata]=useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    getusers();
  },[])
  const getusers=async()=>{
    let response = await fetch("http://localhost:3000/users");
    response= await response.json();
    setuserdata(response);
    setLoading(false);


  }
  
  return (
    <>
      <div>
        {
        !loading?
       userdata.map((user,index)=>(
           <div key={index}>
            <table border={"1px"}>
              
            <tr>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
              </tr>
            </table>
           
           </div>
           
            

          )):<h1>Data Loading...</h1>

        }
      </div>
    </>
  )
}

export default Userlist
