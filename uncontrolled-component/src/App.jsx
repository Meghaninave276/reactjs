
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const users=useRef();
  const passwords=useRef();
  const handleform=(e)=>{
    e.preventDefault();
    const user=document.querySelector("#user").value;
    const password=document.querySelector("#password").value;
    console.log(user,password);
  }
    const handleformref=(e)=>{
    e.preventDefault();
    // console.log("hndle");
   const user=users.current.value;
   const password=passwords.current.value;
     console.log("hndle",user,password);
  }
  

  return (
    <>
    <h1>uncontrolled component</h1>
    <form  onSubmit={handleform}>
      <input type="text" id='user' placeholder='enter user name' />
      <br /><br />
      <input type="password" id='password' placeholder='enter user password' />
      <br /><br />
      <button>submit</button>
    </form>
    <hr />
     <h1>uncontrolled component with useref</h1>
    <form  onSubmit={handleformref}>
      <input type="text" id='user' ref={users} placeholder='enter user name' />
      <br /><br />
      <input type="password" id='password' ref={passwords} placeholder='enter user password' />
      <br /><br />
      <button>submit with ref</button>
    </form>
    
    </>
  )
}

export default App
