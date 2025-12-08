import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {Routes,Route, Navigate} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import Pnot from './Pnot'
import College from './College'
import Students from './Students'
import Department from './Department'
import Details from './Details'
import Users from './Users'
import Userdetails from './Userdetails'

function App() {
  

  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route element={<Navbar/>}>
       <Route path='/' element={<Home/>}/>
       <Route path='/users' element={<Users/>}/>
       <Route path='/users/:id' element={<Userdetails/>}/>
       
            
    <Route path="in">
      <Route path="user">
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="signup" element={<Login />} />
        <Route path="forgot" element={<Login />} />
      </Route>
    </Route>
      </Route>
     

      <Route path='/college' element={<College/>}>
       <Route index element={<Students/>}/>
       <Route path='depart' element={<Department/>}/>
       <Route path='details' element={<Details/>}/>
      </Route>
      {/* <Route path='/*' element={<Pnot/>}/> */}
      <Route path='/*' element={<Navigate to="/"/>}/>
      
    </Routes>
   
      
    </>
  )
}

export default App
