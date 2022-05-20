import React from 'react'


export const Slider = () => {

    let body = document.body;

    const act = () =>{
        body.classList.toggle('color');
    }
    
  return (
    <div>
        <input onClick={act} type="checkbox" id="switch1"></input>
        <label for="switch1" class="lbl1"></label>
    </div>
  )
}
