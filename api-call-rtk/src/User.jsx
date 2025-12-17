import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchuser } from './redux/uslice';
export default function User() {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchuser());
    },[])
   const users = useSelector((state) => state.user.user);


  return (
    <div>
        {
            users.map((u,i)=>(
                <div key={i}>
                    <p>{u.firstName}</p>
                </div>
            ))
        }
    </div>
  )
}
