import React from 'react'
import { useId } from 'react';

export default function Userform() {
     const user=useId();
//   const password=useId();
//   const skills=useId();
//   const terms=useId();
  return (
    <div>
         <form action="">
        <label htmlFor={user+"name"} >enter name</label>
        <input type="text" id={user+"name"} />
        <br /><br />
        <label htmlFor={user+"password"} >enter password</label>
        <input type="text" id={user+"password"} />
        <br /><br />
        <label htmlFor={user+"skills"} >enter skills</label>
        <input type="text" id={user+"skills"} />
        <br /><br />
        <input type="checkbox" id={user+"terms"} />
        <label htmlFor={user+"terms"} >enter terms</label>
        
        <br /><br />

       </form>
      
    </div>
  )
}
