import React, { useState } from 'react'

export default function Updates() {
    const [data,setDate]=useState({
        name:"lalita",
        address:{
            city:"vapi",
            country:"india"
        }
    })
    const handlename=(name)=>{
        data.name=name;
        setDate({...data});

    }
    const handlecity=(city)=>{
        data.address.city=city;
        setDate({...data,address:{...data.address,city}});
    }
  return (
    <div>
         
        <input type="text" onChange={(e)=>handlename(e.target.value)} placeholder='update name'/>
        <select name="" id="" onChange={(e)=>handlecity(e.target.value)}>
            <option value="surat">surat</option>
            <option value="vapi">vapi</option>
            <option value="daman">daman</option>
            <option value="mumbai">mumbai</option>
      
        </select>
        <h2>name:{data.name}</h2>
        <h3>city:{data.address.city}</h3>
    </div>
  )
}
