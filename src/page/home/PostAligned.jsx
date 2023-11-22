import React from 'react'

import maggie_brandon from '../img/maggie_brandon.png'
import sweet_potato from '../img/sweet_potato.png'
import roasted_carrot from '../img/roasted_carrot.png'
import maggie_brandon_big from '../img/maggie_brandon_big.png'
import packing_cubes from '../img/packing_cubes.png'
import san_francisco from '../img/san_francisco.png'
import dress_outfits from '../img/dress_outfits.png'
import car_camping from '../img/car_camping.png'

//import { BsTiktok } from 'react-icons/bs'
import { BsInstagram, BsYoutube } from 'react-icons/bs'
//import { FaFacebookF } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'
import { LiaBookmarkSolid } from 'react-icons/lia'
import { BsBarChartFill } from 'react-icons/bs'
import { FaHome, FaPinterestP } from 'react-icons/fa'
//import { FaTwitter } from 'react-icons/fa'

import Loremipsum from '../../components/Loremipsum'
import Readalso from '../../components/Readalso'
import Tags from '../../components/Tags'
import Author from '../../components/Author'
import Previous from '../../components/Previous'
import Reply from '../../components/Reply'
import Advertisement from '../../components/Advertisement'
import Recommended from '../../components/Recommended'

const PostAligned = () => {
    return (
        <div>
            <div className='w-[100%] pt-1 text-start rounded-lg dark:bg-neutral-900 bg-[rgb(254,254,254)]'>
                <div className='mb-4' style={{ marginLeft: '41px', marginTop: '37.5px' }}>
                    <button className='mt-0.5 tracking-widest w-32 h-11 pb-14 dark:bg-inherit bg-[rgb(254,254,254)]
                        dark:text-[#716ece] text-indigo-900 dark:hover:text-stone-300 hover:text-stone-700 
                        font-bold shadow-inherit rounded-full transition-colors duration-200'
                        style={{ fontSize: '12.7px', marginLeft: '34px', fontFamily:'revert' }}>
                        FOOD & RECIPES
                    </button>
                    <h1 className='tracking-wide dark:text-stone-100 text-stone-900 font-semibold'
                        style={{
                            fontSize: '40.5px', fontFamily: 'sans-serif', lineHeight: '55px',
                            width: '850px', marginLeft: '31.5px', marginTop: '-2.5px'
                        }}>
                        14 Best Healthy Sweet Potato Recipes
                    </h1>
                    <p className='tracking-wide dark:text-stone-300 text-zinc-500 ml-8 font-medium'
                        style={{ width: '560px', fontSize: '18.5px', marginTop: '23px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </p>
                    <div className='flex text-sm' style={{ marginLeft: '31px', marginTop: '38px', width: '620px' }}>
                        <div className='rounded-full w-10 h-10 p-0.5  mr-2 border-[1px] border-solid dark:border-[#535199] border-indigo-800'>
                            <img className='rounded-full object-cover' src={maggie_brandon} alt={maggie_brandon} />
                        </div>
                        <p className='dark:text-zinc-200 text-zinc-600 font-medium tracking-wide mt-2' style={{ fontSize: '14px' }}>
                            Maggie Brandon
                        </p>
                        <IoMdTime className='ml-3 mt-2.5 w-5 h-4 dark:text-zinc-200 text-zinc-700 ' />
                        <p className='dark:text-zinc-200 text-zinc-600 font-medium mt-2 ml-0.5 mr-2 tracking-wide'> August 17, 2022 </p>
                        <p className='py-1.5 px-2 mt-0.5 ml-1.5 rounded dark:text-zinc-200 text-zinc-600 tracking-wide font-semibold'
                            style={{ border: '1px solid lightgray', fontSize: '12px' }}>
                            Updated
                        </p>
                        <LiaBookmarkSolid className='ml-3.5 mr-1 mt-2 w-5 h-5 dark:text-zinc-200 text-stone-700' />
                        <p className='dark:text-zinc-200 text-zinc-600 mt-2 font-semibold' style={{ fontSize: '14.4px' }}>1 min Read</p>
                        <BsBarChartFill className=' ml-4 dark:text-zinc-200 text-stone-500' style={{ marginTop: '11px' }} />
                        <p className='mt-2 ml-2 dark:text-zinc-200 text-stone-600 tracking-wide font-semibold'>39 Views</p>
                    </div>
                </div>
                <img style={{ height: '100vh', width: '89%', marginLeft: '75px' }} src={sweet_potato} alt={sweet_potato} />
            </div>
            <div className='flex mt-4' style={{ width: '90.2%', marginLeft: '132px' }}>
                <div style={{ width: '720px', fontFamily: 'sans-serif' }}>
                    <Loremipsum />
                    <Readalso
                        text1='According to Nutritionists, These Are the 7 Ingredients Your Food Should Have'
                        text2='How To Cook the Perfect Steak, Every Time'
                        text3='The 11 Best Meal Planning Apps to Help You Lose Weight' />
                    <Tags text1='glutenfree' text2='healthy' text3='instant' text4='nobake' text5='recipes' />

                    <Author img={maggie_brandon_big} author='Maggie Brandon'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit euismod in pellentesque massa.'
                        icon1={<FaHome />} icon2={<BsInstagram />} icon3={<FaPinterestP />} icon4={<BsYoutube />} />
                    {/* previous */}
                    <Previous img1={packing_cubes} title1='PREVIOUS'
                        text1='Why you should use packing cubes to improve your (traveling) life' none=''
                        title2='NEXT' text2='The Must-See Room In The San Francisco Decorator’s Showcase'
                        img2={san_francisco} />
                    {/* Leave a Reply */}
                    <Reply />
                </div>
                <div className='ml-24' style={{ marginTop: '25px' }} >
                    <Advertisement />
                </div>
            </div>
            <div style={{ marginTop: '50px', paddingBottom: '36.7px' }}>
                <Recommended img1={dress_outfits} img2={car_camping} img3={roasted_carrot}
                    title1='How To Dress Up & Dress Down Your Outfits'
                    title2='Car Camping 101: How to Sleep In Your Car (Safety Tips, What to Pack & More)'
                    title3='This Roasted Carrot and Red Pepper Hummus Flatbread Is a Delicious Way To Clean Out Your Fridge'
                    text1='Lifestyle' text2='Travel' text3='Food & Recipes' />
            </div>
        </div>
    )
}

export default PostAligned