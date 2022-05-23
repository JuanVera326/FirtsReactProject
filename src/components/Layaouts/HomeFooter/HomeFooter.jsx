import React from 'react'
import { Image } from '../../UI/Image/Image'
import GitHub from '../../../images/github.png'
import Facebook from '../../../images/facebook.png'
import Instagram from '../../../images/instagram.png'


export const HomeFooter = () => {
  return (
    <div className='footer'>
        <footer>
            <h3 className='footerText'>Juan Vera 2022 Sena &copy;</h3>
            <div className="images">
                <div className='contA'><a href="https://github.com/JuanVera326/"><Image router={GitHub} textAlt="GitHub" styleImg="imgGit imgFoot"></Image></a></div>
                <div className='contA'><a href="https://www.facebook.com/"><Image router={Facebook} textAlt="Facebook" styleImg="imgFace imgFoot"></Image></a></div>
                <div className='contA'><a href="https://www.instagram.com/"><Image router={Instagram} textAlt="Instagram" styleImg="imgInst imgFoot"></Image></a></div>
            </div>
        </footer>
    </div>
  )
}
