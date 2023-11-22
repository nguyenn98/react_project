import React from 'react'

import { FaHome } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { BsVimeo } from 'react-icons/bs'

import lucas_sebastian from '../img/lucas_sebastian.png'
import lucas_sebastian_big from '../img/lucas_sebastian_big.png'
import summer_wardrobe from '../img/summer_wardrobe.png'

import coconut_oil from '../img/coconut_oil.png'
import podcast_playlist from '../img/podcast_playlist.png'
import perfect_steak from '../img/perfect_steak.png'
import sweet_potato from '../img/sweet_potato.png'

import Recommended from '../../components/Recommended'
import Advertisement from '../../components/Advertisement'
import Loremipsum from '../../components/Loremipsum'
import Readalso from '../../components/Readalso'
import Tags from '../../components/Tags'
import Author from '../../components/Author'
import Previous from '../../components/Previous'
import Reply from '../../components/Reply'
import Topic from '../../components/Topic'

const Modern = () => {
    return (
        <div>
            <div style={{ width: '89.4%', marginLeft: '72.5px', paddingTop: '7px' }}>
                <div style={{marginLeft: '120px'}}>
                    <Topic
                        headertitle='LIFESTYLE' title='24 Summer Wardrobe Staples That Are Simple, Sustainable, and Editor–Approved'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                        img={lucas_sebastian} author='Lucas Sebastian' date='November 4, 2022' view='147'
                    />
                </div>
                <img className='ml-0.5 mt-4' style={{ width: '100%' }} src={summer_wardrobe} alt={summer_wardrobe} />
                <div className='flex -mt-7' style={{ width: '95.5%', marginLeft: '60px' }}>
                    <div className='mt-5' style={{ width: '720px', fontFamily: 'sans-serif' }}>
                        <Loremipsum />
                        <Readalso text1='Car Camping 101: How to Sleep In Your Car (Safety Tips, What to Pack & More)'
                            text2='8 Homemade Coconut Oil Shampoo Recipes For Beautiful Hair'
                            text3='Wake Up to Gorgeous Skin With the 10 Best Night Creams Available (According to the Experts)' />
                        <Tags text1='casual' text2='fashion' text3='makeup' text4='shopping' text5='trending' />

                        <Author img={lucas_sebastian_big} author='Lucas Sebastian'
                            text='Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet justo donec enim.'
                            icon1={<FaHome />} icon2={<FaFacebookF />} icon3={<BsTwitter />} icon4={<BsVimeo />} />
                        {/* previous */}
                        <Previous img1={coconut_oil} title1='PREVIOUS'
                            text1='8 Homemade Coconut Oil Sham poo Recipes For Beautiful Hair' none='none' />
                        {/* Leave a Reply */}
                        <Reply />
                    </div>
                    <div className='ml-24' style={{ marginTop: '70px' }} >
                        <Advertisement />
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '50px', marginBottom: '-15px' }}>
                <Recommended
                    img1={podcast_playlist} img2={perfect_steak} img3={sweet_potato}
                    title1='Podcast Playlist: Transform Your New Year’s Resolutions into Actions'
                    title2='How To Cook the Perfect Steak, Every Time' title3='14 Best Healthy Sweet Potato Recipes'
                    text1='Podcast' text2='Food & Recipes' text3='Food & Recipes' />
            </div>
        </div>
    )
}

export default Modern