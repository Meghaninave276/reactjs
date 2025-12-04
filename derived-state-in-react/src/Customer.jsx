import React from 'react'
import { useState } from 'react'

export default function Customer() {
    const [customers,setCustomers]=useState([]);
    const [customer,setCustomer]=useState("");
    const handleaddcustomer=()=>{
        setCustomers([...customers,customer]);
    }
const total=customer.length;
const last=customers[customers.length-1];
const unique=[...new Set(customers)].length;

  return (
    <div>
        <h2>Total customers:{total}</h2>
        <h2>last customers:{last}</h2>
        <h2>uniue customers:{unique}</h2>
        <input type="text" onChange={(e)=>setCustomer(e.target.value)} placeholder='Add customer' />
        <button onClick={handleaddcustomer}>Add new customer</button>
         {customers.map((item, index) => (
        <h4 key={index}>{item}</h4>
      ))}
    </div>
  )
}
