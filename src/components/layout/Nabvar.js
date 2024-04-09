import React from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { IoSearchOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

export const Nabvar = () => {
  return (
    <>
     <div className='flex-container bg_201CE5 color_white justify-content font-family-Arial'>
        <div className='flex-item flex-start txt-start flex-container'>
            <IoMenu size={25} className='flex-item'/>
            <IoSearchOutline size={25} className='flex-item'/>
        </div>
        <div className='flex-item txt-center font20'>
          <img src='/compuv2/img_publics/logo-compured.png'
            alt='laptop categoria'
            width='80px'
             />
        </div>
        <div className='flex-item flex-end flex-container'>
            <AiOutlineUser size={25} className='flex-item'/>
            <LiaShoppingCartSolid size={25} className='flex-item'/>
        </div>
     </div>
    </>
  )
}
