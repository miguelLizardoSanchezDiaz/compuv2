import React from 'react'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import Slider from 'react-slick';

export const DetalleProducto = () => {
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
        imgUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.oechsle.pe%2Fteclado-mecanico-logitech-g-pro-gamer-keyboard-gx-blues-lightsync-rgb-sin-numerico-920-009388-1000212663%2Fp&psig=AOvVaw1P-B6zz6xd5okFzACaZjui&ust=1712074781955000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMD_-9q1oYUDFQAAAAAdAAAAABAE',
        marca:'Logitech',
        description:'Teclado Gamer Logitech G513',
        precio:120.00,
        descuento:10.00,
        precioFinal:120.00*(1-(10/100))
    },
    {
      id: 2,
      imgUrl: 'https://mmstoreperu.com/cdn/shop/files/PAD-MOUSE-REDRAGON-KUNLUN-L-P006-_-XL-_-880-X-420-X-4MM_700x.png?v=1689102461',
      marca: 'Redragon',
      description: 'Pad mouse Redragon Kunlun L',
      precio: 40,
      descuento: 10,
      precioFinal: 40 * (1 - (10 / 100))
    },
    {
      id: 1,
      imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.oechsle.pe%2Fteclado-mecanico-logitech-g-pro-gamer-keyboard-gx-blues-lightsync-rgb-sin-numerico-920-009388-1000212663%2Fp&psig=AOvVaw1P-B6zz6xd5okFzACaZjui&ust=1712074781955000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMD_-9q1oYUDFQAAAAAdAAAAABAE',
      marca: 'Logitech',
      description: 'Teclado Gamer Logitech G513',
      precio: 120.00,
      descuento: 10.00,
      precioFinal: 120.00 * (1 - (10 / 100))
    },
    {
      id: 2,
      imgUrl: 'https://mmstoreperu.com/cdn/shop/files/PAD-MOUSE-REDRAGON-KUNLUN-L-P006-_-XL-_-880-X-420-X-4MM_700x.png?v=1689102461',
      marca: 'Redragon',
      description: 'Pad mouse Redragon Kunlun L',
      precio: 40,
      descuento: 10,
      precioFinal: 40 * (1 - (10 / 100))
    }
]

  return (
    <>
      <div className='ml-10 mr-10'>
        <div className='font-family-montserrat font13'>
          Inicio {'>'} Tienda {'>'} Zona Gamer {'>'} Nombre art
        </div>
        
        <div className='flex-container-wrap bottom-container'>
          <div className='container-40'>
            <InnerImageZoom 
            src="https://falabella.scene7.com/is/image/FalabellaPE/116868436_1?wid=1500&hei=1500&qlt=70" 
            zoomSrc="https://falabella.scene7.com/is/image/FalabellaPE/116868436_1?wid=1500&hei=1500&qlt=70"
            className='img-responsive'
            />

          </div>
          <div className='container-60 font-family-montserrat'>
            <h4 className='nonegrita'>REGRAGON</h4>
            <h1>Mouse Redragon Griffin M607 RGB Negro</h1>
            <p>S/ 98.00 <s> S/ 140.00</s></p> 
            <p className='justificar'>
              Descripción de producto Lorem ippusmmsadasd Descripción de producto Lorem ippusmmsadasd
              Descripción de producto Lorem ippusmmsadasd Descripción de producto Lorem ippusmmsadasd
              Descripción de producto Lorem ippusmmsadasd Descripción de producto Lorem ippusmmsadasd
            </p>
            <ul className='color008E0E pd-l-20 txt-negrita500'>
              <li>Stock disponible - ¡Por agotarse, es uno de los más vendidos!</li>
            </ul>
            <div className="hr"></div>
            <div>
              <label className='font-family-montserrat font15'>Arma el kit perfecto con estos productos</label>
            </div>

            <div className='container-100 flex-container-wrap'>
              <div className='flex-container container-50 borderE2E2E2'>
                <div className='container-40'>
                    <img src='https://mmstoreperu.com/cdn/shop/files/PAD-MOUSE-REDRAGON-KUNLUN-L-P006-_-XL-_-880-X-420-X-4MM_700x.png?v=1689102461'
                      alt='laptop categoria'
                      className='img-responsive ' />
                </div>
                <div className='container-60'>
                  <div>
                    <div>Teclado Gamer Logitech G513</div>
                    <div className='flex-container font-family-montserrat font400 pd-precios baseline-items'>
                      <div className='flex-item font18v2 margin-right-10'>S/ 100.00</div>
                      <div className='flex-item tachado flex-center font13'>S/ 80.00</div>
                    </div>
                    <div>
                      <input type='checkbox' /> Seleccionar
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex-container container-50 borderE2E2E2'>
                <div className='container-40'>
                    <img src='https://mmstoreperu.com/cdn/shop/files/PAD-MOUSE-REDRAGON-KUNLUN-L-P006-_-XL-_-880-X-420-X-4MM_700x.png?v=1689102461'
                      alt='laptop categoria'
                      className='img-responsive ' />
                </div>
                <div className='container-60'>
                  <div>
                    <div>Teclado Gamer Logitech G513</div>
                    <div className='flex-container font-family-montserrat font400 pd-precios baseline-items'>
                      <div className='flex-item font18v2 margin-right-10'>S/ 100.00</div>
                      <div className='flex-item tachado flex-center font13'>S/ 80.00</div>
                    </div>
                    <div>
                      <input type='checkbox' /> Seleccionar
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className='flex-container-wrap container-100'>
              <div className='width-20-product'>
                <div className='txt-left-cart-btn container-100'>
                  <input type='button' className='h-50px txt-negrita pointer btn-counter font22 font-family-montserrat brd-btn-left' value="-"/>
                  <input type='button' className='h-50px txt-negrita pointer btn-counter font22 font-family-montserrat' value="1"/>
                  <input type='button' className='h-50px txt-negrita pointer btn-counter font22 font-family-montserrat brd-btn-right' value="+"/>
                </div>
              </div>
              <div className='width-80-product'>
                <div className='h-50px font-family-montserrat btn-cart-product pointer container-100 font18'>
                  Añadir al carrito
                </div>
              </div>

              
              
            </div>
            
          </div>
        </div>

        
      </div>
    </>
  )
}
