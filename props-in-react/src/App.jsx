import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usr from './Usr'
import College from './college'
import Click from './Click'


function App() {
//  let  username="xyz";
//  let age=19;

  
//   let name="megha"
let user={
  name:"megha",
  age:19,
  qualification:"ty bca",
  email:"megha@gmail.com"
}
let user1={
  name:"xyz",
  age:29,
  qualification:"ty bca",
  email:"xyz@gmail.com"
}
let user2={
  name:"oyz",
  age:39,
  qualification:"ty bca",
  email:"oyz@gmail.com"
}
let user3={
  name:"gyz",
  age:49,
  qualification:"ty bca",
  email:"gyz@gmail.com"
}

let collegearr=["drb","sdj","acc","iit","nit","mit"]
const [student,setStudent]=useState("");
  return (
    <>
    {/* <h2>{name}</h2> */}
    {student && <Click name={student}/>}
    <button onClick={()=>setStudent("hjbj")}>update stud</button>
      {/* <Usr name={name} username={username} age={age}/> */}
      <Usr user={user} user1={user1} user2={user2} user3={user3}/>
      <College collegearr={collegearr[0]} />
      <College collegearr={collegearr[1]} />
      <College collegearr={collegearr[2]} />
      <College collegearr={collegearr[3]} />
    
    </>
  )
}

export default App
