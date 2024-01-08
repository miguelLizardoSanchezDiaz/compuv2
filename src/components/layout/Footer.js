import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-footer color_white font-family-montserrat'>
        <div className='flex-container padding-top-25'>
            <div className='flex-item img-responsive color_white_hover font12v2 txt-center'>
                <div>
                    <a href='#'>Términos y condiciones</a>
                </div>
                <div>
                    <a href='#'>Libro de reclamaciones</a>
                </div>
                <div>
                    <a href='#'>Programa de afiliados</a>
                </div>
                <div>
                    <a href='#'>Nuestros productos</a>
                </div>
            </div>
            <div className='flex-item img-responsive color_white_hover font12v2 txt-center'>
                <div>
                    <a href='#'>Políticas de privacidad</a>
                </div>
                <div>
                    <a href='#'>Rastrear pedido</a>
                </div>
                <div>
                    <a href='#'>Contáctanos</a>
                </div>
                <div>
                    <a href='#'>Iniciar sesión</a>
                </div>
                
            </div>
        </div>
        <div className='txt-center margin-top-25'>LOGO</div>
        <div className='txt-center font14 margin-top-25'>
            Encuentra los mejores productos de tecnología al mejor precio. Visita nuestras redes sociales para conocer descuentos y promociones
        </div>
        <div className='txt-center font12v2 margin-top-25'>FOOTER 4</div>
        <div className='txt-center font12v2 margin-top-25'>Copyright © 2024. Todos los derechos reservados</div>
    </div>
  )
}
