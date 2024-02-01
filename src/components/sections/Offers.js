import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Offers = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4, // Número de elementos visibles por slide
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 2.5,
              initialSlide: 2.5,
            },
          },
          {
            breakpoint: 393,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
        ],
    };

    const products=[
        {
            id:1,
            imgUrl:'/compuv2/img_publics/audifonos-redragon.jpg',
            marca:'REDRAGON',
            description:'Audífonos Gamer Redragon Zeus X Wireless',
            precio:140.00,
            descuento:10.00,
            precioFinal:140.00*(1-(10/100))
        },
        {
            id:2,
            imgUrl:'/compuv2/img_publics/audifonos-redragon.jpg',
            marca:'REDRAGON',
            description:'Audífonos Gamer Redragon Zeus X Wireless',
            precio:140,
            descuento:10,
            precioFinal:140*(1-(10/100))
        },
        {
          id:2,
          imgUrl:'/compuv2/img_publics/audifonos-redragon.jpg',
          marca:'REDRAGON',
          description:'Mouse Redragon Griffin M607 RGB Negro',
          precio:140,
          descuento:10,
          precioFinal:140*(1-(10/100))
        },
        {
          id:2,
          imgUrl:'/compuv2/img_publics/audifonos-redragon.jpg',
          marca:'REDRAGON',
          description:'Mouse Redragon Griffin M607 RGB Negro',
          precio:140,
          descuento:10,
          precioFinal:140*(1-(10/100))
        },
        {
          id:2,
          imgUrl:'/compuv2/img_publics/audifonos-redragon.jpg',
          marca:'REDRAGON',
          description:'Mouse Redragon Griffin M607 RGB Negro',
          precio:140,
          descuento:10,
          precioFinal:140*(1-(10/100))
        },
        {
          id:2,
          imgUrl:'/compuv2/img_publics/audifonos-redragon.jpg',
          marca:'REDRAGON',
          description:'Mouse Redragon Griffin M607 RGB Negro',
          precio:140.00,
          descuento:10.00,
          precioFinal:140*(1-(10/100))
        },

    ]
    
    
  return (
    <div className='pd-offers'>
      <div className='txt-center padding-categories-titles'>
            <div className='txt-semibold font-family-montserrat font18'>Conoce las ofertas del día</div>
      </div>
      <div className='txt-center font-family-montserrat
       btn-ahorro
        pbuttonoffers2
        width-offers-cron 
       mgb15 
       font12v2
       mgt15'>Tu oferta termina en 00h 45m 12ss</div>
      <Slider {...settings} className='padding-products'>
        {
            products.map(c=>
            <div key={c.id}>
                <div className=''>
                    <div className='font-family-montserrat font13 btn-ahorro pbuttonoffers width-offers'>Ahorras 30%</div>
                    <img src={c.imgUrl}
                    alt='laptop categoria'
                    className='img-responsive ' />
                    <div className='padding-categories-item'>
                        <div className='font-marca font-family-yrsa'>{c.marca}</div>
                        <div className='font-description font-family-montserrat'>{c.description}</div>
                        <div className='flex-container justify-content font-family-montserrat font400 pd-precios baseline-items'>
                          <div className='flex-item font18v2'>S/{c.precioFinal.toFixed(2)}</div>
                          <div className='flex-item tachado flex-center font13'>S/{c.precio.toFixed(2)}</div>
                        </div>
                        <div className='font-family-montserrat btn-cart pointer margin-top-30'>Añadir al carrito</div>
                    </div>
                </div>
            </div>
            )
        }
            
        {/* Agrega más elementos div para más slides */}
      </Slider>
    </div>
  )
}
