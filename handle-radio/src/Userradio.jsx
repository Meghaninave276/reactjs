import React, { useState } from 'react'

export default function Userradio() {
    const [gender,setGender]=useState("female");
    const [city,setCity]=useState("delhi")
  return (
    <div>
        <h1>select gender</h1>
        <input type="radio" value={"male"} checked={gender=="male"} onChange={(e)=>setGender(e.target.value)} name="gender" id="male"/>
        <label htmlFor="male">male</label>
        <br />
         <input type="radio" value={"female"} checked={gender=="female"} onChange={(e)=>setGender(e.target.value)} name="gender" id="female"/>
        <label htmlFor="female">female</label>
        <br />
        <h2>{gender}</h2>
        <br />
        <h1>select city</h1>
        <select name="" onChange={(e)=>setCity(e.target.value)} id="" defaultValue={"mumbai"}>
            <option value="delhi">delhi</option>
            <option value="mumbai">mumbai</option>
            <option value="banglore">banglore</option>
        </select>
        <h2>{city}</h2>
    </div>
  )
}
