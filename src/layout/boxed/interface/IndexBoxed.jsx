import React from 'react'
import { Link } from 'react-router-dom'

import HeaderBoxed from './HeaderBoxed'
import FooterBoxed from './FooterBoxed'

import Phototextbig from '../../../components/Phototextbig'
import Phototextsmall from '../../../components/Phototextsmall'
import Taggcol from '../../../components/Taggcol'

import favorite_lifestyle from '../../../page/img/favorite_lifestyle.png'
import coconut_oil from '../../../page/img/coconut_oil.png'
import interior_design from '../../../page/img/interior_design.png'
import roasted_carrot from '../../../page/img/roasted_carrot.png'

import summer_wardrobe from '../../../page/img/summer_wardrobe.png'
import sixDIYsummer from '../../../page/img/sixDIYsummer.png'
import paleo_diet from '../../../page/img/paleo_diet.png'
import san_francisco from '../../../page/img/san_francisco.png'
import kitchen_essentials from '../../../page/img/kitchen_essentials.png'
import best_meal from '../../../page/img/best_meal.png'

import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const IndexBoxed = () => {
    return (
        <div style={{ backgroundColor: '#c3c6cf' }}>
            <div style={{ width: '93.7%', marginLeft: '43px' }}>
                <HeaderBoxed />
                <main className='bg-white pb-14' style={{ width: '100%' }}>
                    <div className='ml-7' style={{ width: '95.3%' }}>
                        <div className='flex justify-between pt-14 ml-1'>
                            <div className='mr-1' style={{ width: '49.66%' }}>
                                <Phototextbig
                                    link='url(https://inertiawp.com/boxed/wp-content/uploads/sites/9/2022/08/pexels-nugroho-wahyu-3119180-1024x749.jpg)'
                                    text='LIFESTYLE'
                                    title='24 Summer Wardrobe Staples That Are Simple, Sustainable, and Editor-Approved'
                                />
                                <div className='flex justify-between mt-2'>
                                    <Phototextsmall
                                        link='url(https://inertiawp.com/boxed/wp-content/uploads/sites/9/2022/08/pexels-karolina-grabowska-4219654-1024x683.jpg)'
                                        text='LIFESTYLE'
                                        title='6 DIY Summer Crafts for Your Home, Outdoor, and Family Fun'
                                    />
                                    <Phototextsmall
                                        link={`url(${favorite_lifestyle})`}
                                        text='PODCAST'
                                        title='12 Top Favorite Lifestyle Podcasts for Modern Conscious Women'
                                    />
                                </div>
                            </div>
                            <div style={{ width: '49.66%' }}>
                                <div className='flex justify-between mb-1.5'>
                                    <Phototextsmall
                                        link={`url(${coconut_oil})`}
                                        text='LIFESTYLE'
                                        title='8 Homemade Coconut Oil Shampoo Recipes For Beautiful Hair'
                                    />
                                    <Phototextsmall
                                        link={`url(${interior_design})`}
                                        text='HOME DECOR'
                                        title='Interior Design – A Comprehensive Guide for Enthusiasts'
                                    />
                                </div>
                                <Phototextbig
                                    link={`url(${roasted_carrot})`}
                                    text='FOOD & RECIPES'
                                    title='This Roasted Carrot and Red Pepper Hummus Flatbread Is a Delicious Way To Clean Out Your Fridge'
                                />
                            </div>
                        </div>
                        <div>
                            <h1 className='mt-16 ml-1' style={{ fontSize: '36px' }}>The Latest</h1>
                            <div className='flex pb-16 ml-1'>
                                <div style={{ marginRight: '18px' }}>
                                    <Taggcol
                                        img={summer_wardrobe}
                                        title='24 Summer Wardrobe Staples That Are Simple, Sustainable, and Editor-Approved'
                                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                                        author='Lucas Sebastian'
                                        date='August 17, 2022'
                                    />
                                    <Taggcol
                                        img={coconut_oil}
                                        title='8 Homemade Coconut Oil Shampoo Recipes For Beautiful Hair'
                                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                                        author='Maggie Brandon'
                                        date='August 17, 2022'
                                    />
                                    <Taggcol
                                        img={interior_design}
                                        title='Interior Design – A Comprehensive Guide for Enthusiasts'
                                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                                        author="Simon Lambert"
                                        date='August 17, 2022'
                                    />
                                </div>
                                <div style={{ marginRight: '18px' }}>
                                    <Taggcol
                                        img={sixDIYsummer}
                                        title='6 DIY Summer Crafts for Your Home, Outdoor, and Family Fun'
                                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                                        author="Camille d'Amelio"
                                        date='August 17, 2022'
                                    />
                                    <Taggcol
                                        img={favorite_lifestyle}
                                        title='12 Top Favorite Lifestyle Podcasts for Modern Conscious Women'
                                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                                        author="Jennifer Ledford"
                                        date='August 17, 2022'
                                    />
                                    <Taggcol
                                        img={roasted_carrot}
                                        title='This Roasted Carrot and Red Pepper Hummus Flatbread Is a Delicious Way To Clean Out Your Fridge'
                                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                                        author="Camille d'Amelio"
                                        date='August 17, 2022'
                                    />
                                </div>
                                <div>
                                    <Taggcol
                                        img={paleo_diet}
                                        title='The Beginner’s Guide To The Paleo Diet'
                                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                                        author="Eric Gordon"
                                        date='August 17, 2022'
                                    />
                                    <Taggcol
                                        img={san_francisco}
                                        title='The Must-See Room In The San Francisco Decorator’s Showcase'
                                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                                        author="Oliver Coleman"
                                        date='August 17, 2022'
                                    />
                                    <Taggcol
                                        img={kitchen_essentials}
                                        title='Kitchen Essentials – What Your Brand New Apartment Really Needs'
                                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                                        author="Lucas Sebastian"
                                        date='August 8, 2022'
                                    />
                                    <Taggcol
                                        img={best_meal}
                                        title='The 11 Best Meal Planning Apps to Help You Lose Weight'
                                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                                        author="Simon Lambert"
                                        date='August 8, 2022'
                                    />
                                </div>
                            </div>
                            <Link to={'/coming-soon'} className='no-underline'>
                                <div className='mt-14 w-36 h-12 border-2 border-black bg-zinc-950 hover:bg-slate-50
                                         text-slate-50 hover:text-zinc-950 rounded-lg transition ease-in-out duration-300'
                                    style={{ marginLeft: '44%' }}>
                                    <div className='flex text-sm ml-6 mt-2.5 '>
                                        <p className='font-bold tracking-wider font-sans'
                                            style={{ fontSize: '14.4px' }}>
                                            Next Posts
                                        </p>
                                        <MdOutlineKeyboardArrowRight className='font-bold ml-1 -mt-0.5 w-6 h-6' />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                </main>
                <FooterBoxed />
            </div>
        </div>
    )
}

export default IndexBoxed