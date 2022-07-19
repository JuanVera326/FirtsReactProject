import React, { useEffect } from 'react'
import { useState } from 'react';
import { CardGiphy } from '../../Layaouts/Cards/CardGiphy';
import { Input } from '../../UI/Input/Input';

export const APIGiphy = () => {

    const [gifsGet, setgifsGet] = useState([]);

    let key = "api_key=nCeJvZS36BCg13GWCVSqsYOxxHURkZ2Y"; 
    let limit = "&limit=16"
    let URL = "https://api.giphy.com/v1/gifs";

    let trend = "/trending?"
    let search = "/search?q=";

    useEffect(() => {
        let url = URL + trend + key + limit;
        getApi(url); 
    }, [])

    const [eInput, seteInput] = useState(false) 
    const getStr = (e) => {
      seteInput(!eInput);
    }
    
    useEffect(() => {
        let inputURL = document.querySelector('.inputAPI'); 
        let url = URL + search + inputURL.value + `&${key}` + limit;
        getApi(url);
      }, [eInput])

    const getApi = (url) => {
        fetch(url)
        .then(response => response.json())
        .then(res => setgifsGet((res.data)))
    }

  return (
    <div className='section5'>
        <h1>Giphy - API</h1>
        <Input tp="text" textInput="Escriba aqui..." style="inputAPI" valid="true" cEvent={getStr}></Input>
        <div className='tarj'>
            <CardGiphy arr={gifsGet}></CardGiphy>
        </div>
    </div>
  )
}
