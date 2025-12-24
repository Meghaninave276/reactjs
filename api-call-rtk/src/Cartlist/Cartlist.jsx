import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom"
import {clearAllitems, removeitem} from '../redux/slice'
import "./Cartlist.css";

export default function Cartlist() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
 const cartlistselector=useSelector((state)=>state.products.cart);
 console.log(cartlistselector);
 const handleplaceorder=()=>{
  localStorage.clear();
  dispatch(clearAllitems);
  alert("order placed");
  navigate("/");

 }
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
                <button className='btn' onClick={()=>dispatch((removeitem(item)))}>remove</button>

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

<button className='place-btn' onClick={handleplaceorder}>place order</button>
      
    </div>
  )
}
