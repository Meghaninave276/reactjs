import React from 'react'

export default function Wrapper({children,color="yellow"}) {
  return (
    <div style={{color:color, border:"5px solid white", width:"400px", margin:"10px"}}> 
        {children}
    </div>
  )
}
