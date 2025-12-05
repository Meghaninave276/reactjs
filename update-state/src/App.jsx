import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Updates from './Updates'

function App() {
  // const [data, setData] = useState({
  //   name:"megha",
  //   address:{
  //     city:"surat",
  //     country:"india"
  //   }
  // });
  // const handlename=(value)=>{
  //   data.name=value;
   
  //   console.log(value)
  //   setData({...data});

  // }

  // const handlecity=(city)=>{
  //   data.address.city=city;
  //   setData({...data,address:{...data.address,city}});
  //   console.log(city)
    

  // }
  return (
    <>
      <h1>update state objects</h1>
      {/* <h2>{name}</h2>
      <button onClick={handlename}>update</button> */}
      <Updates/>
      {/* <input type="text" placeholder='update name' onChange={(e)=>handlename(e.target.value)}/>
      <input type="text" placeholder='update city' onChange={(e)=>handlecity(e.target.value)}/>
    

      <h2>{data.name}</h2>
      <h2>{data.address.city}</h2>
      <h2>{data.address.country}</h2> */}
    </>
  )
}

export default App
