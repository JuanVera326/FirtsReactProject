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
               <Link className='a' to="/apirm">API R&M</Link>
            </li>
            <li>
               <Link className='a' to="/tenorapi">API Tenor</Link>
            </li>
            <li>
               <Link className='a' to="/contactUs">Contact Us</Link>
            </li>
            <li>
               <Link className='a' to="/contador">Contador</Link>
            </li>
         </ul>
    </nav>
  )
}
