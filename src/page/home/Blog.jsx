import React from 'react'

import roasted_carrot from '../img/roasted_carrot.png'
import camille_amelio from '../img/camille_amelio.png'
import camille_amelio_big from '../img/camille_amelio_big.png'
import kitchen_essentials from '../img/kitchen_essentials.png'
import sixDIYsummer from '../img/sixDIYsummer.png'
import car_camping from '../img/car_camping.png'
import classic_summer from '../img/classic_summer.png'
import most_romantic from '../img/most_romantic.png'

import { IoMdTime } from 'react-icons/io'
import { LiaBookmarkSolid } from 'react-icons/lia'
import { BsBarChartFill } from 'react-icons/bs'
import { FaHome, FaPinterestP, FaTwitter } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

import Loremipsum from '../../components/Loremipsum'
import Readalso from '../../components/Readalso'
import Tags from '../../components/Tags'
import Author from '../../components/Author'
import Previous from '../../components/Previous'
import Reply from '../../components/Reply'
import Advertisement from '../../components/Advertisement'
import Recommended from '../../components/Recommended'


const Blog = () => {
    return (
        <div>
            <div className='flex justify-start items-center pr-5 pb-5 pt-[31px]'
                style={{ width: '100%', borderBottom: '1px solid lightgrey' }}>
                <div className='mt-8' style={{ marginLeft: '43px' }}>
                    <button className='mt-1.5 tracking-widest w-32 h-11 pb-14 dark:bg-neutral-900 bg-[rgb(254,254,254)] 
                        text-indigo-900 hover:text-stone-700 font-semibold dark:text-[#6865bb] dark:hover:text-slate-300
                        shadow-inherit rounded-full transition-colors duration-200'
                        style={{ fontSize: '14px', marginLeft: '34px' }}>
                        FOOD & RECIPES
                    </button>
                    <h1 className='tracking-wide dark:text-slate-200 text-stone-900 font-semibold'
                        style={{
                            fontSize: '41px', fontFamily: 'sans-serif', lineHeight: '55px',
                            width: '670px', marginLeft: '31.5px', marginTop: '-2.5px'
                        }}>
                        This Roasted Carrot and Red Pepper Hummus Flatbread Is a Delicious Way To Clean Out Your Fridge
                    </h1>
                    <p className='tracking-wide dark:text-zinc-400 text-zinc-500 ml-8 font-medium'
                        style={{ width: '560px', fontSize: '18.5px', marginTop: '23px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </p>
                    <div className='flex text-sm mt-10' style={{ marginLeft: '35px', width: '620px' }}>
                        <div className='rounded-full w-10 h-10 p-0.5 mr-2 border-[1px] border-solid dark:border-[#605eaf] border-indigo-800'>
                            <img className='rounded-full' src={camille_amelio} alt={camille_amelio} />
                        </div>
                        <p className='mt-2 cursor-pointer dark:text-zinc-400 text-zinc-600 dark:hover:text-[#535199] 
                            hover:text-indigo-900 font-medium tracking-wider transition-colors duration-200' 
                            style={{ fontSize: '14px' }}>
                            Camille d'Amelio
                        </p>
                        <IoMdTime className='ml-3 mr-1 mt-2.5 w-5 h-4 dark:text-zinc-400 text-zinc-700 ' />
                        <p className='dark:text-zinc-400 text-zinc-600 font-medium mt-2 ml-0.5 mr-2'> August 17, 2022 </p>
                        <p className='py-1.5 px-2 mt-0.5 ml-2.5 rounded dark:text-zinc-400 text-zinc-600 tracking-wide font-semibold'
                            style={{ border: '1px solid lightgray', fontSize: '12px' }}>
                            Updated
                        </p>
                        <LiaBookmarkSolid className='ml-3.5 mr-1 mt-2 w-5 h-5 dark:text-zinc-400 text-stone-700' />
                        <p className='dark:text-zinc-400 text-zinc-600 mt-2 font-semibold' style={{ fontSize: '14.4px' }}>1 min Read</p>
                        <BsBarChartFill className='ml-3 dark:text-zinc-400 text-stone-700' style={{ marginTop: '11px' }} />
                        <p className='mt-2 ml-2 dark:text-zinc-400 text-stone-600 tracking-wide'>57 Views</p>
                    </div>
                </div>
                <img className='rounded-[10px] ml-[50.2px] object-cover' style={{ width: '36%', height: '480px' }} 
                    src={roasted_carrot} alt={roasted_carrot} />
            </div>

            <div className='flex -mt-7' style={{ width: '90.2%', marginLeft: '132px' }}>
                <div className='mt-5' style={{ width: '720px', fontFamily: 'sans-serif' }}>
                    <Loremipsum />
                    <Readalso
                        text1='Take Your Blackberry Cobbler to the Next Level with Two Simple Ingredients'
                        text2='According to Nutritionists, These Are the 7 Ingredients Your Food Should Have'
                        text3='The 11 Best Meal Planning Apps to Help You Lose Weight' />
                    <Tags text1='glutenfree' text2='healthy' text3='instant' text4='nobake' text5='recipes' />

                    <Author img={camille_amelio_big} author="Camille d'Amelio"
                        text='Vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus
                                pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis.'
                        icon1={<FaHome />} icon2={<BsInstagram />} icon3={<FaTwitter />} icon4={<FaPinterestP  />} />
                    {/* previous */}
                    <Previous 
                        img1={kitchen_essentials} title1='PREVIOUS'
                        text1='Kitchen Essentials - What Your Brand New Apartment Really Needs' 
                        img2={sixDIYsummer} title2='NEXT'
                        text2='6 DIY Summer Crafts for Your Home, Outdoor, and Family Fun'
                        />
                    {/* Leave a Reply */}
                    <Reply />
                </div>
                <div className='ml-24' style={{ marginTop: '70px' }} >
                    <Advertisement />
                </div>
            </div>
            <div style={{ marginTop: '50px', marginBottom: '-15px' }}>
                <Recommended img1={car_camping} img2={classic_summer} img3={most_romantic}
                    title1='Car Camping 101: How to Sleep In Your Car (Safety Tips, What to Pack & More)'
                    title2='Classic Summer Color and Print Wardrobe Combination'
                    title3='The Most Romantic & Sustainable Destinations'
                    text1='Travel' text2='Lifestyle' text3='Videos' />
            </div>
        </div>
    )
}

export default Blog