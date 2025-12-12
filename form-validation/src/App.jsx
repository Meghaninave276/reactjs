import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
    const [nameerr,setNameerr]=useState('');
    const [passworderr,setpassworderr]=useState('');
  // const[password,setPassword]=useState('');
  
  const handlename=(e)=>{
    console.log(e.target.value);
    if(e.target.value.length>5)
    {
      setNameerr("please enter valid username, only 5 character allowed");
    }
    else{
      setNameerr('');
    }
  }
   const handlepassword=(e)=>{
    let regex=/^[A-Z0-9]+$/i
    console.log(e.target.value);
    if(regex.test(e.target.value))
    {
       setpassworderr();
      
    }
    else{
     setpassworderr("please enter valid password, only alphabet and number allowed");
    }
  }

  return (
    <>
    <input type="text" onChange={handlename} className={nameerr?"error":''} placeholder='enter name' />
    <span className='text-danger'>{nameerr && nameerr}</span>
    <br /><br />
    <input type="password" className={passworderr?"error":''}  onChange={handlepassword}  placeholder='enter password' />
    <span className='text-danger'>{passworderr && passworderr}</span>
    <br /><br />
    <button disabled={passworderr || nameerr}>login</button>

      
    </>
  )
}

export default App
