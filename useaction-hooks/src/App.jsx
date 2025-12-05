import { useActionState, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data,action,pending]=useActionState([])
 

  return (
    <>
     <h1>useaction</h1>
     <form action={action}>
      <input type="text" placeholder='enter name' name='name' />
      <br /><br />
       <input type="password" placeholder='enter password' name='password' />
      <br /><br />
      <button>submit</button>

     </form>
    </>
  )
}

export default App
