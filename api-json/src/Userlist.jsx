import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from 'react-router-dom';

function Userlist() {
  const [userdata,setuserdata]=useState([]);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
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
  const deleteuser=async(id)=>
  {
    let response=fetch("http://localhost:3000/users" + "/"+id,{
      method:"delete"
    });
    response= await response.json();
    if(response)
    {
      alert("data deleted");
      getusers();
    }
    console.log(id);
  }
const edituser=(id)=>{
  navigate("/edit/"+id)
}
  return (
    <>
      <div>
        <ul>
        
        </ul>
        {
        !loading?
       userdata.map((user,index)=>(
           <div key={index}>
            <table border={"1px"}>
             
              
            <tr>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td><button onClick={()=>deleteuser(user.id)}>delete</button> 
                <button onClick={()=>edituser(user.id)}>edit</button> 
                </td>
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
