import React from 'react'

import oliver_coleman from '../img/oliver_coleman.png'
import san_francisco from '../img/san_francisco.png'
import kitchen_essentials from '../img/kitchen_essentials.png'
import sixDIYsummer from '../img/sixDIYsummer.png'
import oliver_coleman_big from '../img/oliver_coleman_big.png'
import roasted_carrot from '../img/roasted_carrot.png'
import ai_artwork from '../img/ai_artwork.png'
import favorite_lifestyle from '../img/favorite_lifestyle.png'


//import { BsTiktok } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'
import { BsInstagram, BsYoutube } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

import Topic from '../../components/Topic'
import Loremipsum from '../../components/Loremipsum'
import Readalso from '../../components/Readalso'
import Tags from '../../components/Tags'
import Author from '../../components/Author'
import Previous from '../../components/Previous'
import Reply from '../../components/Reply'
import Advertisement from '../../components/Advertisement'
import Recommended from '../../components/Recommended'

const Editorial = () => {
    return (
        <div>
            <div>
                <img className='relative object-cover' style={{ height: '612px', width: '100%', imageRendering: 'pixelated' }} 
                    src={san_francisco} alt={san_francisco} />
                <div className='absolute -mt-36 ml-20 pl-24 pb-10 w-[88%] h-[390px] text-center rounded-lg 
                    dark:bg-[rgb(22,20,20)] bg-[rgb(254,254,254)] dark:shadow-lg'>
                    <Topic  
                            headertitle='TRAVEL' title='The Must-See Room In The San Francisco Decorator’s Showcase'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                            img={oliver_coleman} author=' Oliver Coleman' date='August 17, 2022' view='52'
                        />
                </div>
            </div>
            <div className='flex mt-52' style={{ width: '90.2%', marginLeft: '132px' }}>
                <div className='mt-5' style={{ width: '720px', fontFamily: 'sans-serif' }}>
                    <Loremipsum />
                    <Readalso
                        text1='Furnished Versus Unfurnished Apartments: The Pros and Cons'
                        text2='5 Design Books You Can Get This Summer'
                        text3='Kitchen Essentials - What Your Brand New Apartment Really Needs' />
                    <Tags text1='colors' text2='decor' text3='furniture' text4='home' text5='interior design' />

                    <Author img={oliver_coleman_big} author='Oliver Coleman'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit euismod in pellentesque massa.'
                        icon1={<FaHome />} icon2={<FaFacebookF />} icon3={<BsInstagram />} icon4={<BsYoutube />} />
                    {/* previous */}
                    <Previous img1={kitchen_essentials} title1='PREVIOUS'
                        text1='Kitchen Essentials - What Your Brand New Apartment Really Needs' none='' 
                        title2='NEXT' text2='6 DIY Summer Crafts for Your Home, Outdoor, and Family Fun'
                        img2={sixDIYsummer} />
                    {/* Leave a Reply */}
                    <Reply />
                </div>
                <div className='ml-24' style={{ marginTop: '70px' }} >
                    <Advertisement />
                </div>
            </div>
            <div style={{ marginTop: '50px', marginBottom: '-15px' }}>
                <Recommended img1={roasted_carrot} img2={ai_artwork} img3={favorite_lifestyle}
                    title1='This Roasted Carrot and Red Pepper Hummus Flatbread Is a Delicious Way To Clean Out Your Fridge'
                    title2='Why AI Artwork Is Totally Legit'
                    title3='12 Top Favorite Lifestyle Podcasts for Modern Conscious Women'
                    text1='Food & Recipes' text2='Technology' text3='Podcast' />
            </div>
        </div>
    )
}

export default Editorial