import React from 'react'
import { Link } from 'react-router-dom'

import Advertisement from '../../components/Advertisement'
import Taggcol from '../../components/Taggcol'
import Recommended from '../../components/Recommended'

import oliver_coleman_big from '../img/oliver_coleman_big.png'
import summer_wardrobe from '../img/summer_wardrobe.png'
import gorgeous_skin from '../img/gorgeous_skin.png'
import coconut_oil from '../img/coconut_oil.png'
import sixDIYsummer from '../img/sixDIYsummer.png'
import dress_outfits from '../img/dress_outfits.png'
import classic_summer from '../img/classic_summer.png'
import five_things from '../img/five_things.png'
import surprising_things from '../img/surprising_things.png'
import evidence_based from '../img/evidence_based.png'
import ai_artwork from '../img/ai_artwork.png'

import { FaHome, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"

const Author = () => {
    return (
        <div className='-mb-5 pt-[80.5px]'>
            <div className='h-[100vh] w-[100wh] -mb-[100px]'>
                <div className='ml-[43.15%] w-[186px] h-[184.4px] border-[3px] border-solid 
                dark:border-[#7b79cad5] border-indigo-900 rounded-full'>
                    <img className='w-[172px] h-[172px] ml-1 mt-1 object-cover rounded-full' 
                    src={oliver_coleman_big} alt={oliver_coleman_big}  />
                </div>
                <h1 className='mt-[52.5px] text-[57px] font-semibold dark:text-slate-100 
                    text-neutral-900 text-center' 
                    style={{ fontFamily: 'sans-serif' }}>
                    Oliver Coleman
                </h1>
                <p className='ml-[402px] mt-[19px] w-[550px] dark:text-zinc-400 text-stone-600 text-[1rem] 
                    font-medium text-center tracking-[0.015rem]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit euismod in pellentesque massa.
                </p>
                <div className='ml-[555px] mt-10 flex items-center'>
                    <Link to={'/'}>
                        <FaHome className='w-[23.2px] h-[23.2px] mr-[49px] dark:text-[#7776cc] 
                        dark:hover:text-zinc-300 text-indigo-900 hover:text-zinc-600 transition-colors duration-300'/>
                    </Link>
                    <Link to={'https://www.facebook.com/'}>
                        <FaFacebookF className='w-[23px] h-[23px] mr-[49px] dark:text-[#7776cc]
                        dark:hover:text-zinc-300 text-indigo-900 hover:text-zinc-600 transition-colors duration-300' />
                    </Link>
                    <Link to={'https://www.instagram.com/'}>
                        <FaInstagram className='w-[23.4px] h-[23.4px] mr-[47.7px] dark:text-[#7776cc] 
                        dark:hover:text-zinc-300 text-indigo-900 hover:text-zinc-600 transition-colors duration-300' />
                    </Link>
                    <Link to={'https://www.youtube.com/'}>
                        <FaYoutube className='w-[25.5px] h-[25.5px] dark:text-[#7776cc] 
                        dark:hover:text-zinc-300 text-indigo-900 hover:text-zinc-600 transition-colors duration-300' />
                    </Link>
                </div>
            </div>
            <div className='flex '
                style={{ width: '89.4%', marginLeft: '72.5px', marginBottom: '105px' }}>
                <div className='flex' style={{ width: '869.5px' }}>
                    <div className='mr-12'>
                        <Taggcol img={summer_wardrobe} title='24 Summer Wardrobe Staples That Are Simple, Sustainable, and Editor-Approved'
                            author="Lucas Sebastian" date='November 4, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                        <Taggcol img={coconut_oil} title='8 Homemade Coconut Oil Shampoo Recipes For Beautiful Hair'
                            author="Maggie Brandon" date='August 17, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                        <Taggcol img={sixDIYsummer} title='6 DIY Summer Crafts for Your Home, Outdoor, and Family Fun'
                            author="Camille d'Amelio" date='August 17, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                        <Taggcol img={five_things} title='What Are 5 Things in Your Kitchen You’d Never Be Caught Without?'
                            author="Camille d'Amelio" date='August 17, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristiq..." />
                    </div>
                    <div>
                        <Taggcol img={gorgeous_skin} title='Wake Up to Gorgeous Skin With the 10 Best Night Creams Available (According to the Experts)'
                            author="Oliver Coleman" date='August 11, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                        <Taggcol img={surprising_things} title='14 Surprising Things About Parenting in USA'
                            author="Eric Gordon" date='August 17, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                        <Taggcol img={classic_summer} title='Classic Summer Color and Print Wardrobe Combination'
                            author="Jennifer Ledford" date='August 17, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                        <Taggcol img={dress_outfits} title='How To Dress Up & Dress Down Your Outfits'
                            author="Camille d'Amelio" date='August 11, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristiq..." />
                    </div>
                </div>
                <div className='mt-8' >
                    <Advertisement />
                </div>
            </div>
            <Recommended
                img1={evidence_based} title1="10 Evidence-Based Benefits of Green Tea" text1="Health & Wellness"
                img2={ai_artwork} title2="Why AI Artwork Is Totally Legit" text2="Technology"
                img3={five_things} title3="What Are 5 Things in Your Kitchen You’d Never Be Caught Without?" text3="Lifestyle"
            />
        </div>
    )
}

export default Author