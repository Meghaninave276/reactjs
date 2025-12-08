import React from 'react'
import {Link} from 'react-router-dom'
export default function Users() {
    const userdata=[
        {
            id:1,
            name:"megha",
        },
        {
            id:2,
            name:"lalita",
        },
        {
            id:3,
            name:"gopal",
        },
        {
            id:4,
            name:"divyesh",
        },
        {
            id:5,
            name:"abc",
        },
        {
            id:6,
            name:"xyz",
        },
        

    ]
  return (
    <div style={{marginLeft:"20px"}}>
        <h1>Users</h1>
        {
            userdata.map((i,index)=>(
               <div key={i.id}>
  <h4><Link to={`/users/${i.id}`}>{i.name}</Link></h4>
</div>

            ))
        }
    </div>
  )
}
