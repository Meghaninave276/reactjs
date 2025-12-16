import React from 'react'
import "./Product.css"
import {useDispatch,useSelector} from 'react-redux'

import { additem, removeitem } from '../redux/slice';

export default function Product() {
  const dispatch=useDispatch();
  return (
    <div>
         <div className="product-card">
      {/* Product Image */}
      <div className="product-image">
        <img
          src="https://i.pinimg.com/736x/1f/a4/91/1fa49137ad8f3aee75c2a288e7475347.jpg"
          alt="Product"
        />
      </div>
      

      {/* Product Details */}
      <div className="product-info">
        <h1>Wireless Headphones</h1>
        <p className="price">$99.99</p>
        <p className="description">
          High-quality wireless headphones with noise cancellation, deep bass,
          and long-lasting battery life. Perfect for music lovers and
          professionals.
        </p>
        <button className="add-cart" onClick={()=>dispatch(additem(1))}>Add to Cart</button>
        <button className="remove-cart" onClick={()=>dispatch(removeitem(1))} >Remove from Cart</button>

        {/* Quantity */}
        

        {/* Buttons */}
       
      </div>
    </div>
    </div>
  )
}
