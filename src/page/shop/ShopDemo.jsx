import React from 'react'
import { Link } from 'react-router-dom'

import { HiOutlineArrowDown } from 'react-icons/hi'

import Product from '../../components/Product'

import glycolic_acid from '../img/glycolic_acid.png'
import cloudberry_exfoliating from '../img/cloudberry_exfoliating.png'
import healthy_hair from '../img/healthy_hair.png'
import morning_skin from '../img/morning_skin.png'
import vitaminC from '../img/vitaminC.png'
import everyday_glow from '../img/everyday_glow.png'
import inertia_spa from '../img/inertia_spa.png'
import nourishing_repair from '../img/nourishing_repair.png'
import clean_nourishing from '../img/clean_nourishing.png'
import flower_acids from '../img/flower_acids.png'
import minly_mineral from '../img/minly_mineral.png'
import pure_bolanical from '../img/pure_bolanical.png'
import clean_nourishing_trio from '../img/clean_nourishing_trio.png'
import hand_crafted from '../img/hand_crafted.png'
import morning_rouline from '../img/morning_rouline.png'
import take_il from '../img/take_il.png'


const ShopDemo = () => {
  return (
    <div style={{ width: '95%', marginLeft: '31px' }}>
      <p className='text-stone-500 tracking-tight mt-8'>
        <Link to={'/'} className='no-underline text-neutral-500'>Home</Link> / Shop
      </p>
      <div className='mt-8 h-48 mb-5' style={{ borderBottom: '1px solid lightgrey' }}>
        <h1 style={{ fontFamily: 'serif', fontSize: '52px' }}>Shop</h1>
        <p className=' text-stone-700 mt-3 leading-6' style={{ width: '490px', fontSize: '16.5px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo.
        </p>
      </div>
      <div className='-mt-4 flex justify-between items-center'>
        <p className=' text-stone-600 ' style={{ fontSize: '16.5px' }}>Showing all 16 results</p>
        <div className='flex items-center justify-between w-60 h-14 font-medium font-serif
         rounded-md' style={{ border: '1px solid lightgrey' }}>
          <p className='mt-3 ml-4 text-stone-700' style={{ fontSize: '17.4px' }}>Default sorting</p>
          <HiOutlineArrowDown className='mr-3 h-7 w-4 text-stone-500' />
        </div>
      </div>
      <div className='flex mt-5 justify-between'>
        <div>
          <Product id='1' img='https://inertiawp.com/shop/wp-content/uploads/sites/34/2022/08/pexels-anete-lusina-4792681-400x400.jpg' 
                          title='15% Glycolic Acid Overnight Glow Peel' money='20.00' />
          <Product id='2' img='https://inertiawp.com/shop/wp-content/uploads/sites/34/2022/08/pexels-ann-poan-5797999-400x400.jpg'
                          title='15% Glycolic Acid Overnight Glow Peel' money='18.00' />
          <Product id='3' img='https://inertiawp.com/shop/wp-content/uploads/sites/34/2022/08/pexels-karolina-grabowska-4239008-400x400.jpg' 
                          title='15% Glycolic Acid Overnight Glow Peel' money='45.00' />
          <Product id='4' img='https://inertiawp.com/shop/wp-content/uploads/sites/34/2022/08/pexels-harper-sunday-3751227-400x400.jpg'
                          title='15% Glycolic Acid Overnight Glow Peel' money='18.00' />
        </div>
        <div>
          <Product id='4' img='https://inertiawp.com/shop/wp-content/uploads/sites/34/2022/08/pexels-angela-roma-7319126-400x400.jpg' 
                          title='15% Glycolic Acid Overnight Glow Peel' money='20.00' />
          <Product id='5' img='https://inertiawp.com/shop/wp-content/uploads/sites/34/2022/08/pexels-ray-piedra-1502219-400x400.jpg' 
                          title='15% Glycolic Acid Overnight Glow Peel' money='18.00' />
          <Product id='6' img='https://inertiawp.com/shop/wp-content/uploads/sites/34/2022/08/pexels-sarah-chai-7262997-400x400.jpg' 
                          title='15% Glycolic Acid Overnight Glow Peel' money='15.00' />
          <Product id='7' img='https://inertiawp.com/shop/wp-content/uploads/sites/34/2022/08/pexels-dagmara-dombrovska-6738804-400x400.jpg' 
                          title='15% Glycolic Acid Overnight Glow Peel' money='18.00' />
        </div>
        <div>
          <Product id='8' img='https://inertiawp.com/shop/wp-content/uploads/sites/34/2022/08/pexels-karolina-grabowska-4041391-400x400.jpg' 
                          title='15% Glycolic Acid Overnight Glow Peel' money='20.00' />
          <Product id='9' img='https://inertiawp.com/shop/wp-content/uploads/sites/34/2022/08/pexels-angela-roma-7319129-400x400.jpg' 
                          title='15% Glycolic Acid Overnight Glow Peel' money='45.00' />
          <Product id='10' img='https://inertiawp.com/shop/wp-content/uploads/sites/34/2022/08/pexels-furkanfdemir-6215308-400x400.jpg' 
                          title='15% Glycolic Acid Overnight Glow Peel' money='45.00' />
          <Product id='11' img='https://inertiawp.com/shop/wp-content/uploads/sites/34/2022/08/pexels-karolina-grabowska-4202328-400x400.jpg'
                          title='15% Glycolic Acid Overnight Glow Peel' money='90.00' />
        </div>
        <div>
          <Product id='12' img='https://inertiawp.com/shop/wp-content/uploads/sites/34/2022/08/pexels-karolina-grabowska-4465124-400x400.jpg'
                          title='15% Glycolic Acid Overnight Glow Peel' money='25.00' />
          <Product id='13' img='https://inertiawp.com/shop/wp-content/uploads/sites/34/2022/08/pexels-karolina-grabowska-4202924-400x400.jpg' 
                          title='15% Glycolic Acid Overnight Glow Peel' money='55.00' />
          <Product id='14' img='https://inertiawp.com/shop/wp-content/uploads/sites/34/2022/08/pexels-karolina-grabowska-4202325-400x400.jpg'
                          title='15% Glycolic Acid Overnight Glow Peel' money='02.00' />
          <Product id='15' img='https://inertiawp.com/shop/wp-content/uploads/sites/34/2022/08/pexels-anete-lusina-5240621-400x400.jpg'
                          title='15% Glycolic Acid Overnight Glow Peel' money='11.05' />
        </div>
      </div>
    </div>
  )
}

export default ShopDemo