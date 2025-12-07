import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css";

export default function Navbar() {
  return (
    <div className='header'>
        <div>
    <Link style={{textDecoration:"none"}}><h2 className='link'>Logo</h2></Link>
   
        </div>
        <div>
            <ul>
                <li>
                    <Link className='link' to="/">Home</Link>
                </li>
                <li>
                    <Link className='link' to="/login">Login</Link>
                </li>
                <li>
                    <Link className='link' to="/about">About</Link>
                </li>
            </ul>

        </div>
    </div>
  )
}
