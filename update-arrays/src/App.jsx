import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [data,setData]=useState(["megha","lalita","gopal","divyesh"]);
const handleuser=(name)=>{
data[data.length-1]=name;
setData([...data]);
console.log(data)

}
let [datadetails,setdataDetails]=useState([
 
   {
    name:"megha",
    age:20
  },
   {
    name:"lalita",
    age:38
  },
   {
    name:"gopal",
    age:46
  },
   {
    name:"divyesh",
    age:16
  },
])

const handleage=(age)=>{
  datadetails[datadetails.length-1].age=age;
  console.log(data)
  setdataDetails([...datadetails]);


}
  return (
    <>
     <h1>update array</h1>
     <input type="text" onChange={(e)=>handleuser(e.target.value)} placeholder='enter last user length' />
    
    {
      data.map((item,index)=>(
      <h3 key={index}>{item}</h3>
      ))

    }
    <hr />
    <input type="number" onChange={(e)=>handleage(e.target.value)} placeholder='enter last user age' />
    {
      datadetails.map((i,index)=>(
        <h4 key={index}>{i.name}:{i.age}</h4>

      )

      )
    }
    </>
  )
}

export default App
