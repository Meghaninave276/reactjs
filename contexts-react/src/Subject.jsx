import React, { useContext } from 'react'
import { subjectcontext } from './Contextdata'

export default function Subject() {
    const subject=useContext(subjectcontext)
  return (
    <div style={{backgroundColor:'red',padding:10}}>
        <h1>Subject is: {subject}</h1>
    </div>
  )
}
