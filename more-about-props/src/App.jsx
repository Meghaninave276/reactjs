import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './Users'
import Wrapper from './Wrapper'

function App() {
 

  return (
    <>
    <Wrapper color="orange">
        <h1>hello everyone</h1>
    </Wrapper>
     <Wrapper color="blue">
        <h1>hello kjby</h1>
    </Wrapper>
     <Wrapper>
        <h1>hello afg</h1>
        <h1>hello afg</h1>
    </Wrapper>
    {/* <Users name="megha"/>
    <Users name="vb"/>
    <Users/> */}
    </>
  )
}

export default App
