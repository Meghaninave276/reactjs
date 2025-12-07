import React from 'react'
import { Link } from 'react-router-dom'

export default function Pnot() {
  return (
    <div style={{textAlign:"center"}}>
        <Link to='/'>Go to home</Link>
        {/* <h1 > 404 page not found</h1> */}
        <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg" height={500} width={700} alt="" />

    </div>
  )
}
