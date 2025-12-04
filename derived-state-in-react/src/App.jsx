import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Customer from './Customer'

function App() {
//   const [users,setUsers]=useState([]);
//   const [user,setUser]=useState('');
// const handleAdduser=()=>{
//   setUsers([...users,user]);
// }
 
// const total=users.length;
// const last=users[users.length-1];
// const unique=[...new Set(users)].length;
  return (
    <>
      
      {/* <h1>derived state</h1>
      <h2>Total user:{total}</h2>
      <h2>Last user:{last}</h2>
      <h2>Unique total user:{unique}</h2>
      <input type="text" onChange={(e)=>setUser(e.target.value)} placeholder='add new user' />
      <button onClick={handleAdduser}>Add user</button>
      {
        users.map((i,index)=>(
          <h4 key={index}>{i}</h4>

        ))

      } */}
      <Customer/>
    </>
  )
}

export default App
