import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countsss from './Countsss';

function App() {
  const [count,setCount]=useState(0);
  const [data,setData]=useState(0);
  const [display,setDisplay]=useState(true);
  // useEffect(()=>{
  //   // callonce();
  //    counterfun();

  // },[count,data])
  // useEffect(()=>{
  //   callonce();
  // },[])
  // function callonce()
  // {
  //   console.log("callonce fun called")
  // }
   
  // function counterfun()
  // {
  //   console.log(count);
  //   console.log(data)
  // }



  return (
    <>
      <h1>useeffect</h1>
      <div>
        {
          display?<Countsss count={count} data={data}/>:null
        }
      </div>
      {/* <button onClick={()=>setCount(count+1)}>counter{count}</button>
      <button onClick={()=>setData(data+1)}>data{data}</button> */}
      
      <button onClick={()=>setCount(count+1)}>counter</button>
      <button onClick={()=>setData(data+1)}>data</button>
      <button onClick={()=>setDisplay(!display)}>toggle</button>

    </>
  )
}

export default App
