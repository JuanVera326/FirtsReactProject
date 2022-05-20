import React from 'react'
import { Link } from 'react-router-dom'

export const NavHome = () => {
  return (
    <nav>
         <ul className="nav1">
            <li>
               <Link className='a' to="/">Home</Link>
            </li>
            <li>
               <Link className='a' to="/aboutUs">About Us</Link>
            </li>
            <li>
               <Link className='a' to="/buy">Buy</Link>
            </li>
            <li>
               <Link className='a' to="/expensive">Expensive Things</Link>
            </li>
            <li>
               <Link className='a' to="/contador">Contador</Link>
            </li>
         </ul>
    </nav>
  )
}
