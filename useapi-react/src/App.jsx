import { Suspense,use, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const fetchdata = 
  fetch("https://dummyjson.com/users")
    .then((res) => res.json());
  //  const userresourse=fetchdata();
function App() {
  return (
    <>
      <h1>use api</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Users userresourse={fetchdata}/>
      
      </Suspense>
    </>
  );
}

export default App;
const Users = ({userresourse}) => {
  const data=use(userresourse);
 return(
  <div>
    {
      data?.users?.map((user)=>(
        <h1>{user.firstName}</h1>
      ))
    }
  </div>
 )
};
