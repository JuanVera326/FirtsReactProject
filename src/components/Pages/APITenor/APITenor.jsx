import React, { useState,useEffect } from 'react'
import { Cards } from '../../Layaouts/Cards/Cards';
import { Input } from '../../UI/Input/Input'

export const APITenor = () => {

    const URL = "https://g.tenor.com/v1/";
    const trend = "trending?key=";
    const search = "search?";

    const key = "SVV3UWEMXHUE";
    const query = `q=${input.value}`;
    const limit = "&limit=16";
    const [gifsGet, setgifsGet] = useState([])
    
    const getStr = (e) => {
        let inputAPITenor = document.querySelector('.inputAPI');
        console.log(inputAPITenor.value);
        setgifsGet(!gifsGet);
    }
    useEffect(() => {
        let inputAPI = document.querySelector('.inputAPI');
        console.log(inputAPI.value);
        getGif(inputAPI);
      }, [pressKey])

    const getGif = () =>{
        let newURl = (URL)+``;
        fetch(newURl)
        .then(response => response.json())
        .then(data => setObj(data.results))
        .catch(error => console.log("Error!"))
    }

  return (
    <div className='section5'>
       <h1>Tenor - Gif</h1>
        <Input tp="text" textInput="Escriba aquí..." style="inputAPI" valid="true" cEvent={getStr}></Input>
        <div class="tarj">
            {/* <Cards arr={""}></Cards> */}
        </div>
    </div>
  )
}
