import React, { useEffect } from 'react'
import { fetchapi } from '../redux/slice';
import {useDispatch,useSelector} from 'react-redux'
import "./Products.css"

export default function Products() {
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchapi())


    },[])
    const pselector=useSelector((state)=>state.products.items);

  return (
    <div className='grid'>
      {
       pselector.length && pselector.map((item,index)=>(
        <div key={index} className='grid'>
         <img src={item.thumbnail} alt="" />
         <div className='content'>
          <div className='title'>{item.title} </div>
          <div className='brand'>{item.brand} </div>
          <div className='price'>{item.price} </div>
          <div className='rating'>{item.rating} </div>
          <button className='btn'>add to cart</button>

         
   

         </div>
       
        </div>
       ))

      }
    </div> 
  )
}
