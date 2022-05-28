import React from 'react'

export const Input = ({tp,textInput,style,event,nameI}) => {
  return (
    <input type={tp} placeholder={textInput} className={style} onKeyDown={event} name={nameI}></input>
  )
}
