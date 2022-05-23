import React, { useEffect, useState } from 'react'
import  sun  from "../../../images/soleado.png";
import  moon  from "../../../images/luna.png";

import { Image } from '../Image/Image';

export const Slider = () => {

    let body = document.body;
    const [mode, setMode] = useState(false)
     
    const act = () => {
      setMode(!mode);
    }
    
    useEffect(() => {
      if (mode) {
        body.classList.add('color')
      }else{
        body.classList.remove('color')
      }
    }, [mode])

  return (
    <div>
        <input onClick={act} type="checkbox" id="switch1"></input>
        <label for="switch1" class="lbl1">
          <div className='imagesDarkMode'>
            <Image router={moon} styleImg="moon"></Image>
            <Image router={sun} styleImg="sun"></Image>
          </div>
        </label>
    </div>
  )
}
