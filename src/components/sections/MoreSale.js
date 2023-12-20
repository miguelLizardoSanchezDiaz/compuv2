import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const MoreSale = () => {
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
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1.5,
              initialSlide: 1.5,
            },
          },
          {
            breakpoint: 393,
            settings: {
              slidesToShow: 1.3,
              slidesToScroll: 1.3,
              initialSlide: 1.3,
            },
          },
        ],
    };

    const products=[
        {
            id:1,
            imgUrl:'./img_publics/mouse-redragon.png',
            marca:'REDRAGON',
            description:'Mouse Redragon Griffin M607 RGB Negro',
            precio:140.00,
            descuento:10.00,
            precioFinal:140.00*(1-(10/100))
        },
        {
            id:2,
            imgUrl:'./img_publics/mouse-redragon.png',
            marca:'REDRAGON',
            description:'Mouse Redragon Griffin M607 RGB Negro',
            precio:140,
            descuento:10,
            precioFinal:140*(1-(10/100))
        },
        {
          id:2,
          imgUrl:'./img_publics/mouse-redragon.png',
          marca:'REDRAGON',
          description:'Mouse Redragon Griffin M607 RGB Negro',
          precio:140,
          descuento:10,
          precioFinal:140*(1-(10/100))
        },
        {
          id:2,
          imgUrl:'./img_publics/mouse-redragon.png',
          marca:'REDRAGON',
          description:'Mouse Redragon Griffin M607 RGB Negro',
          precio:140,
          descuento:10,
          precioFinal:140*(1-(10/100))
        },
        {
          id:2,
          imgUrl:'./img_publics/mouse-redragon.png',
          marca:'REDRAGON',
          description:'Mouse Redragon Griffin M607 RGB Negro',
          precio:140,
          descuento:10,
          precioFinal:140*(1-(10/100))
        },
        {
          id:2,
          imgUrl:'./img_publics/mouse-redragon.png',
          marca:'REDRAGON',
          description:'Mouse Redragon Griffin M607 RGB Negro',
          precio:140.00,
          descuento:10.00,
          precioFinal:140*(1-(10/100))
        },

    ]
    
    
  return (
    <div className='pd-categories'>
      <div className='flex-container justify-content padding-categories-titles baseline-items'>
            <div className='txt-semibold font-family-montserrat font18'>Lo más vendido</div>
            <div className='font-family-montserrat font12v2'>Ver Todo</div>
      </div> 
      <Slider {...settings} className='padding-products'>
        {
            products.map(c=>
            <div key={c.id}>
                <div className='brd-product'>
                    <img src={c.imgUrl}
                    alt='laptop categoria'
                    className='img-responsive ' />
                    <div className='padding-categories-item'>
                        <div className='font-marca font-family-yrsa'>{c.marca}</div>
                        <div className='font-description font-family-montserrat'>{c.description}</div>
                        <div className='flex-container font-family-montserrat font400 pd-precios baseline-items'>
                          <div className='flex-item font18v2 margin-right-10'>S/{c.precioFinal.toFixed(2)}</div>
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
