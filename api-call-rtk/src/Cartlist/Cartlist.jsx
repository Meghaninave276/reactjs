import React from 'react'
import { useSelector } from 'react-redux'
import "./Cartlist.css";

export default function Cartlist() {
 const cartlistselector=useSelector((state)=>state.products.cart);
 console.log(cartlistselector);
  return (
    <div className='cart-container'>
      <div className='cart-header'>
        <h2>Your cart items</h2>
        <span>{cartlistselector.length} items</span>
      </div>
      {
        cartlistselector.length>0? cartlistselector.map((item,i)=>(
          <div key={item.id}>
            <div className='item-info'>
              <img src={item.thumbnail} alt="" />
          <div className='item-details'>
            <h4>{item.title}</h4>
            <p>{item.brand}</p>

          </div>
            </div>

              <div className='item-action'>
                <span className='price'>{item.price}</span>
                <button className='btn'>remove</button>

              </div>

          </div>

        ))
        :null
      }
      <div className="cart-footer">
  <span>Total</span>
  <strong>
    ${cartlistselector.reduce((sum, item) => sum + item.price, 0)}
  </strong>
</div>

      
    </div>
  )
}
