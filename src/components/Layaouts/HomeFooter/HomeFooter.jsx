import React from 'react'
import { Image } from '../../UI/Image/Image'

export const HomeFooter = () => {
  return (
    <div className='footer'>
        <footer>
            <h3 className='footerText'>Juan Vera 2022 Sena &copy;</h3>
            <div className="images">
                <a href="https://github.com/JuanVera326/"><Image router="../../../images/github.png" textAlt="GitHub" styleImg="imgGit imgFoot"></Image></a>
                <a href="https://www.facebook.com/"><Image router="../../../images/facebook.png" textAlt="Facebook" styleImg="imgFace imgFoot"></Image></a>
                <a href="https://www.instagram.com/"><Image router="../../../images/instagram.png" textAlt="Instagram" styleImg="imgInst imgFoot"></Image></a>
            </div>
        </footer>
    </div>
  )
}
