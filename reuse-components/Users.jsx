import React from 'react'

export default function Users({user}) {
  return (
    <div>
       <h3>name:{user.name}</h3>
       <h3>age:{user.age}</h3>
       <h3>email:{user.email}</h3>
    </div>
  )
}
