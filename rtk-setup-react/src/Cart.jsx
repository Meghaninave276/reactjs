import React from 'react'
import {useSelector} from 'react-redux'

export default function Cart() {
    const cart = useSelector((state) => state.cart);
   
  return (
    <div>
         <div className="cart">
    <span className="cart-icon">🛒</span>
    <span className="cart-count">{cart.value}</span>
  </div>
    </div>
  )
}
