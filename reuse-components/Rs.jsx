import React from 'react'
import Users from './Users';

export default function Rs() {
     const usersdata = [
    {
      name: "megha",
      age: 19,
      email: "megha@gmail.com",
      id: 1,
    },
    {
      name: "ycdsshj",
      age: 20,
      email: "ycdsshj@gmail.com",
      id: 2,
    },
    {
      name: "dbhwsj",
      age: 21,
      email: "dbhwsj@gmail.com",
      id: 3,
    },
    {
      name: "ggujt",
      age: 23,
      email: "ggujt@gmail.com",
      id: 4,
    },
  ];

  return (
    <div>
        <div>
            <h1>reuse components</h1>
            {
                usersdata.map((user,index)=>(
                    <div key={index} >
                        <Users user={user}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
