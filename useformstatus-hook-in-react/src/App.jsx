import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useFormStatus} from "react-dom"
import './App.css'
import Forms from './forms'

function App() {
  // const handlesubmit=async()=>{
  //   await new Promise(res=>setTimeout(res,2000));
  //   console.log("form submitted");
  // }
  // function Customerform()
  // {
  //   const {pending}=useFormStatus();
  //   console.log(pending);
  
  //   return(
  //     <div>
  //        <input type="text" placeholder='enter name' />
  //     <br /><br />
  //     <input type="password" placeholder='enter password' />
  //        <br /><br />
  //        <button disabled={pending}>{pending?"submitting":"submit"}</button>
  //     </div>
  //   )

  // }

  return (
    <>
    {/* <h1>useformstatus</h1>
    <form action={handlesubmit}>
      <Customerform/>
     
    </form>
      */}
      <Forms/>
      
    </>
  )
}

export default App
