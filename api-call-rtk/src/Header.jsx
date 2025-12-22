import React from 'react'
import Cart from './Cart';
import { Link } from 'react-router-dom';


 function Header() {
  return (
    <div>

        <header className="header">
  <div className="logo">MyShop</div>

  <nav className="nav">
    <a href="#"><Link to="/">Home</Link></a>
    
  </nav>
 <Cart/>


</header>

    </div>
  )
}

export default Header;