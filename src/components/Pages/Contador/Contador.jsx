import React from 'react'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'

const num = document.querySelector('.num');
const btnMa1 = document.querySelector('.btnMa');
const btnMe1 = document.querySelector('.btnMen');
const btnRes1 = document.querySelector('.btnRes');

let conta = 0;

    btnMa1.addEventListener('click',()=>{sum()});
    btnMe1.addEventListener('click',()=>{re()});
    btnRes1.addEventListener('click',()=>{res()});

export const Contador = () => {

  return (
    <div className='contador'>
        <label htmlFor="" className='num'>Contador</label>
        <div className='buttons'>
            <ButtonUI style="btnMa btn" valu="+ Mas"></ButtonUI>
            <ButtonUI style="btnRes btn" valu="Reset"></ButtonUI>   
            <ButtonUI style="btnMen btn" valu="- Menos"></ButtonUI>
        </div>
    </div>
    
  )
}   
    function sum() {
        conta ++
        num.innerText = conta
    }
    function res() {
        conta = 0
        num.innerText = conta
    }
    function re() {
        conta --
        num.innerText = conta
    }
