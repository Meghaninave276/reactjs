import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const emptydata={
  name:"",
  email:"",
  password:"",
  city:"",
  address:""
}
const reducer=(state,action)=>{
  return {...state,[action.type]:action.val}

}
function App() {
  const [state,dispatch]=useReducer(reducer,emptydata);
  

  return (
    <>
    <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:"name"})} placeholder='enter a name' />
    <br /><br />
    <input type="password" onChange={(e)=>dispatch({val:e.target.value,type:"password"})} placeholder='enter a password' />
    <br /><br />
    <input type="email" onChange={(e)=>dispatch({val:e.target.value,type:"email"})} placeholder='enter a email' />
    <br /><br />
    <input type="city" onChange={(e)=>dispatch({val:e.target.value,type:"city"})} placeholder='enter a city' />
    <br /><br />
    <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:"address"})} placeholder='enter a address' />
    <br /><br />
    <ul>
      <li>name:{state.name}</li>
      <li>password:{state.password}</li>
      <li>email:{state.email}</li>
      <li>city:{state.city}</li>
      <li>address:{state.address}</li>
    </ul>
  
    <button onClick={()=>console.log(state)}>add deatils</button>
    </>
  )
}

export default App
