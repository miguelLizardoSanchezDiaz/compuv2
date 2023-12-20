import React from 'react'
import { Nabvar } from '../layout/Nabvar'
import { Slider } from '../layout/Slider'
import { Coupon } from '../sections/Coupon'
import { Promo } from '../sections/Promo'
import { Categories } from '../sections/Categories'
import { MoreSale } from '../sections/MoreSale'
import { Gift } from '../sections/Gift'
import { Offers } from '../sections/Offers'
import { ProductsForYou } from '../sections/ProductsForYou'
import { OtherCategories } from '../sections/OtherCategories'
import { Benefits } from '../sections/Benefits'
export const Home = () => {
  return (
    <>
        <Coupon/>
        <Nabvar className="animate__animated animate__bounceOut"/>
        <Slider/>
        <Promo/>
        <Categories/>
        <MoreSale/>
        <Gift/>
        <Offers/>
        <ProductsForYou/>
        <OtherCategories/>
        <Benefits/>
        
    </>
  )
}
