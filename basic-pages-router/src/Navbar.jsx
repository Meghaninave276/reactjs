import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./style.css";

export default function Navbar() {
  return (
  <div>
      <div className='header'>
        <div>
    <Link to="/" style={{textDecoration:"none"}}><h2 className='link'>Logo</h2></Link>
   
        </div>
        <div>
            <ul>
                <li>
                    <Link className='link' to="/">Home</Link>
                </li>
                <li>
                    <Link className='link' to="/in/user/login">Login</Link>
                </li>
                <li>
                    <Link className='link' to="/in/user/about">About</Link>
                </li>
                 <li>
                    <Link className='link' to="/college">College</Link>
                </li>
                 <li>
                    <Link className='link' to="/users">users</Link>
                </li>
                
            </ul>

        </div>
    </div>
    <Outlet/>
  </div>
  )
}
