
import React from 'react'
import { Logo2 } from '../../UI/Logo/Logo2.jsx';
import { NavHome } from "../../UI/NavHome/NavHome.jsx"; 
import { Slider } from '../../UI/Slider/Slider.jsx';

export const HeaderHome = () => {
  return (
    <div className="section1">
        <NavHome></NavHome>
        <Slider></Slider>
        <h1 className='title'>REACT PRACTICE</h1> 
        <Logo2></Logo2>
    </div>
  )
}

