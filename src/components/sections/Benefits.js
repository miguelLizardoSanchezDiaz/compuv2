import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TbTruckDelivery } from "react-icons/tb";
import { GoGift } from "react-icons/go";
import { MdOutlineSecurity } from "react-icons/md";

export const Benefits = () => {

    
  return (
    <div className='pd-offers font-family-montserrat'>
      <div className='txt-center padding-categories-titles mb-15'>
          <TbTruckDelivery size={80}/>
          <div className='font18 font700'>ENVÍOS A TODO EL PERÚ</div>
          <div className='font14'>Hasta la puerta de tu casa</div>
      </div>
      <div className='txt-center padding-categories-titles mb-15'>
          <GoGift size={80}/>
          <div className='font18 font700'>PROMOCIONES Y DESCUENTOS</div>
          <div className='font14'>Exclusivo para nuestros suscriptores</div>
      </div>

      <div className='txt-center padding-categories-titles mb-15'>
          <MdOutlineSecurity size={80}/>
          <div className='font18 font700'>SEGURIDAD Y GARANTÍA</div>
          <div className='font14'>Todos nuestros productos son nuevos y con garantía</div>
      </div>
      
    </div>
  )
}
