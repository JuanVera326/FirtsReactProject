import React, { useEffect, useState } from 'react'
import { Input } from '../../UI/Input/Input'

export const AboutUs = () => {

  const [useArr, setUseArr] = useState([]);

  const names = (e) => {
    if (e.key === 'Enter') {
      console.log("Enter!!");
      let tempArr = useArr;
      tempArr.push(e.target.value);
      console.log(tempArr);
      setUseArr(tempArr);
    }
  }

  return (
    <div className='section2'>
        <h1>About Us</h1>

        <div className='section4'>
          <Input tp="text" textInput="Escriba aquí..." style="inputAPI" valid="true" event={names}></Input>
          <ul>
                {
                    useArr.map((item) => (
                      <li>{item}</li>
                    ))
                }
          </ul>
        </div>
    </div>
  )
}