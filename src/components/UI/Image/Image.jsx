
import React from 'react'

export const Image = ({router,textAlt,styleImg}) => {
  return (
    <img src={router} alt={textAlt} className={styleImg}/>
  )
}
