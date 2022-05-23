import React, { useState,useEffect } from 'react'
import  pro  from "../../../images/quepro.jpg";
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import { Image } from '../../UI/Image/Image';

export const Contador = () => {

  const [cont,setCont] = useState(0);

  useEffect(() => {
    
    let imge = document.querySelector('.imgCont');

    if (cont >= 100) {
      imge.classList.add('imgContM')
    }else{
      imge.classList.remove('imgContM')
    }
  }, [cont])

  return (
    <div className='contador'>
        <Image router={pro} styleImg="imgCont" textAlt="QuePro"></Image>
        <h3 htmlFor="" className='num'>{cont}</h3>
        <hr className='hr'/>
        <div className='buttons'>
            <ButtonUI style="btnMa btn"  event={()=>setCont(cont + 10)} texts="+ Mas"></ButtonUI>
            <ButtonUI style="btnRes btn" event={()=>setCont(0)} texts="Reset" ></ButtonUI>   
            <ButtonUI style="btnMen btn" event={()=>setCont(cont - 10)} texts="- Menos"></ButtonUI>
        </div>
    </div>
    
  )
}   
