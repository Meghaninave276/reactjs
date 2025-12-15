import React from 'react'
import Cart from './Cart'

export default function Header() {
  return (
    <div>

        <header className="header">
  <div className="logo">MyShop</div>

  <nav className="nav">
    <a href="#">Home</a>
    <a href="#">Shop</a>
    <a href="#">Contact</a>
  </nav>
  <Cart/>


</header>

    </div>
  )
}
