import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import "./style.css";


export default function College() {
  return (
    <div className='college' style={{textAlign:"center"}}>
        <h1>College</h1>
        <h3><Link to="/">Go back to home</Link></h3>
        <NavLink className="link" to="">Students</NavLink>
        <NavLink className="link" to="depart">Departments</NavLink>
        <NavLink className="link" to="details">Details</NavLink>
        <Outlet/>
    </div>
  )
}
