import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';


export default function Cart() {
    const cartselector = useSelector((state) => state.products.cart);
    console.log(cartselector.length);
   
  return (
    <div>
         <div className="cart">
    <Link to="/cart">
    <span className="cart-icon">🛒</span>
    <span className="cart-count">{cartselector.length?cartselector.length:0}</span>
    </Link>

  </div>
    </div>
  )
}
