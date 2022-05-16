import { Logo } from "./../../UI/Logo/Logo.jsx";

import React from 'react'
import { NavHome } from "../../UI/NavHome/NavHome.jsx";

export const HeaderHome = () => {
  return (
    <div className="section1">
        <NavHome></NavHome>
        <h1>REACT PRACTICE</h1> 
        <Logo></Logo>
    </div>
  )
}

