import React from 'react'

import eric_gordon from '../img/eric_gordon.png'
import paleo_diet from '../img/paleo_diet.png'
import most_romantic from '../img/most_romantic.png'
import eric_gordon_big from '../img/eric_gordon_big.png'
import kitchen_essentials from '../img/kitchen_essentials.png'
import sixDIYsummer from '../img/sixDIYsummer.png'
import gorgeous_skin from '../img/gorgeous_skin.png'
import podcast_playlist from '../img/podcast_playlist.png'

import { IoMdTime } from 'react-icons/io'
import { LiaBookmarkSolid } from 'react-icons/lia'
import { BsBarChartFill, BsTiktok } from 'react-icons/bs'
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

const Magazine = () => {
    return (
        <div style={{ backgroundColor: '#fffefc' }}>
            <div className='text-slate-100 text-start ' style={{ width: '100%', height: '477px', backgroundColor: '#312e81' }}>
                <div className='pt-9'>
                    <button className='ml-20 tracking-widest w-48 h-9 pb-0.5 text-white hover:text-slate-100 font-bold shadow-inherit'
                        style={{ fontSize: '13px', border: '1.5px solid white' }}>
                        HEALTH & WELLNESS
                    </button>
                    <div className='mt-7 text-start text-slate-50' style={{ marginLeft: '74px', height: '370px' }}>
                        <h1 className='tracking-wide font-bold mt-8'
                            style={{ fontSize: '40px', fontFamily: 'sans-serif', lineHeight: '55px', width: '820px' }}>
                            The Beginner’s Guide To The Paleo Diet
                        </h1>
                        <p className='tracking-wide font-semibold'
                            style={{ width: '560px', fontSize: '18.5px', marginTop: '23px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                        <div className='flex mt-8 pb-4 ' style={{ width: '875px', borderBottom: '2px solid lightgrey' }}>
                            <div className='rounded-full w-16 h-16 p-0.5 bg-white'>
                                <img className='rounded-full border-none ' src={eric_gordon} alt={eric_gordon} />
                            </div>
                            <div className='ml-3 mt-2.5'>
                                <p className='tracking-widest font-semibold' style={{ fontSize: '11.4px' }}>WRITTEN BY</p>
                                <p className='ont-medium tracking-wider -mt-2.5 font-bold' style={{ fontSize: '15.5px' }}>
                                Eric Gordon
                                </p>
                            </div>
                        </div>
                        <div className='flex text-sm mt-9 text-white -ml-1' style={{ width: '520px' }}>
                            <IoMdTime className='mr-1 mt-2.5 w-5 h-4' />
                            <p className='font-medium mt-2 ml-0.5 mr-2'> August 17, 2022 </p>
                            <p className='py-1.5 px-2 mt-0.5 ml-2.5 rounded tracking-wide font-semibold'
                                style={{ border: '1px solid lightgray', fontSize: '12px' }}>
                                Updated
                            </p>
                            <LiaBookmarkSolid className='ml-3.5 mr-1 mt-2 w-5 h-5 ' />
                            <p className=' mt-2 font-semibold' style={{ fontSize: '14.4px' }}>1 min Read</p>
                            <BsBarChartFill className='ml-4' style={{ marginTop: '11px' }} />
                            <p className='ml-2 tracking-wide font-semibold' style={{ marginTop: '8px' }}>66 Views</p>
                        </div>
                    </div>
                </div>

            </div>
            <img style={{height: '640px', width: '100%'}} src={paleo_diet} alt={paleo_diet}/>
            <div className='flex -mt-6' style={{ width: '90.2%', marginLeft: '132px' }}>
                <div className='mt-5' style={{ width: '720px', fontFamily: 'sans-serif' }}>
                    <Loremipsum />
                    <Readalso 
                        text1='The 11 Best Meal Planning Apps to Help You Lose Weight'
                        text2='According to Nutritionists, These Are the 7 Ingredients Your Food Should Have'
                        text3='10 Evidence-Based Benefits of Green Tea' />
                    <Tags text1='calories' text2='exercise' text3='meals' text4='weightloss' text5='workout' />

                    <Author img={eric_gordon_big} author='Eric Gordon'
                        text='Massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus.'
                        icon1={<FaHome />} icon2={<BsInstagram />} icon3={<FaPinterestP />} icon4={<BsTiktok />} />
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
                <Recommended img1={most_romantic} img2={gorgeous_skin} img3={podcast_playlist}
                    title1='The Most Romantic & Sustainable Destinations'
                    title2='Wake Up to Gorgeous Skin With the 10 Best Night Creams Available (According to the Experts)'
                    title3='Podcast Playlist: Transform Your New Year’s Resolutions into Actions'
                    text1='Videos' text2='Lifestyle' text3='Podcast' />
            </div>
        </div>
    )
}

export default Magazine