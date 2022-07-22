import React, { useState } from 'react'
import { Input } from '../../UI/Input/Input'

export const AboutUs = () => {

  const [list, setList] = useState([]);
    const name = (e) =>{
      
    }

  return (
    <div className='section2'>
        <h1>About Us</h1>

        <div className='section4'>
          <Input tp="text" textInput="Escriba aquí..." style="inputAPI" valid="true" cEvent={name}></Input>

          <ul>

          </ul>
        </div>
    </div>
  )
}
