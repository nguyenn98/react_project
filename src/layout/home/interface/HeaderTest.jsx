import React, { useState } from 'react'

import Searchscreen from '../../../components/Searchscreen'

import { Link, useNavigate } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import { IoSearchOutline } from 'react-icons/io5'
import { FaPinterestP } from 'react-icons/fa'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import { ImExit } from 'react-icons/im'

import inertia from '../images/inertia.png'
import inertia_white from '../images/inertia_white.png'
import homelander from '../images/homelander.png'

import { Dropdown, Space } from 'antd';

import '../interface/styles.css'

const HeaderTest = ({ avatar, setAvatar, inertia_img }) => {
    const features = [
        {
            key: '1',
            label: 'Layouts',
            children: [
                {
                    key: '1-1',
                    label: <Link className='no-underline' to={'/wide'}>
                        Wide (Default)
                    </Link>
                },
                {
                    key: '1-2',
                    label: <Link className='no-underline' to={'/boxed'}>
                        Boxed
                    </Link>,
                },
            ],
        },
        {
            key: '2',
            label: 'Post Layouts',
            children: [
                {
                    key: '2-1',
                    label: <Link className='no-underline' to={'/modern'}>
                        Modern
                    </Link>

                },
                {
                    key: '2-2',
                    label: <Link className='no-underline' to={'/feature'}>
                        Feature
                    </Link>
                },
                {
                    key: '2-3',
                    label: <Link className='no-underline' to={'/cover'}>
                        Cover
                    </Link>
                },
                {
                    key: '2-4',
                    label: <Link className='no-underline' to={'/blog'}>
                        Blog
                    </Link>
                },
                {
                    key: '2-5',
                    label: <Link className='no-underline' to={'/magazine'}>
                        Magazine
                    </Link>
                },
                {
                    key: '2-6',
                    label: <Link className='no-underline' to={'/editorial'}>
                        Editorial
                    </Link>
                },
                {
                    key: '2-7',
                    label: <Link className='no-underline' to={'/post-aligned'}>
                        Aligned
                    </Link>
                },
            ],
        },
        {
            key: '3',
            label: 'Archive Page',
            children: [
                {
                    key: '3-1',
                    label: <Link className='no-underline' to={'/accent-color'}>
                        Accent – Color
                    </Link>
                },
                {
                    key: '3-2',
                    label: <Link className='no-underline' to={'/archive-aligned'}>
                        Archive – Aligned
                    </Link>
                },
            ],
        },
        {
            key: '4',
            label: <Link className='no-underline' to={'/author'}>
                Author
            </Link>
        },
    ]

    const pages = [
        {
            key: '1',
            label: <Link className='no-underline' to={'/about-page1'}>
                About Page – 1
            </Link>
        },
        {
            key: '2',
            label: <Link className='no-underline' to={'/about-page2'}>
                About Page – 2
            </Link>
        },
        /* {
            key: '3',
            label: <Link className='no-underline' to={'/fullwidth'}>
                Fullwidth Page
            </Link>
        },
        {
            key: '4',
            label: <Link className='no-underline' to={'/services'}>
                Services Page
            </Link>
        },
        {
            key: '5',
            label: <Link className='no-underline' to={'/contact'}>
                Contact Page
            </Link>
        }, */
        {
            key: '3',
            label: <Link className='no-underline' to={'/error'}>
                404 Error Page
            </Link>
        },
        {
            key: '4',
            label: <Link className='no-underline' to={'/coming-soon'}>
                Coming Soon
            </Link>
        },
        {
            key: '5',
            label: <Link className='no-underline' to={'/maintenance'}>
                Maintenance
            </Link>
        },
        {
            key: '6',
            label: <Link className='no-underline' to={'/contact'}>
                Contact Page
            </Link>
        },
    ]

    const shop = [
        {
            key: '1',
            label: <Link className='no-underline' to={'/shop-demo'}>
                Shop Demo
            </Link>
        },
        {
            key: '2',
            label: <Link className='no-underline' to={'/shop-cart'}>
                Cart
            </Link>
        },
        {
            key: '3',
            label: <Link className='no-underline' to={'/my-account'}>
                My Account
            </Link>
        },
    ]

    // screen search 
    const [isShow, setIsShow] = useState(false);

    function handleSearch(isShowParam) {
        setIsShow(isShowParam);
    }
    // localstorage


    // Sign in and sign out
    const localHome = JSON.parse(localStorage.getItem("homelander"));
    console.log(localHome);
    const [text, setText] = useState(false);
    const navigate = useNavigate()
    function imgClick() {
        setAvatar(true)
    }
    function logOut() {
        localStorage.removeItem("homelander");
        navigate('/my-account')
    }
    return (
        <div className='dark:text-stone-50 dark:bg-[#141212] shadow-lg drop-shadow-lg shadow-neutral-700 '>
            <div className='border-gray-900 font-semibold text-center tracking-tight text-stone-100 font-sans -ml-1 bg-[#312e81] dark:bg-[#535199]'
                style={{ height: '38px', fontSize: '14.4px', paddingTop: '7px' }}>
                <span className='mr-2.5'>15% OFF - SALE FOR LIMITED TIME.</span>
                <Link to={'/shop-demo'}>
                    <span className='underline md:decoration-1 font-bold tracking-tighter text-stone-100  
                            hover:opacity-75 transition-opacity duration-800'>
                        BUY NOW!
                    </span>
                </Link>
            </div>
            <div className='font-medium text-center tracking-normal font-sans flex items-center'
                style={{ height: '78.4px', borderBottom: '1px solid #cccccc' }}>
                <div className='flex items-center justify-start w-96 ml-8'
                    style={{ fontSize: '14px', marginTop: '12px' }}>
                    <p>
                        <Link to={'/'} className='tracking-tight no-underline text-stone-600 hover:text-indigo-900
                            dark:text-slate-300 dark:hover:text-[#535199]'>
                            HOME
                        </Link>
                    </p>
                    <p className='flex items-end ml-7 mr-1'>
                        <Dropdown
                            menu={{
                                items: features
                            }}
                        >
                            <Link to={'/wide'} onClick={(e) => e.preventDefault()}>
                                <Space className='text-stone-600 hover:text-indigo-900 
                                    dark:text-slate-300 dark:hover:text-[#535199]'>
                                    FEATURES
                                    <FiChevronDown className='font-extrabold text-lg mt-0.5' />
                                </Space>
                            </Link>
                        </Dropdown>
                    </p>
                    <p className='flex items-end ml-5'>
                        <Dropdown
                            menu={{
                                items: pages
                            }}
                        >
                            <Link to={'/about-page1'} onClick={(e) => e.preventDefault()}>
                                <Space className='text-stone-600 hover:text-indigo-900 
                                    dark:text-slate-300 dark:hover:text-[#535199]'>
                                    PAGES
                                    <FiChevronDown className='font-extrabold text-lg mt-0.5' />
                                </Space>
                            </Link>
                        </Dropdown>
                    </p>
                    <p className='flex items-end' style={{ marginLeft: '24px' }}>
                        <Dropdown
                            menu={{
                                items: shop
                            }}
                        >
                            <Link to={'/shop-demo'} onClick={(e) => e.preventDefault()}>
                                <Space className='text-stone-600 hover:text-indigo-900 
                                    dark:text-slate-300 dark:hover:text-[#535199]'>
                                    SHOP
                                    <FiChevronDown className='font-extrabold text-lg mt-0.5' />
                                </Space>
                            </Link>
                        </Dropdown>
                    </p>
                </div>
                <div className='h-20 mt-11' style={{ width: '120px', marginLeft: '191px' }}>
                    <Link to={'/wide'}>
                        {
                            (inertia_img) ?
                                <img src={inertia_white} alt={inertia_white} className='ml-2' /> :
                                <img src={inertia} alt={inertia} className='ml-2' />
                        }
                    </Link>
                </div>
                <div className='flex items-center mr-5 cursor-pointer hover:opacity-75 transition-opacity duration-800'
                    style={{ marginLeft: '138px' }}
                    onClick={() => handleSearch(true)}>
                    <IoSearchOutline className='dark:text-slate-200 w-10 h-6 text-slate-800 mr-0.5' />
                    <span className='dark:text-slate-300 text-zinc-700 font-medium tracking-wider mr-0.5'
                        style={{ fontSize: '14.4px' }}>
                        SEARCH
                    </span>
                </div>
                <div className='flex items-center'>
                    <Link to={'https://www.pinterest.com/'}>
                        <FaPinterestP className='w-11 dark:text-slate-200 text-zinc-700 hover:opacity-75 transition-opacity duration-800' style={{ height: '21.7px' }} />
                    </Link>
                    <Link to={'https://www.instagram.com/'}>
                        <AiOutlineInstagram className='w-10 h-6 dark:text-slate-200 text-zinc-700 ml-0.5  hover:opacity-75 transition-opacity duration-800' />
                    </Link>
                    <Link to={'https://twitter.com/'}>
                        <AiOutlineTwitter className='w-10 h-6 dark:text-slate-200 text-zinc-700 ml-1 hover:opacity-75 transition-opacity duration-800' />
                    </Link>
                </div>
                <div>
                    <Link to={'/shop-cart'}>
                        <LiaShoppingBagSolid className='w-10 h-7 dark:text-slate-200 text-zinc-700 -mt-1 ml-2.5 hover:opacity-75 transition-opacity duration-800' />
                    </Link>
                    
                    {/* <p className='w-3 h-3 bg-red-600 rounded-full absolute top-[64px] right-[186px]'></p> */}

                </div>
                {!localHome ?
                    <Link to={'/my-account'}>
                        <button className='ml-7 pb-0.5 pl-0.5 text-sm font-medium tracking-widest rounded dark:text-slate-300 text-indigo-900
                             hover:text-slate-50 dark:hover:bg-stone-50 border-[#312e81] dark:border-[#535199] hover:bg-zinc-700 transition ease-in-out duration-300
                             dark:hover:text-stone-900'
                            style={{ border: '1px solid', width: '122px', height: '41px' }}>
                            SUBSCRIBE
                        </button>
                    </Link> :
                    <div>
                        <div
                            className='ml-16 rounded-full mt-0.5 cursor-pointer border-opacity-60 w-[64.5px] h-[63.5px]'
                            onMouseEnter={() => setText(true)}
                            onMouseLeave={() => setText(false)}>
                            <img
                                src={homelander} alt={homelander} className='rounded-full object-none'
                                style={{ filter: 'drop-shadow(0 0 3px #050259)', objectPosition: '-15.5px -6.5px' }}
                                onClick={imgClick}
                            />
                        </div>
                        {
                            text &&
                            <div className=' py-2 w-24 rounded-lg absolute right-9 top-28 bg-neutral-900
                                    dark:bg-slate-50 dark:text-slate-900 text-slate-50 text-sm opacity-80 shadow-lg z-50'>
                                my account
                            </div>
                        }
                        {
                            avatar &&
                            <div className='items-center bg-teal-200'>
                                <div className=' py-2 pb-0.5 pl-3 h-32 shadow-2xl rounded-md absolute right-8 top-28 bg-white text-slate-950 text-sm'
                                    style={{ border: '1px solid #e3efef', width: '340px' }}>
                                    <div className='flex items-center'>
                                        <div style={{
                                            border: '1px solid rgb(229 229 229)', width: '59px',
                                            height: '59px', borderRadius: '50%'
                                        }}>
                                            <img
                                                src={homelander} alt={homelander}
                                                className='rounded-full pl-0.5'
                                                style={{ width: '55px', height: '55px' }}
                                            />
                                        </div>
                                        <h4 className='ml-3.5'>{localHome}</h4>
                                    </div>
                                    <p style={{ width: '290px', border: '0.1px solid lightgrey', marginTop: '6px' }}></p>
                                    <div className='flex -mt-1.5 hover:opacity-80 cursor-pointer'
                                        onClick={logOut}>
                                        <div className='w-9 h-9 rounded-full border-2 bg-neutral-200'>
                                            <ImExit className='w-5 h-6 text-neutral-800 mt-1.5 ml-2' />
                                        </div>
                                        <p className='ml-3.5 mt-1 text-base'>Log Out</p>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                }
            </div>

            <div className='font-medium tracking-wide'
                style={{ fontSize: '14px', color: '#5e5d5d', height: '47px', paddingTop: '12px' }}>
                <ul className='flex ml-64 items-center'>
                    <li className='mr-7 ml-1 hover:opacity-80 transition-opacity duration-800'>
                        <Link to='/trending' className='list-none no-underline text-[#5e5d5d] dark:text-slate-200'>TRENDING</Link>
                    </li>
                    <li className='mr-7 hover:opacity-80 transition-opacity duration-800'>
                        <Link to='/lifestyle' className='list-none no-underline text-[#5e5d5d] dark:text-slate-200'>LIFESTYLE</Link>
                    </li>
                    <li className='mr-7 ml-0.5 hover:opacity-80 transition-opacity duration-800'>
                        <Link to='/beauty' className='list-none no-underline text-[#5e5d5d] dark:text-slate-200'>BEAUTY</Link>
                    </li>
                    <li className='mr-7 hover:opacity-80 transition-opacity duration-800'>
                        <Link to='/decor' className='list-none no-underline text-[#5e5d5d] dark:text-slate-200'>DECOR</Link>
                    </li>
                    <li className='mr-6 ml-0.5 hover:opacity-80 transition-opacity duration-800'>
                        <Link to='/nutrition' className='list-none no-underline text-[#5e5d5d] dark:text-slate-200'>NUTRITION</Link>
                    </li>
                    <li className='mr-7 ml-0.5 hover:opacity-80 transition-opacity duration-800'>
                        <Link to='/travel' className='list-none no-underline text-[#5e5d5d] dark:text-slate-200'>TRAVEL</Link>
                    </li>
                    <li className='mr-6 ml-0.5 hover:opacity-80 transition-opacity duration-800'>
                        <Link to='/wellbeing' className='list-none no-underline text-[#5e5d5d] dark:text-slate-200'>WELLBEING</Link>
                    </li>
                    <li className='mr-7 ml-0.5 hover:opacity-80 transition-opacity duration-800'>
                        <Link to='/workout' className='list-none no-underline text-[#5e5d5d] dark:text-slate-200'>WORKOUT</Link>
                    </li>
                    <li className='hover:opacity-80 transition-opacity duration-800'>
                        <Link to='/' className='list-none no-underline text-[#5e5d5d] dark:text-slate-200'>DIY</Link>
                    </li>
                </ul>
            </div>
            <Searchscreen show={isShow} handleSearch={handleSearch} bgcolor='#312e81' />
        </div>
    )
}

export default HeaderTest



