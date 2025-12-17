import React, { useEffect } from 'react'
import { fetchapi } from './redux/slice'
import {useDispatch,useSelector} from 'react-redux'

export default function Products() {
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchapi())


    },[])
    const selector=useSelector((state)=>state.products.items);
    console.log(selector)
  return (
    <div>
      
    </div>
  )
}
