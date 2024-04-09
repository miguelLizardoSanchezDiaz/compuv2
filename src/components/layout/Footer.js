import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { RiTiktokLine } from "react-icons/ri";
import { TbBrandYoutube } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";

export const Footer = () => {
  return (
    <div className='bg-footer color_white font-family-montserrat'>
        <div className='flex-container padding-top-25'>
            <div className='flex-item img-responsive color_white_hover font12v2 txt-center'>
                <div >
                    <a href='#'>Términos y condiciones</a>
                </div>
                <div className='margin-top-10'>
                    <a href='#'>Libro de reclamaciones</a>
                </div>
                <div className='margin-top-10'>
                    <a href='#'>Programa de afiliados</a>
                </div>
                <div className='margin-top-10'>
                    <a href='#'>Nuestros productos</a>
                </div>
            </div>
            <div className='flex-item img-responsive color_white_hover font12v2 txt-center'>
                <div>
                    <a href='#'>Políticas de privacidad</a>
                </div>
                <div className='margin-top-10'>
                    <a href='#'>Rastrear pedido</a>
                </div>
                <div className='margin-top-10'>
                    <a href='#'>Contáctanos</a>
                </div>
                <div className='margin-top-10'>
                    <a href='#'>Iniciar sesión</a>
                </div>
                
            </div>
        </div>
        <div className='txt-center margin-top-25'>
            <img src='/compuv2/img_publics/logo-compured.png'
            alt='laptop categoria'
            width='80px'
             />
        </div>
        <div className='txt-center font14 margin-top-25'>
            Encuentra los mejores productos de tecnología al mejor precio. Visita nuestras redes sociales para conocer descuentos y promociones
        </div>
        <div className='txt-center font12v2 margin-top-25 icon-a'>
            <a href='#'>
                <IoLogoInstagram size={30}/>
            </a>
            <a href='#'>
            <RiTiktokLine size={30}/>
            </a>
            <a href='#'>
            <TbBrandYoutube size={30}/>
            </a>
            <a href='#'>
            <FiFacebook size={30}/>
            </a>

        </div>
        <div className='txt-center font12v2 margin-top-25 padding-bottom-10'>Copyright © 2024. Todos los derechos reservados</div>
    </div>
  )
}
