import React from 'react'
import { Nabvar } from '../layout/Nabvar'
import { Coupon } from '../sections/Coupon'
import { Footer } from '../layout/Footer'
import { Principal } from './Principal'
import { DetalleProducto } from './DetalleProducto'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export const Home = () => {
  return (
    <>
        {/*<div className="menu-items">
          <ul>
            <li>Almacenamiento</li>
            <li>Impresoras y suministros</li>
            <li>Laptops</li>
            <li>Monitores</li>
            <li>PC Componentes</li>
          </ul>
        </div>*/}
        <Coupon/>
        <Nabvar className="animate__animated animate__bounceOut"/>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Principal/>} />
              <Route exact path="/detalle-producto" element={<DetalleProducto/>} />
            </Routes>
          </BrowserRouter>
          
        <Footer/>
    </>
  )
}
