// import React, { forwardRef } from 'react'

//   function Userinput(props,ref) {
     
//   return (
//     <div>
//         <input type="text" ref={ref}/>
//     </div>
//   )
// }

// export default forwardRef(Userinput)

import React from 'react'

export default function Userinput(props) {
  return (
    <div>
        <input type="text" ref={props.ref}/>
    </div>
  )
}
