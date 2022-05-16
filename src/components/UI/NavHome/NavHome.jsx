import React from 'react'
import { Logo2 } from '../Logo/Logo2'

export const NavHome = () => {
  return (
    <nav>
           <ul className="nav1">
                <Logo2></Logo2>
               <li>
               <a href="#">Home</a>
               </li>
               <li>
               <a href="#">About us</a>
               </li>
               <li>
                   <a href="#">Buy</a>
               </li>
               <li>
                   <a href="#">Expensive Things</a>
               </li>
           </ul>
        </nav>
  )
}
