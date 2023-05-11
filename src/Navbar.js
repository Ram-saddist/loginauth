import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='nav'>
        <Link to="/">Home</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/store">Store</Link>
    </div>
  )
}
