import React from 'react'

export default function Usrs({displayname,name,getuser}) {
 
  return (
    <div>
      <button onClick={()=>displayname(name)}>display name</button>
      <button onClick={getuser}>getuser name</button>
    </div>
  )
}
