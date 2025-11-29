import React from 'react'

export default function Usr({user,user1,user2,user3}) {
  
  return (
    <div>
       <h2>name:{user.name}</h2>
        <h2>age:{user.age}</h2>
        <h2>Qua:{user.qualification}</h2>
        <hr />
        <h2>name:{user2.name}</h2>
        <h2>age:{user2.age}</h2>
        <h2>Qua:{user2.qualification}</h2>
        <hr />
        <h2>name:{user3.name}</h2>
        <h2>age:{user3.age}</h2>
        <h2>Qua:{user3.qualification}</h2>
    </div>
  )
}
