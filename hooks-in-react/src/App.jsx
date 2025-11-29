import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countsss from './Countsss';

function App() {
  const [count,setCount]=useState(0);
  const [data,setData]=useState(0);
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
      {/* <button onClick={()=>setCount(count+1)}>counter{count}</button>
      <button onClick={()=>setData(data+1)}>data{data}</button> */}
      <Countsss count={count} data={data}/>
      <button onClick={()=>setCount(count+1)}>counter</button>
      <button onClick={()=>setData(data+1)}>data</button>

    </>
  )
}

export default App
