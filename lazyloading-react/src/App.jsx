import { useState,lazy,Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// import Userrss from './userrss'
const User = lazy(() => import("./User"));

function App() {
 const [load,setLoad]=useState(false)

  return (
    <>
      <h1>Lazy loading</h1>
      {
        load?<Suspense fallback={<h3>loading..</h3>}><User/></Suspense>:null
      }
      
      <button onClick={()=>setLoad(true)}>load user</button>
      
    </>
  )
}

export default App
