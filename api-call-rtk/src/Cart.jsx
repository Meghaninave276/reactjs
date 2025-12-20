import React from 'react'
import {useSelector} from 'react-redux'


export default function Cart() {
    const cartselector = useSelector((state) => state.products.cart);
    console.log(cartselector.length);
   
  return (
    <div>
         <div className="cart">
    <span className="cart-icon">🛒</span>
    <span className="cart-count">{cartselector.length?cartselector.length:0}</span>

  </div>
    </div>
  )
}
