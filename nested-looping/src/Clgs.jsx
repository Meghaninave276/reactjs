import React from 'react'
import { cloneElement } from 'react'
import Students from './Students'

export default function Clgs({clg}) {
  
  return (
    <div>
         <h2>clg name:{clg.name}</h2>
          <ul>
            <li><h3>city{clg.city}</h3></li>
            <li>website<h3>{clg.website}</h3></li>
            <li>
                <Students student={clg.student}/>
            </li>
          </ul>
    </div>
  )
}
