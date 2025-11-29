import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Clgs from './Clgs'


function App() {
const clgdata=[
  {
    name:"iit",
    city:"surat",
    website:"iit.com"
  },
  {
    name:"nit",
    city:"vapi",
     website:"nit.com",
     student:[
      {
        name:"megha",
        age:19,
        email:"megha.com"
      },
      {
        name:"esha",
        age:20,
        email:"esha.com"
      },
      {
        name:"misha",
        age:21,
        email:"misha.com"
      },
     ]
  },
  {
    name:"svnit",
    city:"vesu",
     website:"svnit.com",
      student:[
      {
        name:"megha",
        age:19,
        email:"megha.com"
      },
      {
        name:"esha",
        age:20,
        email:"esha.com"
      },
      {
        name:"misha",
        age:21,
        email:"misha.com"
      },
     ]
  },
  {
    name:"pdpu",
    city:"mumbai",
     website:"pdpu.com",
      student:[
      {
        name:"megha",
        age:19,
        email:"megha.com"
      },
      {
        name:"esha",
        age:20,
        email:"esha.com"
      },
      {
        name:"misha",
        age:21,
        email:"misha.com"
      },
     ]
  },
  {
    name:"pit",
    city:"delhi",
     website:"pit.com",
      student:[
      {
        name:"megha",
        age:19,
        email:"megha.com"
      },
      {
        name:"esha",
        age:20,
        email:"esha.com"
      },
      {
        name:"misha",
        age:21,
        email:"misha.com"
      },
     ]
  },
]

  return (
    <>
     <h1>nested looping</h1>
     {
      clgdata.map((clg,index)=>(
        <div key={index}>
         <Clgs clg={clg}/>

        </div>
        
      ))
     }
      
    </>
  )
}

export default App
