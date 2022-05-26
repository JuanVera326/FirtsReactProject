import React, { useEffect,useState } from 'react'
import { Input } from '../../UI/Input/Input'

export const API = () => {

  const [press,setPress] = useState("");

  setPress(){}

  useEffect(() => {
    const input = document.querySelector('inputAPI')
    if (press.keyCode == "13") {
      console.log("Enter!!");
    }
  }, [press])
  return (
    <div className='section3'>
        <h1>Rick & Morty</h1>
        <Input tp="text" textInput="Ingrese el Nombre del Personaje..." style="inputAPI" event={setPress()}></Input>
        <div className='cards'></div>
    </div>
  )
}
