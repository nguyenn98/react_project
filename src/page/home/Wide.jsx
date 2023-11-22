import { useEffect, useState } from 'react'

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

import green_tick from '../img/green_tick.png'

import '../styles/style.css'

const Wide = () => {
    const [inp, setInp] = useState('')
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState()
    function handleClick() {
        if (inp.length === 0){
            setErr('Please input your email!')
        }
        else if (!inp.includes('@gmail.com')) {
            setErr('Email is not in correct format!')
        }
        else if (!(/[a-zA-Z]/.test(inp))) {
            setErr('Email at least one charater (A-Z/a-z)!')
        }
        else if (!(/[0-9]/.test(inp))) {
            setErr('Email requires at least one number (0-9)!')
        }
        else if ((/[0-9]/.test(inp[0]))) {
            setErr('The first position must not be a number!')
        }
        else {
            setSuccess('Welcome, you have successfully registered.')
        }
        setInp('')
    }
    function offError() {
        setErr('')
        setSuccess('')
    }
    return (
        <div className='pb-16 pt-[60px]'>
            <div className='dark:bg-neutral-900 bg-[#fffefc]'
                style={{ width: '89.4%', marginLeft: '72.5px' }}>
                <h2 className='tracking-wider font-bold dark:text-slate-50 text-stone-900 '
                    style={{ fontFamily: 'sans-serif', fontSize: '32.5px' }}>
                    Top Stories
                </h2>
                <div className='ml-0.5 mt-9 mr-0.5 mb-20 flex' style={{ height: '577px' }}>
                    <Link to={'/modern'} className=' no-underline'>
                        <div className='rounded-md border-solid border-[1px] dark:border-zinc-600 border-stone-300 hover:opacity-95 transition-opacity duration-200' 
                        style={{ width: '648px', height: '578px' }}>
                            <img src={summer_wardrobe} alt={summer_wardrobe} className='rounded-t object-cover'
                                style={{ height: '359px', width: '648px' }} />
                            <div className='ml-8' style={{ width: '580px', marginTop: '32px' }}>
                                <p className='font-bold dark:text-[#6c69c9] text-indigo-900 hover:text-stone-700' style={{ letterSpacing: '2px', fontSize: '11.2px' }}>
                                    LIFESTYLE
                                </p>
                                <h3 style={{ fontSize: '26.5px', fontFamily: 'sans-serif', letterSpacing: '0.045rem' }}
                                    className='mt-1 leading-9 font-semibold dark:text-slate-100 text-stone-900'>
                                    24 Summer Wardrobe Staples That Are Simple, Sustainable, and Editor–Approved
                                </h3>
                                <p className='tracking-widest dark:text-slate-200 text-stone-600' style={{ fontSize: '11.2px', marginTop: '20.4px' }}>NOVEMBER 4, 2022</p>
                            </div>
                        </div>
                    </Link>
                    <div className='ml-8'>
                        <div className='flex cursor-pointer hover:opacity-95 transition-opacity duration-200' style={{ width: '520px', height: '168px', marginBottom: '32px' }}>
                            <img src={coconut_oil} alt={coconut_oil} className='rounded object-cover'
                                style={{ width: '380px' }}
                            />
                            <div className='mt-2 ml-6'>
                                <p className='font-bold dark:text-[#6c69c9] text-indigo-900 hover:text-stone-700' style={{ letterSpacing: '2px', fontSize: '11.2px' }}>
                                    LIFESTYLE
                                </p>
                                <h5 className='-mt-2 dark:text-slate-100'>
                                    8 Homemade Coconut Oil Shampoo Recipes For Beautiful Hair
                                </h5>
                                <p className='tracking-widest dark:text-slate-200 text-stone-600' style={{ fontSize: '11.2px', marginTop: '20px' }}>
                                    AUGUST 17, 2022
                                </p>
                            </div>
                        </div>
                        <div className='flex cursor-pointer hover:opacity-95 transition-opacity duration-200' style={{ width: '520px', height: '168px', marginBottom: '32px' }}>
                            <img src={interior_design} alt={interior_design} className='rounded object-cover'
                                style={{ width: '200px' }}
                            />
                            <div className='mt-2 ml-6'>
                                <p className='font-bold dark:text-[#6c69c9] text-indigo-900 hover:text-stone-700' style={{ letterSpacing: '2px', fontSize: '11.2px' }}>
                                    HOME DECOR
                                </p>
                                <h5 className='-mt-2 dark:text-slate-100'>
                                    Interior Design – A Comprehensive Guide for Enthusiasts
                                </h5>
                                <p className='tracking-widest dark:text-slate-200 text-stone-600'
                                    style={{ fontSize: '11.2px', marginTop: '20px' }}>
                                    AUGUST 17, 2022
                                </p>
                            </div>
                        </div>
                        <div className='flex mb-4 cursor-pointer hover:opacity-95 transition-opacity duration-200' style={{ width: '515px', height: '168px' }}>
                            <img src={sixDIYsummer} alt={sixDIYsummer} className='rounded object-cover'
                                style={{ width: '200px' }}
                            />
                            <div className='mt-2 ml-6'>
                                <p className='font-bold dark:text-[#6c69c9] text-indigo-900 hover:text-stone-700'
                                    style={{ letterSpacing: '2px', fontSize: '11.2px' }}>
                                    LIFESTYLE
                                </p>
                                <h5 className='-mt-2 dark:text-slate-100'>
                                    6 DIY Summer Crafts for Your Home, Outdoor, and Family Fun
                                </h5>
                                <p className='tracking-widest dark:text-slate-200 text-stone-600'
                                    style={{ fontSize: '11.2px', marginTop: '20px' }}>
                                    AUGUST 17, 2022
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-36 dark:bg-[#1a1a1a] bg-[#f5f5f5] shadow-sm'>
                <ul className='h-32 flex pt-4' style={{ marginLeft: '41px' }}>
                    <li className='flex items-center h-24 rounded-lg dark:bg-neutral-950 bg-[#fefefe] shadow-sm cursor-pointer'
                        style={{ width: '287px', marginRight: '18px' }}>
                        <img src={paleo_diet} alt={paleo_diet} className='w-24 rounded-l-lg object-cover' />
                        <p className='tracking-wider mt-3.5 ml-3 font-bold dark:text-slate-200 hover:underline'
                            style={{ fontSize: '11px', lineHeight: '18px', width: '170px' }}>
                            THE BEGINNER’s GUIDE TO THE PALEO DIET
                        </p>
                    </li>
                    <li className='flex items-center h-24 rounded-lg dark:bg-neutral-950 bg-[#fefefe] shadow-sm cursor-pointer'
                        style={{ width: '287px', marginRight: '18px' }}>
                        <img src={according_nutritionists} alt={according_nutritionists}
                            className='w-24 h-24 rounded-l-lg object-cover' />
                        <p className='tracking-wider mt-3.5 ml-3 font-bold dark:text-slate-200 hover:underline'
                            style={{ fontSize: '11px', lineHeight: '18px', width: '170px' }}>
                            ACCORDING TO NUTRITIONISTS, THESE ARE...
                        </p>
                    </li>
                    <li className='flex items-center h-24 rounded-lg dark:bg-neutral-950 bg-[#fefefe] shadow-sm cursor-pointer'
                        style={{ width: '287px', marginRight: '18px' }}>
                        <img src={evidence_based} alt={evidence_based}
                            className='w-24 h-24 rounded-l-lg object-cover' />
                        <p className='tracking-wider mt-3.5 ml-3 font-bold dark:text-slate-200 hover:underline'
                            style={{ fontSize: '11px', lineHeight: '18px', width: '170px' }}>
                            10 EVIDENCE-BASED BENEFITS OF GREEN TEA
                        </p>
                    </li>
                    <li className='flex items-center h-24 rounded-lg dark:bg-neutral-950 bg-[#fefefe] shadow-sm cursor-pointer'
                        style={{ width: '287px' }}>
                        <img src={best_meal} alt={best_meal} className='w-24 h-24 rounded-l-lg object-cover' />
                        <p className='tracking-wide w-44 mt-3.5 ml-3 font-bold dark:text-slate-200 hover:underline'
                            style={{ fontSize: '11px', lineHeight: '18px', width: '170px' }}>
                            THE 11 BEST MEAL PLANNING APPS TO HELP YOU LOSE...
                        </p>
                    </li>
                </ul>
            </div>
            <div className='flex items-center text-center dark:bg-neutral-900 bg-[#fffefc]' style={{ width: '89.4%', marginLeft: '75px', marginTop: '60px' }} >
                <img src={packing_cubes} alt={packing_cubes} className='object-cover cursor-pointer hover:opacity-90 transition-opacity duration-300'
                    style={{ width: '535px', height: '535px' }} />
                <div className='mt-2.5'>
                    <h2 className='dark:text-slate-100 text-stone-900 font-bold leading-snug tracking-wide mt-4'
                        style={{ width: '500px', fontSize: '34px', fontFamily: 'sans-serif', marginLeft: '85px' }}>
                        Why you should use packing cubes to improve your (traveling) life
                    </h2>
                    <p className='tracking-wide ml-16 mt-3.5 dark:text-zinc-400 text-zinc-500' style={{ width: '537px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Rhoncus dolor purus non...
                    </p>
                    <p className='ml-16 text-sm dark:text-slate-100 text-zinc-950 cursor-pointer 
                        hover:opacity-80 transition-opacity duration-300 font-semibold tracking-widest'
                        style={{ fontSize: '13.7px', marginTop: '30.5px' }}>
                        CONTINUE READING ⟶
                    </p>
                </div>
            </div>
            <div className='dark:bg-neutral-900 bg-[#fffefc]' style={{ width: '89.4%', marginLeft: '74px', marginTop: '113.5px' }}>
                <div className='flex items-center justify-between'>
                    <h2 className='tracking-wider font-bold dark:text-slate-100 text-stone-900 '
                        style={{ fontFamily: 'sans-serif', fontSize: '29px' }}>
                        Home Decor
                    </h2>
                    <p className='mt-2 mr-1.5 dark:text-[#6c69c9] text-indigo-900 dark:hover:text-stone-500 hover:text-stone-700 
                        text-sm font-semibold tracking-widest cursor-pointer transition ease-in-out duration-300'>
                        MORE HOME DECOR ⟶
                    </p>
                </div>
                <div className='flex' style={{ marginTop: '25px' }}>
                    <div className='mr-6 dark:text-slate-200 text-stone-700 dark:hover:text-[#6c69c9]
                        hover:text-indigo-900 hover:opacity-90 cursor-pointer transition-colors duration-300 ease-in-out'>
                        <img className='h-48 object-cover' style={{ width: '282px' }} src={interior_design} alt={interior_design} />
                        <h6 className='text-lg tracking-wide mt-4'
                            style={{ width: '278px', lineHeight: '23.5px', fontSize: '16.5px', fontWeight: '700', fontFamily: 'sans-serif' }}>
                            Interior Design – A Comprehensive Guide for Enthusiasts
                        </h6>
                    </div>
                    <div className='mr-6 dark:text-slate-200 text-stone-700 dark:hover:text-[#6c69c9]
                        hover:text-indigo-900 hover:opacity-90 cursor-pointer transition-colors duration-300 ease-in-out'>
                        <img className='h-48 object-cover' style={{ width: '282px' }} src={design_book} alt={design_book} />
                        <h6 className='text-lg tracking-wide mt-4 '
                            style={{ width: '278px', lineHeight: '23.5px', fontSize: '16.5px', fontWeight: '700', fontFamily: 'sans-serif' }}>
                            5 Design Books You Can Get This Summer
                        </h6>
                    </div>
                    <div className='mr-6 dark:text-slate-200 text-stone-700 dark:hover:text-[#6c69c9]
                        hover:text-indigo-900 hover:opacity-90 cursor-pointer transition-colors duration-300 ease-in-out'>
                        <img className='h-48 object-cover' style={{ width: '282px' }} src={furnished_versus} alt={furnished_versus} />
                        <h6 className='w-64 text-lg tracking-wide mt-4'
                            style={{ width: '278px', lineHeight: '23.5px', fontSize: '16.5px', fontWeight: '700', fontFamily: 'sans-serif' }}>
                            Furnished Versus Unfurnished Apartments: The Pros and Cons
                        </h6>
                    </div>
                    <div className='dark:text-slate-200 text-stone-700 dark:hover:text-[#6c69c9]
                        hover:text-indigo-900 hover:opacity-90 cursor-pointer transition-all duration-300 ease-in-out'>
                        <img className='h-48 object-cover' style={{ width: '282px' }} src={kitchen_essentials} alt={kitchen_essentials} />
                        <h6 className='text-lg tracking-wide mt-4'
                            style={{ width: '278px', lineHeight: '23.5px', fontSize: '16.5px', fontWeight: '700', fontFamily: 'sans-serif' }}>
                            Kitchen Essentials – What Your Brand New Apartment Really Needs
                        </h6>
                    </div>
                </div>
            </div>
            <div className='image-wide mt-28' style={{
                width: '100%', height: '100vh',
                backgroundImage: `url${furnished_versus}`
            }}>
                <div className='text-center' style={{ width: '50%', fontFamily: 'sans-serif' }}>
                    <h1 className='font-bold leading-snug text-slate-50 -ml-24 mt-3'
                        style={{ fontSize: '46.4px', width: '850px' }}>
                        Furnished Versus Unfurnished Apartments: The Pros and Cons
                    </h1>
                    <p className='mt-3 tracking-wide text-white ml-24'
                        style={{ width: '470px', fontSize: '17.5px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </p>
                    <button className='text-slate-50 hover:text-black w-60 h-14 border-2 mt-4 mr-1.5 bg-none
                        hover:bg-white text-sm font-semibold tracking-widest transition-colors duration-300 ease-in-out'>
                        CONTINUE READING ⟶
                    </button>
                </div>
            </div>
            <div className='dark:bg-neutral-900 bg-[#fffefc]' style={{ width: '89.4%', marginLeft: '74px', marginTop: '76px', fontFamily: 'sans-serif' }}>
                <h2 className='font-semibold tracking-wide dark:text-slate-100' style={{ marginLeft: '450px', fontSize: '33px' }}>
                    Products We Love
                </h2>
                <p className='tracking-wider dark:text-stone-400 text-zinc-500'
                    style={{ marginLeft: '427px', marginTop: '21px', fontSize: '15.4px' }}>
                    Featured products your will love from the shop.
                </p>
                <div className='mt-14 flex'>
                    <div className='shadow-sm mr-6 dark:bg-neutral-950 cursor-pointer hover:opacity-90 transition-opacity duration-300' style={{ width: '287px', height: '440px' }}>
                        <img className='object-cover hover:opacity-90 transition-opacity duration-300' style={{ width: '283px', height: '280px', objectFit: 'cover' }} src={off_kit} alt={off_kit} />
                        <div className='ml-8 mt-8  text-stone-700 tracking-wide'>
                            <p className='font-semibold dark:text-stone-300' style={{ fontSize: '10.5px' }}>BEAUTY</p>
                            <p className='font-semibold -mt-2.5 w-52 dark:text-stone-200'
                                style={{ fontSize: '17px', height: '52px' }}>
                                The Take It (All) Off Kit
                            </p>
                            <p className='-mt-1.5 tracking-tight dark:text-stone-300 text-stone-600' style={{ fontSize: '11.5px' }}>$11.05</p>
                        </div>
                    </div>
                    <div className='shadow-sm mr-6 dark:bg-neutral-950 cursor-pointer hover:opacity-90 transition-opacity duration-300' style={{ width: '287px', height: '440px' }}>
                        <img className='object-cover' style={{ width: '283px', height: '280px', objectFit: 'cover' }} src={minty_mineral} alt={minty_mineral} />
                        <div className='ml-8 mt-8 text-stone-700 tracking-wide'>
                            <p className='font-semibold dark:text-stone-300' style={{ fontSize: '10.5px' }}>LIFESTYLE PRODUCTS</p>
                            <p className='font-semibold -mt-2.5 w-52 dark:text-stone-200'
                                style={{ fontSize: '17px', height: '52px' }}>
                                Minty Mineral Hydration Mist
                            </p>
                            <p className='-mt-1.5 tracking-tight dark:text-stone-300 text-stone-600' style={{ fontSize: '11.5px' }}>$18.00 – $45.00</p>
                        </div>
                    </div>
                    <div className='shadow-sm mr-6 dark:bg-neutral-950 cursor-pointer hover:opacity-90 transition-opacity duration-300' style={{ width: '287px', height: '440px' }}>
                        <img className='object-cover' style={{ width: '283px', height: '280px', objectFit: 'cover' }} src={cloudberry_exfoliating} alt={cloudberry_exfoliating} />
                        <div className='ml-8 mt-8 text-stone-700 tracking-wide relative'>
                            <p className='font-semibold dark:text-stone-300' style={{ fontSize: '10.5px' }}>SKINCARE</p>
                            <p className='font-semibold -mt-2.5 w-52 dark:text-stone-200'
                                style={{ fontSize: '17px', height: '52px' }}>
                                Cloudberry Exfoliating Jelly Cleanser
                            </p>
                            <p className='-mt-1.5 tracking-tight dark:text-stone-300 text-stone-600' style={{ fontSize: '11.5px' }}>
                                $20.00 <span className='text-red-500 ml-1'>$18.00</span>
                            </p>
                            <p className='absolute border-solid border-[0.1px] dark:border-[#fefefe] border-[#010101]' style={{ width: '35px', top: '88.5px', left: '-1px' }}></p>
                        </div>
                    </div>
                    <div className='shadow-sm mr-6 dark:bg-neutral-950 cursor-pointer hover:opacity-90 transition-opacity duration-300' style={{ width: '287px', height: '440px' }}>
                        <img className='object-cover' style={{ width: '283px', height: '280px' }} src={nourishing_repair} alt={nourishing_repair} />
                        <div className='ml-8 mt-8 text-stone-700 tracking-wide'>
                            <p className='font-semibold dark:text-stone-300' style={{ fontSize: '10.5px' }}>CLEANSERS</p>
                            <p className='font-semibold -mt-2.5 w-52 dark:text-stone-200'
                                style={{ fontSize: '17px', height: '52px' }}>
                                Nourishing Repair Body Butter
                            </p>
                            <p className='-mt-1.5 tracking-tight dark:text-stone-300 text-stone-600' style={{ fontSize: '11.5px' }}>$18.00</p>
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
            <div className='flex items-center dark:bg-neutral-800 bg-[#f5f5f5]'
                style={{
                    width: '88.9%', height: '345px', marginLeft: '75px', marginTop: '115px', fontFamily: 'sans-serif'
                }}>
                <div style={{ marginLeft: '88px', marginTop: '-5px' }}>
                    <h2 className='font-semibold tracking-wider dark:text-slate-100' style={{ fontSize: '33.5px' }}>Get the latest!</h2>
                    <p className='tracking-wider dark:text-slate-200 text-neutral-500 leading-6' style={{ width: '480px', fontSize: '15px', marginTop: '11px' }}>
                        Latest news and articles curated in your mailbox every week. No Spam. Guaranteed.
                    </p>
                    <div className='flex items-center mt-9'>
                        <Link to={'https://www.pinterest.com/'} className='hover:opacity-70 transition-opacity duration-300'>
                            <FaPinterestP className='w-12 dark:text-slate-100 text-zinc-700' style={{ height: '21.7px' }} />
                        </Link>
                        <Link to={'https://www.instagram.com/'} className='hover:opacity-70 transition-opacity duration-300'>
                            <AiOutlineInstagram className='w-11 h-7 dark:text-slate-100 text-zinc-700 ml-0.5' />
                        </Link>
                        <Link to={'https://twitter.com/'} className='hover:opacity-70 transition-opacity duration-300'>
                            <AiOutlineTwitter className='w-11 h-7 dark:text-slate-100 text-zinc-700 ml-1' />
                        </Link>
                    </div>
                </div>
                {!success ?
                    <div className='-ml-1 mt-4'>
                        <form
                            className='flex items-center ml-16 pl-0.5 shadow-sm rounded dark:bg-[rgb(24,23,23)] bg-[rgb(254,254,254)]'
                            style={{ border: '1px solid lightgrey', width: '485px', height: '58px' }}
                            onSubmit={(event) => { event.preventDefault() }}
                        >
                            <input className='w-52 ml-3.5 pt-0.5 box-border dark:text-[rgb(254,254,254)] 
                            dark:bg-[rgb(24,23,23)] bg-[rgb(254,254,254)] focus:outline-none tracking-wide'
                                style={{ fontSize: '15.5px' }} placeholder='Enter your email address' type='email'
                                value={inp}
                                onChange={(e) => setInp(e.target.value)}
                                onClick={offError} />
                            <button className='ml-40 mr-1.5 text-center text-slate-50 rounded-md text-sm 
                                dark:bg-[#535199] dark:hover:bg-[rgb(254,254,254)] dark:hover:text-slate-950 
                                bg-[#312e81] hover:bg-slate-950 font-semibold tracking-widest pb-0.5
                                transition duration-[400ms]'
                                style={{ width: '112px', height: '42px' }}
                                onClick={handleClick}
                            >
                                SUBCRIBE
                            </button>
                        </form>
                        <p className='dark:text-red-600 text-red-700 mt-2.5 ml-[67px] h-4'>{err}</p>
                    </div> :
                    <div className='flex items-center ml-[64px] -mt-[70px] opacity-95 dark:shadow-sm'>
                        <div className='border-[5px] border-green-900 bg-green-900 h-[55px] w-[55px] 
                            rounded-full dark:opacity-80 mt-2.5'
                            style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                            <img className='-ml-[0.5px] rounded-full' src={green_tick} alt={green_tick} />
                        </div>
                        <h5 className='dark:text-success text-success font-semibold mt-2.5 ml-[10px] h-4'>
                            {success}
                        </h5>
                    </div>
                }
            </div>
        </div>
    )
}

export default Wide