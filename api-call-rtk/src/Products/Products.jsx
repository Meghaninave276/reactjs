import React, { useEffect } from 'react'
import { additem, fetchapi, removeitem } from '../redux/slice';
import {useDispatch,useSelector} from 'react-redux'
import "./Products.css"



export default function Products() {
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchapi())


    },[])
    const pselector=useSelector((state)=>state.products.items);
    const cartselector = useSelector((state) => state.products.cart);
        console.log(cartselector.length);
       

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
          {
            cartselector.find(cartitem=>cartitem.id===item.id)?
                 <button className='btn btn-danger' onClick={()=>dispatch(removeitem(item))} >remove from  cart</button>:
                      <button className='btn ' id='button' onClick={()=>dispatch(additem(item))}>add to cart</button>
            
          
          }
     

         
   

         </div>
       
        </div>
       ))

      }
    </div> 
  )
}
