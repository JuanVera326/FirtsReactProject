import React from 'react'
import { Link } from 'react-router-dom'
import { Logo2 } from '../Logo/Logo2'

export const NavHome = () => {
  return (
    <nav>
           <ul className="nav1">
                <Logo2></Logo2>
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
           </ul>
    </nav>
  )
}
