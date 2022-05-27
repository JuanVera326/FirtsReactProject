import React from 'react'
import { Image } from '../../UI/Image/Image'


export const Cards = ({styleCont,routeImg,textImg,styleImgen}) => {
  return (
    <div className={styleCont}><Image router={routeImg} textAlt={textImg} styleImg={styleImgen}></Image></div>
  )
}
