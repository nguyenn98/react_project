import React from 'react'

import { FaHome } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { FaPinterestP } from 'react-icons/fa6'

import simon_lambert from '../img/simon_lambert.png'
import sweet_potato from '../img/sweet_potato.png'
import simon_lambert_big from '../img/simon_lambert_big.png'
import sixDIYsummer from '../img/sixDIYsummer.png'
import coconut_oil from '../img/coconut_oil.png'
import furnished_versus from '../img/furnished_versus.png'
import kitchen_essentials from '../img/kitchen_essentials.png'
import dress_outfits from '../img/dress_outfits.png'

import Recommended from '../../components/Recommended'
import Advertisement from '../../components/Advertisement'
import Loremipsum from '../../components/Loremipsum'
import Readalso from '../../components/Readalso'
import Tags from '../../components/Tags'
import Author from '../../components/Author'
import Previous from '../../components/Previous'
import Reply from '../../components/Reply'
import Topic from '../../components/Topic'

import '../styles/style.css'

const Cover = () => {
    return (
        <div>
            <div>
                <div className=' image-title' style={{height: '100vh'}}>
                    <div style={{marginLeft: '170px',marginTop: '-35px' , width: '85%' }}>
                        <Topic color='rgb(254,254,254)' 
                            headertitle='HOME DECOR' title='Interior Design – A Comprehensive Guide for Enthusiasts'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                            img={simon_lambert} author='Simon Lambert' date='August 17, 2022' view='84'
                        />
                    </div>
                </div>
                <div className='flex -mt-9' style={{ width: '86%', marginLeft: '131.2px' }}>
                    <div className='mt-5' style={{ width: '720px', fontFamily: 'sans-serif' }}>
                        <Loremipsum />
                        <Readalso text1='Furnished Versus Unfurnished Apartments: The Pros and Cons'
                            text2='The Must-See Room In The San Francisco Decorator’s Showcase'
                            text3='Kitchen Essentials - What Your Brand New Apartment Really Needs' />
                        <Tags text1='colors' text2='decor' text3='furniture' text4='home' text5='interior design' />

                        <Author img={simon_lambert_big} author='Simon Lambert'
                            text='Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas.'
                            icon1={<FaHome />} icon2={<FaFacebookF />} icon3={<BsInstagram />} icon4={<BsTwitter />} icon5={<FaPinterestP />}/>
                        {/* previous */}
                        <Previous 
                            img1={sixDIYsummer} title1='PREVIOUS' text1='6 DIY Summer Crafts for Your Home, Outdoor, and Family Fun' 
                            img2={coconut_oil} title2='NEXT' text2='8 Homemade Coconut Oil Shampoo Recipes For Beautiful Hair' />
                        {/* Leave a Reply */}
                        <Reply />
                    </div>
                    <div  style={{ marginTop: '70px', marginLeft: '92px' }} >
                        <Advertisement />
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '50px', marginBottom: '5px' }}>
                <Recommended
                    img1={furnished_versus} img2={kitchen_essentials} img3={dress_outfits}
                    title1='Furnished Versus Unfurnished Apartments: The Pros and Cons'
                    title2='Kitchen Essentials – What Your Brand New Apartment Really Needs' 
                    title3='How To Dress Up & Dress Down Your Outfits'
                    text1='Home Decor' text2='Home Decor' text3='Lifestyle' />
            </div>
        </div>
    )
}

export default Cover