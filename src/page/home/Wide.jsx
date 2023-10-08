import React from 'react'

import { Link } from 'react-router-dom'

import { FaPinterestP } from 'react-icons/fa'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

import summer_wardrobe from '../img/summer_wardrobe.png'
import coconut_oil from '../img/coconut_oil.png'
import interior_design from '../img/interior_design.png'
import sixDIYsummer from '../img/sixDIYsummer.png'
import paleo_diet from '../img/paleo_diet.png'
import according_nutritionists from '../img/according_nutritionists.png'
import evidence_based from '../img/evidence_based.png'
import best_meal from '../img/best_meal.png'
import packing_cubes from '../img/packing_cubes.png'

import design_book from '../img/design_book.png'
import furnished_versus from '../img/furnished_versus.png'
import kitchen_essentials from '../img/kitchen_essentials.png'

import off_kit from '../img/off_kit.png'
import minty_mineral from '../img/minty_mineral.png'
import cloudberry_exfoliating from '../img/cloudberry_exfoliating.png'
import nourishing_repair from '../img/nourishing_repair.png'

const Wide = () => {
    return (
        <div className='mb-14'>
            <div style={{ width: '89.4%', backgroundColor: '#fffefc', marginLeft: '72.5px', marginTop: '60px' }}>
                <h2 className='tracking-wider font-bold text-stone-900 '
                    style={{ fontFamily: 'sans-serif', fontSize: '32.5px' }}>
                    Top Stories
                </h2>
                <div className='ml-0.5 mt-9 mr-0.5 mb-20 flex line-none' style={{ height: '569px' }}>
                    <Link to={'/modern'} className=' no-underline'>
                        <div className='rounded-md' style={{ width: '648px', border: '1px solid #D3D3D3' }}>
                            <img src={summer_wardrobe} alt={summer_wardrobe} className='rounded-t' style={{ height: '359px', width: '648px' }} />
                            <div className=' text-black ml-8' style={{ width: '580px', marginTop: '32px' }}>
                                <p className='font-bold text-indigo-900 hover:text-stone-700' style={{ letterSpacing: '2px', fontSize: '11.2px' }}>
                                    LIFESTYLE
                                </p>
                                <h3 style={{ fontSize: '26.5px', fontFamily: 'sans-serif', letterSpacing: '0.045rem' }}
                                    className='mt-1 leading-9 font-semibold text-stone-900'>
                                    24 Summer Wardrobe Staples That Are Simple, Sustainable, and Editor–Approved
                                </h3>
                                <p className='tracking-widest text-stone-600' style={{ fontSize: '11.2px', marginTop: '20.4px' }}>NOVEMBER 4, 2022</p>
                            </div>
                        </div>
                    </Link>
                    <div className='ml-8'>
                        <div className='flex' style={{ width: '520px', height: '168px', marginBottom: '32px' }}>
                            <img src={coconut_oil} alt={coconut_oil} style={{ width: '380px' }} className='rounded' />
                            <div className='mt-2 ml-6'>
                                <p className='font-bold text-indigo-900 hover:text-stone-700' style={{ letterSpacing: '2px', fontSize: '11.2px' }}>
                                    LIFESTYLE
                                </p>
                                <h5 className='-mt-2'>
                                    8 Homemade Coconut Oil Shampoo Recipes For Beautiful Hair
                                </h5>
                                <p className='tracking-widest text-stone-600' style={{ fontSize: '11.2px', marginTop: '20px' }}>
                                    AUGUST 17, 2022
                                </p>
                            </div>
                        </div>
                        <div className='flex' style={{ width: '520px', height: '168px', marginBottom: '32px' }}>
                            <img src={interior_design} alt={interior_design} style={{ width: '200px' }} className='rounded' />
                            <div className='mt-2 ml-6'>
                                <p className='font-bold text-indigo-900 hover:text-stone-700' style={{ letterSpacing: '2px', fontSize: '11.2px' }}>
                                    HOME DECOR
                                </p>
                                <h5 className='-mt-2'>
                                    Interior Design – A Comprehensive Guide for Enthusiasts
                                </h5>
                                <p className='tracking-widest text-stone-600' style={{ fontSize: '11.2px', marginTop: '20px' }}>
                                    AUGUST 17, 2022
                                </p>
                            </div>
                        </div>
                        <div className='flex mb-4' style={{ width: '515px', height: '168px' }}>
                            <img src={sixDIYsummer} alt={sixDIYsummer} style={{ width: '200px' }} className='rounded' />
                            <div className='mt-2 ml-6'>
                                <p className='font-bold text-indigo-900 hover:text-stone-700' style={{ letterSpacing: '2px', fontSize: '11.2px' }}>
                                    LIFESTYLE
                                </p>
                                <h5 className='-mt-2'>
                                    6 DIY Summer Crafts for Your Home, Outdoor, and Family Fun
                                </h5>
                                <p className='tracking-widest text-stone-600' style={{ fontSize: '11.2px', marginTop: '20px' }}>
                                    AUGUST 17, 2022
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-36' style={{ backgroundColor: '#f5f5f5' }}>
                <ul className='h-32 flex pt-4' style={{ marginLeft: '41px' }}>
                    <li className='flex items-center h-24 rounded-r-lg bg-white shadow-sm'
                        style={{ width: '287px', marginRight: '18px' }}>
                        <img src={paleo_diet} alt={paleo_diet} className='w-24 rounded-l-xl' />
                        <p className='tracking-wider mt-3.5 ml-3 font-bold'
                            style={{ fontSize: '11px', lineHeight: '18px', width: '170px' }}>
                            THE BEGINNER’s GUIDE TO THE PALEO DIET
                        </p>
                    </li>
                    <li className='flex items-center h-24 rounded-r-lg bg-white shadow-sm'
                        style={{ width: '287px', marginRight: '18px' }}>
                        <img src={according_nutritionists} alt={according_nutritionists} className='w-24 h-24 rounded-l-xl' />
                        <p className='tracking-wider mt-3.5 ml-3 font-bold'
                            style={{ fontSize: '11px', lineHeight: '18px', width: '170px' }}>
                            ACCORDING TO NUTRITIONISTS, THESE ARE...
                        </p>
                    </li>
                    <li className='flex items-center h-24 rounded-r-lg bg-white shadow-sm'
                        style={{ width: '287px', marginRight: '18px' }}>
                        <img src={evidence_based} alt={evidence_based} className='w-24 h-24 rounded-l-xl' />
                        <p className='tracking-wider mt-3.5 ml-3 font-bold'
                            style={{ fontSize: '11px', lineHeight: '18px', width: '170px' }}>
                            10 EVIDENCE-BASED BENEFITS OF GREEN TEA
                        </p>
                    </li>
                    <li className='flex items-center h-24 rounded-r-lg bg-white shadow-sm'
                        style={{ width: '287px' }}>
                        <img src={best_meal} alt={best_meal} className='w-24 h-24 rounded-l-xl' />
                        <p className='tracking-wide w-44 mt-3.5 ml-3 font-bold'
                            style={{ fontSize: '11px', lineHeight: '18px', width: '170px' }}>
                            THE 11 BEST MEAL PLANNING APPS TO HELP YOU LOSE...
                        </p>
                    </li>
                </ul>
            </div>
            <div className='flex items-center text-center' style={{ width: '89.4%', backgroundColor: '#fffefc', marginLeft: '75px', marginTop: '60px' }} >
                <img src={packing_cubes} alt={packing_cubes} style={{ width: '535px', height: '535px' }} />
                <div className='mt-2.5'>
                    <h2 className='text-stone-900 font-bold leading-snug tracking-wide mt-4'
                        style={{ width: '500px', fontSize: '34px', fontFamily: 'sans-serif', marginLeft: '85px' }}>
                        Why you should use packing cubes to improve your (traveling) life
                    </h2>
                    <p className='tracking-wide ml-16 mt-3.5 text-zinc-500' style={{ width: '537px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Rhoncus dolor purus non...</p>
                    <p className='ml-16 text-sm text-black font-semibold tracking-widest'
                        style={{ fontSize: '13.7px', marginTop: '30.5px' }}>
                        CONTINUE READING ⟶
                    </p>
                </div>
            </div>
            <div style={{ width: '89.4%', backgroundColor: '#fffefc', marginLeft: '74px', marginTop: '113.5px' }}>
                <div className='flex items-center justify-between'>
                    <h2 className='tracking-wider font-bold text-stone-900 '
                        style={{ fontFamily: 'sans-serif', fontSize: '29px' }}>
                        Home Decor
                    </h2>
                    <p className='mt-2 mr-1.5 text-indigo-900 hover:text-stone-700 text-sm font-semibold tracking-widest'>MORE HOME DECOR ⟶</p>
                </div>
                <div className='flex' style={{ marginTop: '25px' }}>
                    <div className='mr-6'>
                        <img className='h-48' style={{ width: '282px' }} src={interior_design} alt={interior_design} />
                        <h6 className='text-stone-700 text-lg tracking-wide mt-4'
                            style={{ width: '278px', lineHeight: '23.5px', fontSize: '16.5px', fontWeight: '700', fontFamily: 'sans-serif' }}>
                            Interior Design – A Comprehensive Guide for Enthusiasts
                        </h6>
                    </div>
                    <div className='mr-6'>
                        <img className='h-48' style={{ width: '282px' }} src={design_book} alt={design_book} />
                        <h6 className='text-stone-700 text-lg tracking-wide mt-4 '
                            style={{ width: '278px', lineHeight: '23.5px', fontSize: '16.5px', fontWeight: '700', fontFamily: 'sans-serif' }}>
                            5 Design Books You Can Get This Summer
                        </h6>
                    </div>
                    <div className='mr-6'>
                        <img className='h-48' style={{ width: '282px' }} src={furnished_versus} alt={furnished_versus} />
                        <h6 className='w-64 text-stone-700 text-lg tracking-wide mt-4'
                            style={{ width: '278px', lineHeight: '23.5px', fontSize: '16.5px', fontWeight: '700', fontFamily: 'sans-serif' }}>
                            Furnished Versus Unfurnished Apartments: The Pros and Cons
                        </h6>
                    </div>
                    <div>
                        <img className='h-48' style={{ width: '282px' }} src={kitchen_essentials} alt={kitchen_essentials} />
                        <h6 className='text-stone-700 text-lg tracking-wide mt-4'
                            style={{ width: '278px', lineHeight: '23.5px', fontSize: '16.5px', fontWeight: '700', fontFamily: 'sans-serif' }}>
                            Kitchen Essentials – What Your Brand New Apartment Really Needs
                        </h6>
                    </div>
                </div>
            </div>
            <div className='relative mt-28' >
                <img style={{ width: '100%', height: '100vh', backgroundImage: '#abb8c3' }} src={furnished_versus} alt={furnished_versus} />
                <div className='text-center absolute bottom-44 left-60' style={{ width: '50%', fontFamily: 'sans-serif' }}>
                    <h1 className='font-bold leading-snug -ml-1 text-slate-50' style={{ fontSize: '46px', width: '850px' }}>Furnished Versus Unfurnished Apartments: The Pros and Cons</h1>
                    <p className='ml-48 mt-3 tracking-wide text-slate-50' style={{ width: '420px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <button className='text-slate-50 hover:text-black w-60 h-14 border-2 mt-4 mr-1.5 ml-36 bg-none hover:bg-white text-sm font-semibold tracking-widest'>
                        CONTINUE READING ⟶
                    </button>

                </div>
            </div>
            <div style={{ width: '89.4%', backgroundColor: '#fffefc', marginLeft: '74px', marginTop: '76px', fontFamily: 'sans-serif' }}>
                <h2 className='font-semibold tracking-wide' style={{ marginLeft: '450px', fontSize: '33px' }}>
                    Products We Love
                </h2>
                <p className='tracking-wider text-zinc-500'
                    style={{ marginLeft: '427px', marginTop: '21px', fontSize: '15.4px' }}>
                    Featured products your will love from the shop.
                </p>
                <div className='mt-14 flex'>
                    <div className='shadow-sm mr-6' style={{ width: '287px', height: '440px' }}>
                        <img style={{ width: '283px', height: '280px' }} src={off_kit} alt={off_kit} />
                        <div className='ml-8 mt-8 tracking-wide bg-white'>
                            <p className='font-semibold text-stone-700' style={{ fontSize: '10.5px' }}>BEAUTY</p>
                            <p className='font-semibold -mt-2.5 text-stone-700 w-52'
                                style={{ fontSize: '17px', height: '52px' }}>
                                The Take It (All) Off Kit
                            </p>
                            <p className='-mt-2 tracking-tight text-stone-600' style={{ fontSize: '11.4px' }}>$11.05</p>
                        </div>
                    </div>
                    <div className='shadow-sm mr-6' style={{ width: '287px', height: '440px' }}>
                        <img style={{ width: '283px', height: '280px' }} src={minty_mineral} alt={minty_mineral} />
                        <div className='ml-8 mt-8 tracking-wide bg-white'>
                            <p className='font-semibold text-stone-700' style={{ fontSize: '10.5px' }}>LIFESTYLE PRODUCTS</p>
                            <p className='font-semibold -mt-2.5 text-stone-700 w-52'
                                style={{ fontSize: '17px', height: '52px' }}>
                                Minty Mineral Hydration Mist
                            </p>
                            <p className='-mt-2 tracking-tight text-stone-600' style={{ fontSize: '11.4px' }}>$18.00 – $45.00</p>
                        </div>
                    </div>
                    <div className='shadow-sm mr-6' style={{ width: '287px', height: '440px' }}>
                        <img style={{ width: '283px', height: '280px' }} src={cloudberry_exfoliating} alt={cloudberry_exfoliating} />
                        <div className='ml-8 mt-8 tracking-wide bg-white relative'>
                            <p className='font-semibold text-stone-700' style={{ fontSize: '10.5px' }}>SKINCARE</p>
                            <p className='font-semibold -mt-2.5 text-stone-700 w-52'
                                style={{ fontSize: '17px', height: '52px' }}>
                                Cloudberry Exfoliating Jelly Cleanser
                            </p>
                            <p className='-mt-2 tracking-tight text-stone-600' style={{ fontSize: '11.4px' }}>
                                $20.00 <span className='text-red-500 ml-1'>$18.00</span>
                            </p>
                            <p className='absolute' style={{ border: '0.1px solid black', width: '35px', top: '88.5px', left: '-1px' }}></p>
                        </div>
                    </div>
                    <div className='shadow-sm mr-6' style={{ width: '287px', height: '440px' }}>
                        <img style={{ width: '283px', height: '280px' }} src={nourishing_repair} alt={nourishing_repair} />
                        <div className='ml-8 mt-8 tracking-wide bg-white'>
                            <p className='font-semibold text-stone-700' style={{ fontSize: '10.5px' }}>CLEANSERS</p>
                            <p className='font-semibold -mt-2.5 text-stone-700 w-52'
                                style={{ fontSize: '17px', height: '52px' }}>
                                Nourishing Repair Body Butter
                            </p>
                            <p className='-mt-2 tracking-tight text-stone-600' style={{ fontSize: '11.4px' }}>$18.00</p>
                        </div>
                    </div>
                </div>
                <Link to={'/shop-demo'}>
                    <button className='h-14 border-2 mt-14 font-bold text-slate-200 tracking-wide -pt-0.5 pb-0.5
                                     bg-stone-950 hover:bg-stone-800 delay-75 ease-in-out duration-300'
                        style={{ fontSize: '14px', marginLeft: '499px', width: '204px', border: '1px solid #fffefc' }}>
                        SHOP ALL
                    </button>
                </Link>
            </div>
            <div className='flex items-center' style={{
                width: '88.9%', height: '345px', backgroundColor: '#f5f5f5',
                marginLeft: '75px', marginTop: '115px', fontFamily: 'sans-serif'
            }}>
                <div style={{ marginLeft: '88px', marginTop: '-5px' }}>
                    <h2 className='font-semibold tracking-wider' style={{ fontSize: '33.5px' }}>Get the latest!</h2>
                    <p className='tracking-wider text-neutral-500 leading-6' style={{ width: '480px', fontSize: '15px', marginTop: '11px' }}>Latest news and articles curated in your mailbox every week. No Spam. Guaranteed.</p>
                    <div className='flex items-center mt-9'>
                        <FaPinterestP className='w-12 text-zinc-700' style={{ height: '21.7px' }} />
                        <AiOutlineInstagram className='w-11 h-7 text-zinc-700 ml-0.5' />
                        <AiOutlineTwitter className='w-11 h-7 text-zinc-700 ml-1' />
                    </div>
                </div>
                <div className='-ml-1'>
                    <form action="https://inertiawp.com/demo" method="post" target="_blank"
                        className='flex items-center -mt-1 ml-16 pl-0.5 shadow-sm rounded bg-white'
                        style={{ border: '1px solid lightgrey', width: '485px', height: '58px' }}>
                        <input className='w-52 ml-3.5 pt-0.5 box-border bg-white focus:outline-none tracking-wide'
                            style={{ fontSize: '15.5px' }} placeholder='Enter your email address' type='email' />
                        <button className='ml-40 mr-1.5 text-center text-slate-50 rounded-md text-sm font-semibold tracking-widest pb-0.5'
                            style={{ backgroundColor: '#312e81', width: '112px', height: '42px' }}>
                            SUBCRIBE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Wide