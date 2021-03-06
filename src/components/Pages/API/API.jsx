import React, { useState,useEffect } from 'react'
import { Cards } from '../../Layaouts/Cards/Cards';
import { Input } from '../../UI/Input/Input';
import { Image } from '../../UI/Image/Image';
import Logo from '../../../images/logo.png'

export const API = () => {
  const URL = "https://rickandmortyapi.com/api/character";

  const [pressKey,setPressKey] = useState(false);
  
  const [obj,setObj] = useState([]);

  const fKeyPress = (e) =>{
    if (e.key === 'Enter') {
      setPressKey(!pressKey);
    }
  } 
  useEffect(() => {
    let inputAPI = document.querySelector('.inputAPI');
    console.log(inputAPI.value);
    customCards(inputAPI);
  }, [pressKey])

  const customCards = (inputAPI) => {
    let newURl = (URL)+`/?name=${inputAPI.value}`;
    fetch(newURl)
    .then(response => response.json())
    .then(data => setObj(data.results))
    .catch(error => console.log("Error!"))
  }

  return (
    <div className='section3'>
      <Image router={Logo} textAlt="Logo" styleImg="logoRiMo"></Image>
        <Input tp="text" textInput="Ingrese el Nombre del Personaje..." style="inputAPI" event={fKeyPress}></Input>
        <div className='tarj'>
          <Cards arr={obj}></Cards>
        </div>
    </div>
  )
}
