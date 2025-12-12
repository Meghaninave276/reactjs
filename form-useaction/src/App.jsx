import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useActionState } from 'react'

function App() {
  let regex=/^[A-Z0-9]+$/i
  const handlelogin=(prev,data)=>{
    
    let name=data.get('name');
    let password=data.get('password');
    if( !name || name.length>5)
    {
      return {error:"name cannot be empty and name should not contain more than five char",name,password}


    }
    else if(!regex.test(password))
    {
      return {error:"password can  contain only number and alphabets",name,password}


    }
    else
    {
      return {msg:"login successful",name,password}

    }

  }

const [data,action,pending]=useActionState(handlelogin)
  return (
    <>
    <div>
      {
        data?.msg &&
        <span>{data?.msg}</span>
      }
       {
        data?.error &&
        <span>{data?.error}</span>
      }
    </div>
    <form action={action}>
      <input type="text" defaultValue={data?.name} name='name' placeholder='enter username' />
      <br /><br />
       <input type="password"  defaultValue={data?.password}  name='password' placeholder='enter password' />
      <br /><br />
      <button >login</button>
    </form>
      
    </>
  )
}

export default App
