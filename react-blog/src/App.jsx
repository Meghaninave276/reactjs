import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Usercomponent,{Profile,Setting, userkey} from './Usercomponent'
import { createElement } from 'react'

function App() {
 

  // return (
  //   <>
  //   <Counter/>
  //   <Usercomponent/>
  //   <Profile/>
  //   <Setting/>
  //   <h1>{userkey}</h1>
    

  //   </>
  // )
  // return createElement("div",{id:"rootdiv"},"hello div");
  return(
    <div className="rootother">hello other</div>
  )
}

export default App;
