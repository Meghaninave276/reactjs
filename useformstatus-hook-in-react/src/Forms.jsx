import React from 'react'
import {useFormStatus} from 'react-dom'

export default function Forms() {
const handlesubmit=async()=>{
   await new Promise(res=>setTimeout(res,4000));
     console.log("form submitted");


}
function Cuform()
{
    const {pending}=useFormStatus();

    return(
          <div>
          <input type="text" placeholder='enter a name' />
        <br /><br />
        <input type="password" placeholder='enter a password' />
        <br /><br />
        <button disabled={pending}>{pending?"submitting":"submit"}</button>

    </div>
    )
  

}
  return (
    <div>
        <form action={handlesubmit}>
            <Cuform/>
          
        </form>
    </div>
  )
}
