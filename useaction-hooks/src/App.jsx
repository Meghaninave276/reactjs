import { useActionState, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handlesubmit=async(prevdata,formdata)=>{
    let name=formdata.get('name');
    let password=formdata.get('password');
    await new Promise((res)=>setTimeout(res,2000));
    console.log("first",name,password);
    if(name && password){
      return{message:"data submitted",name,password}
    }
    else{
      return{error:"failed to submit"}
    }
  }
  const [data,action,pending]=useActionState(handlesubmit,undefined);

 

  return (
    <>
     <h1>useaction</h1>
     <form action={action}>
      <input type="text" defaultValue={data?.name} placeholder='enter name' name='name' />
      <br /><br />
       <input type="password" defaultValue={data?.password} placeholder='enter password' name='password' />
      <br /><br />
      <button disabled={pending}>submit</button>
      <br />
      {
        data?.error && <span style={{color:"red"}}>{data?.error}</span>
      }
      {
         data?.message && <span style={{color:"green"}}>{data?.message}</span>
      }

     </form>
     <h3>name:{data?.name}</h3>
     <h3>password:{data?.password}</h3>
    </>
  )
}

export default App
