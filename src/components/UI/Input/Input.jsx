import React from 'react'

export const Input = ({tp,textInput,style,event,nameI,valid,cEvent}) => {
  return (
    <input type={tp} placeholder={textInput} className={style} onKeyDown={event} name={nameI} required={valid} onChange={cEvent}></input>
  )
}
