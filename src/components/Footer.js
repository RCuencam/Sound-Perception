import React from 'react'
import {AiOutlineInstagram,AiFillFacebook} from "react-icons/ai"
import { Logo } from '../assets/images'
import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__container__box">
                    <div className="footer__container__about">
                        <h2 style={{color:'#FFF502'}}>SOBRE LA EMPRESA</h2>
                        <p>somos una tienda online dedicada
                            a la venta de instrumentos musicales
                            de calidad.</p>
                    </div>
                    <div className="footer__container__social">
                        <h2 style={{color:'#FFF502'}}>REDES SOCIALES</h2>
                        <p><AiFillFacebook divor='#FFF502'/> SOUND_PERCEPTION</p>
                        <p><AiOutlineInstagram divor='#FFF502'/> SOUND_PERCEPTION</p>
                    </div>
                </div>
                <div className="footer__container__logo">
                    <img src={Logo} alt="LOGO" />
                </div>
            </div>  
        </div>
    )
}

export default Footer
