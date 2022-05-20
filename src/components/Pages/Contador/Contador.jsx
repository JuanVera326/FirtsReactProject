import React, { useState } from 'react'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'

export const Contador = () => {
    
    const [cont,setCont] = useState(0);

  return (
    <div className='contador'>
        <h3 htmlFor="" className='num'>{cont}</h3>
        <hr className='hr'/>
        <div className='buttons'>
            <ButtonUI style="btnMa btn"  event={() => setCont(cont+1)} texts="+ Mas"></ButtonUI>
            <ButtonUI style="btnRes btn" event={() => setCont(0)} texts="Reset" ></ButtonUI>   
            <ButtonUI style="btnMen btn" event={() => setCont(cont-1)} texts="- Menos"></ButtonUI>
        </div>
    </div>
    
  )
}   
