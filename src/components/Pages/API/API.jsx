import React, { useState,useEffect } from 'react'
import { Cards } from '../../Layaouts/Cards/Cards';
import { Input } from '../../UI/Input/Input'
// import * as ReactDOM from 'react-dom';

export const API = () => {

  const [pressKey,setPress] = useState(false);
  let container;

  const fKeyPress = (e) =>{
    if (e.key === 'Enter') {
      setPress(!pressKey)
    }
  } 
  useEffect(() => {
    let inputAPI = document.querySelector('.inputAPI');
    console.log(inputAPI.value);
    customCards(inputAPI);
  }, [pressKey])


  const customCards = (inputAPI) => {
    const URL = "https://rickandmortyapi.com/api/character";

    let newURl = (URL)+`/?name=${inputAPI.value}`;

    fetch(newURl)
    .then(response => response.json())
    .then(data => (data.results.forEach(element => {
        createCards(element);
    })));
  }
  
  const createCards = (element) => {
    console.log(element);
    container.appendChild(<Cards styleCont="card" routeImg={element.image} styleImgen="imgCard"></Cards>);
  }
  return (
    <div className='section3'>
        <h1>Rick & Morty</h1>
        <Input tp="text" textInput="Ingrese el Nombre del Personaje..." style="inputAPI" event={(e) => fKeyPress(e)}></Input>
        <div className='cards'>{container}</div>
    </div>
  )
}
