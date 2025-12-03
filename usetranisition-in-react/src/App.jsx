import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTransition } from 'react'

function App() {
  const [pending,startTransition]=useTransition();
  // const [pending,setPending]=useState(false);
  const handlebutton=()=>{
    startTransition(async()=>{
         await new Promise(res=>setTimeout(res,5000));
    })
    // setPending(true);

    // setPending(false);

  }

  return (
    <>
     <h1>usetransition hooks</h1>
     {
      pending?
      <img src="https://i.pinimg.com/736x/f0/61/13/f0611323591ff0ff4268e30069382baa.jpg" alt="" />:null
     }
     <button disabled={pending} onClick={handlebutton}>click</button>
    </>
  )
}

export default App
