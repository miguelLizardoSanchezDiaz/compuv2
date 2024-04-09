import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

export const Categories = () => {
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
              slidesToShow: 2.5,
              slidesToScroll: 2.5,
              initialSlide: 2.5,
            },
          },
        ],
    };

    const categories=[
        {
            id:1,
            imgUrl:'/compuv2/img_publics/mujer-trabajando-con-laptop.webp',
            title:'Laptop',
            description:'Hasta 50% off'
        },
        {
            id:2,
            imgUrl:'/compuv2/img_publics/mujer-trabajando-con-laptop.webp',
            title:'Zona gamer',
            description:'Hasta 50% off'
        },
        {
            id:3,
            imgUrl:'/compuv2/img_publics/mujer-trabajando-con-laptop.webp',
            title:'Monitores',
            description:'Hasta 50% off'
        },
        {
          id:4,
            imgUrl:'/compuv2/img_publics/mujer-trabajando-con-laptop.webp',
            title:'Laptop',
            description:'Hasta 50% off'
        },
        {
          id:5,
            imgUrl:'/compuv2/img_publics/mujer-trabajando-con-laptop.webp',
            title:'Laptop',
            description:'Hasta 50% off'
        },
        {
          id:6,
            imgUrl:'/compuv2/img_publics/mujer-trabajando-con-laptop.webp',
            title:'Laptop',
            description:'Hasta 50% off'
        },
        {
          id:7,
            imgUrl:'/compuv2/img_publics/mujer-trabajando-con-laptop.webp',
            title:'Laptop',
            description:'Hasta 50% off'
        },
        {
          id:8,
            imgUrl:'/compuv2/img_publics/mujer-trabajando-con-laptop.webp',
            title:'Laptop',
            description:'Hasta 50% off'
        },
        {
          id:9,
            imgUrl:'/compuv2/img_publics/mujer-trabajando-con-laptop.webp',
            title:'Laptop',
            description:'Hasta 50% off'
        },
        {
          id:10,
            imgUrl:'/compuv2/img_publics/mujer-trabajando-con-laptop.webp',
            title:'Laptop',
            description:'Hasta 50% off'
        },
        {
          id:11,
            imgUrl:'/compuv2/img_publics/mujer-trabajando-con-laptop.webp',
            title:'Laptop',
            description:'Hasta 50% off'
        },

    ]
    
    
  return (
    <div className='bg-categories pd-categories'>
      <div className='flex-container justify-content padding-categories-titles baseline-items'>
            <div className='txt-semibold font-family-montserrat font18'>Nuestras categorias</div>
            <div className='font-family-montserrat font12v2'>Ver Todo</div>
        </div> 
      <Slider {...settings}>
        {
            categories.map(c=>
            <div key={c.id}>
                <div className='bg-fff border-radius-9 margen-item'>
                    <Link to="/detalle-producto" className='text-decoration-none'>
                      <img src={c.imgUrl}
                      alt='laptop categoria'
                      className='img-responsive border-radius-9 ' />
                    </Link>
                      <div className='padding-categories-item'>
                          <div className='txt-semibold font-family-montserrat font15'>{c.title}</div>
                          <div className='font-family-montserrat font14 txt-72FD91'>{c.description}</div>
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
