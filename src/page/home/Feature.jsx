import React from 'react'

import coconut_oil from '../img/coconut_oil.png'
import maggie_brandon from '../img/maggie_brandon.png'
import maggie_brandon_big from '../img/maggie_brandon_big.png'
import interior_design from '../img/interior_design.png'
import summer_wardrobe from '../img/summer_wardrobe.png'
import most_romantic from '../img/most_romantic.png'
import public_land from '../img/public_land.png'
import furnished_versus from '../img/furnished_versus.png'

import { IoMdTime } from 'react-icons/io'
import { LiaBookmarkSolid } from 'react-icons/lia'
import { BsBarChartFill, BsYoutube } from 'react-icons/bs'
import { FaHome, FaPinterestP } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

import Loremipsum from '../../components/Loremipsum'
import Readalso from '../../components/Readalso'
import Tags from '../../components/Tags'
import Author from '../../components/Author'
import Previous from '../../components/Previous'
import Reply from '../../components/Reply'
import Advertisement from '../../components/Advertisement'
import Recommended from '../../components/Recommended'


const Feature = () => {
  return (
    <div>
      <div className='flex justify-between items-center' style={{ width: '100%' }}>
        <div className='text-center -ml-12 mt-5 pr-5'>
          <button className='ml-20 -mt-2 tracking-widest w-32 h-11 pb-0.5 dark:bg-neutral-900 bg-[rgb(254,254,254)] 
            dark:text-[#7c79d3] dark:font-semibold dark:hover:text-slate-100 text-indigo-900 hover:text-stone-700 font-semibold shadow-inherit rounded-full'
            style={{ fontSize: '14.4px' }}>
            LIFESTYLE
          </button>
          <div className='mt-7 text-center' style={{ marginLeft: '88px' }}>
            <h1 className='tracking-wider dark:text-slate-100 text-stone-900 font-semibold -mt-2'
              style={{ fontSize: '41px', fontFamily: 'sans-serif', lineHeight: '55px', width: '600px' }}>
              8 Homemade Coconut Oil Shampoo Recipes For Beautiful Hair
            </h1>
            <p className='tracking-wide dark:text-zinc-400 text-zinc-500 ml-9 font-medium'
              style={{ width: '530px', fontSize: '18.5px', marginTop: '23px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            <div className='flex text-sm mt-10' style={{ marginLeft: '40px', width: '520px' }}>
              <div className='rounded-full w-10 h-10 p-0.5 border-[1px] border-solid dark:border-indigo-600 border-indigo-800'>
                <img className='rounded-full' src={maggie_brandon} alt={maggie_brandon} />
              </div>
              <p className='dark:text-zinc-400 text-zinc-600 font-medium tracking-wider mt-2 ml-2' style={{ fontSize: '14px' }}>
                Maggie Brandon
              </p>
              <IoMdTime className='ml-3.5 mr-1 mt-2.5 w-5 h-4 dark:text-zinc-400 text-zinc-700' />
              <p className='dark:text-zinc-400 text-zinc-600 font-medium mt-2 ml-0.5 mr-2'> August 17, 2022 </p>
              <p className='py-1.5 px-2 mt-0.5 ml-2.5 rounded dark:text-zinc-400 text-zinc-600 tracking-wide font-semibold'
                style={{ border: '1px solid lightgray', fontSize: '12px' }}>
                Updated
              </p>
              <LiaBookmarkSolid className='ml-3.5 mr-1 mt-2 w-5 h-5 dark:text-zinc-400 text-stone-700' />
              <p className='dark:text-zinc-400 text-zinc-600 mt-2 font-semibold' style={{ fontSize: '14.4px' }}>1 min Read</p>
            </div>
            <div className='flex ml-60'>
              <BsBarChartFill className='ml-1 dark:text-zinc-400 text-stone-700' style={{ marginTop: '5px' }} />
              <p className='ml-2 dark:text-zinc-400 text-stone-600 tracking-wide'>86 Views</p>
            </div>
          </div>
        </div>
        <img className='object-cover' style={{ width: '47%', height: '100vh' }} src={coconut_oil} alt={coconut_oil} />
      </div>

      <div className='flex -mt-7' style={{ width: '90.2%', marginLeft: '132px' }}>
        <div className='mt-5' style={{ width: '720px', fontFamily: 'sans-serif' }}>
          <Loremipsum />
          <Readalso text1='Car Camping 101: How to Sleep In Your Car (Safety Tips, What to Pack & More)'
            text2='8 Homemade Coconut Oil Shampoo Recipes For Beautiful Hair'
            text3='Wake Up to Gorgeous Skin With the 10 Best Night Creams Available (According to the Experts)' />
          <Tags text1='casual' text2='fashion' text3='makeup' text4='shopping' text5='trending' />

          <Author img={maggie_brandon_big} author='Maggie Brandon'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit euismod in pellentesque massa placerat duis ultricies lacus.'
            icon1={<FaHome />} icon2={<BsInstagram />} icon3={<FaPinterestP />} icon4={<BsYoutube />} />
          {/* previous */}
          <Previous img1={interior_design} title1='PREVIOUS'
            text1='Interior Design - A Comprehen sive Guide for Enthusiasts' none='' title2='NEXT'
            text2='24 Summer Wardrobe Staples That Are Simple, Sustainable, and Editor-Approved'
            img2={summer_wardrobe} />
          {/* Leave a Reply */}
          <Reply />
        </div>
        <div className='ml-24' style={{ marginTop: '70px' }} >
          <Advertisement />
        </div>
      </div>
      <div style={{ marginTop: '50px', marginBottom: '-15px' }}>
        <Recommended img1={most_romantic} img2={public_land} img3={furnished_versus}
          title1='The Most Romantic & Sustainable Destinations'
          title2='EV Charging on Public Land Shouldn’t Be a Big Deal' 
          title3='Furnished Versus Unfurnished Apartments: The Pros and Cons'
          text1='Videos' text2='Technology' text3='Home Decor' />
      </div>
    </div>
  )
}

export default Feature