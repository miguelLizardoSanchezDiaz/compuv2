import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const OtherCategories = () => {
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
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
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
    <>
      <div className='pd-categories ml-10 mr-10'>
        <div className='txt-center mb-20'>
              <div className='
              txt-semibold 
              font-family-montserrat 
              font18 
              bg-8566FF
              br5
              bgFF951A
              color_white
              pdbtn
              '>
                Computación
              </div>
        </div>
        <Slider {...settings} className=''>
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
                          <div className='
                          justify-content
                          flex-container 
                          font-family-montserrat font400 
                          pd-precios
                          baseline-items'>
                            <div className='flex-item font18v2 margin-right-10'>S/{c.precioFinal.toFixed(2)}</div>
                            <div className='flex-item tachado flex-center font13'>S/{c.precio.toFixed(2)}</div>
                          </div>
                          <div className='font-family-montserrat btn-cart pointer margin-top-30 font12v2'>Añadir al carrito</div>
                      </div>
                  </div>
              </div>
              )
          }
              
          {/* Agrega más elementos div para más slides */}
        </Slider>
      </div>

      <div className='pd-categories ml-10 mr-10'>
        <div className='txt-center mb-20'>
              <div className='
              txt-semibold 
              font-family-montserrat 
              font18 
              bg-8566FF
              br5
              bgFF951A
              color_white
              pdbtn
              '>
                Gaming
              </div>
        </div>
        <Slider {...settings} className=''>
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
                          <div className='
                          justify-content
                          flex-container 
                          font-family-montserrat font400 
                          pd-precios
                          baseline-items'>
                            <div className='flex-item font18v2 margin-right-10'>S/{c.precioFinal.toFixed(2)}</div>
                            <div className='flex-item tachado flex-center font13'>S/{c.precio.toFixed(2)}</div>
                          </div>
                          <div className='font-family-montserrat btn-cart pointer margin-top-30 font12v2'>Añadir al carrito</div>
                      </div>
                  </div>
              </div>
              )
          }
              
          {/* Agrega más elementos div para más slides */}
        </Slider>
      </div>

      <div className='pd-categories ml-10 mr-10'>
        <div className='txt-center mb-20'>
              <div className='
              txt-semibold 
              font-family-montserrat 
              font18 
              bg-8566FF
              br5
              bgFF951A
              color_white
              pdbtn
              '>
                Componentes para PC
              </div>
        </div>
        <Slider {...settings} className=''>
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
                          <div className='
                          justify-content
                          flex-container 
                          font-family-montserrat font400 
                          pd-precios
                          baseline-items'>
                            <div className='flex-item font18v2 margin-right-10'>S/{c.precioFinal.toFixed(2)}</div>
                            <div className='flex-item tachado flex-center font13'>S/{c.precio.toFixed(2)}</div>
                          </div>
                          <div className='font-family-montserrat btn-cart pointer margin-top-30 font12v2'>Añadir al carrito</div>
                      </div>
                  </div>
              </div>
              )
          }
              
          {/* Agrega más elementos div para más slides */}
        </Slider>
      </div>
    </>
  )
}
