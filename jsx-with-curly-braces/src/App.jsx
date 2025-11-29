import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name="pitter";
  const userobj={
    name:"megha",
    email:"megha@gmail.com",
    age:19
  }
  const userarr=["sam","pitter","megha"]
  let x=10;
  let y=20;
  let path="https://i.pinimg.com/736x/89/22/cb/8922cbb32be1f2d5c6ef3edd1ee26c97.jpg"
 function fruit()
 {
  return "apple"
 }

 function sum(a,b)
 {
  return a+b
 }
 function operation(a,b,ope)
 {
  let result=0;
  if(ope=="+")
  {
    return a+b

  }
  else if(ope=="-")
  {
    return a-b
  }
  else
  {
    return a*b
  }
 
 }

  return (
    <>
    <h1>{name?name:"user not found"}</h1>
    <h2>{x+y}</h2>
  <h1>{fruit()}</h1>
  <h2>{sum(10,10)}</h2>
  <h1>{operation(401,200)}</h1>
<h1>{userobj.name}</h1>
<h1>{userarr[1]}</h1>
<input type="text" value={name} />
<br />
<img src={path} alt="" />

      
    </>
  )
}

export default App
