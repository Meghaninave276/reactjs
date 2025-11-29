import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>counter</button>
   {
    count==0?<h1>condition 0</h1>
    :count==1?<h1>condition 1</h1>
     :count==2?<h1>condition 2</h1>
     :count==3?<h1>condition 3</h1>
     :count==4?<h1>condition 4</h1>
     :count==5?<h1>condition 5</h1>
     :count==6?<h1>condition 6</h1>
     


     :<h1>other</h1>
   }
    </>
  )
}

export default App
