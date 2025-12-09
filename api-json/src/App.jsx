import React from 'react'
import Userlist from './Userlist'
// import Adduser from './Adduser'
import {Routes,Route,NavLink} from 'react-router-dom'
import Adduser from './Adduser'

export default function App() {
  return (
    <div>
      <ul className='d-flex justify-content-between w-50'>
        <li >
          <NavLink to="/">Home</NavLink>
         
        </li>
        <li> <NavLink to="/add">Add user</NavLink></li>
      </ul>
      
   <Routes>
    <Route path='/' element={<Userlist/>}/>
    <Route path='/add' element={<Adduser/>}/>
   </Routes>
    </div>
  )
}
