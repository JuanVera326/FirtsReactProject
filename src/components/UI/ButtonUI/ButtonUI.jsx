import React from 'react'

export const ButtonUI = ({style,valu}) => {
  
  return (
    <div>
        <button className={style}>{valu}</button>
    </div>
  )
}
