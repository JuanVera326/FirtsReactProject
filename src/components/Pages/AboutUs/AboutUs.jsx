import React, { useState } from 'react'
import { Input } from '../../UI/Input/Input'

export const AboutUs = () => {

  const [arr, setArr] = useState([]);

  const names = (e) => {
    if (e.key === 'Enter') {
      let tempArr = arr;
      tempArr.push(e.target.value);
      setArr(tempArr);
    }
  }
    
  return (
    <div className='section2'>
        <h1>About Us</h1>

        <div className='section4'>
          <Input tp="text" textInput="Escriba aquí..." style="inputAPI" valid="true" event={names}></Input>
          <>
              {
                arr.map((item) => (<li>{item}</li>))
              }
          </>
        </div>
    </div>
  )
}