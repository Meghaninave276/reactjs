

export default function Adduser({setUser}) {
  
  return (
    <div>
        <h1>Add user</h1>
        <input type="text" onChange={(e)=>setUser(e.target.value)}  placeholder='enter user name'/>
     
        <hr />
    </div>
  )
}
