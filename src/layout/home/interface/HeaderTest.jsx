import React from 'react'
import { Link } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import { IoSearchOutline } from 'react-icons/io5'
import { FaPinterestP } from 'react-icons/fa'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import inertia from '../images/inertia.png'

import { Dropdown, Space } from 'antd';

import '../interface/styles.css'

const HeaderTest = () => {
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
        }
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
    return (
        <div>
            <div className='border-gray-900 font-semibold text-center tracking-tight text-stone-100 font-sans -ml-1'
                style={{ backgroundColor: '#312e81', height: '38px', fontSize: '14.4px', paddingTop: '7px' }}>
                <span className='mr-2.5'>15% OFF - SALE FOR LIMITED TIME.</span>
                <Link to={'/shop-demo'}>
                    <span className='underline md:decoration-1 font-bold tracking-tighter text-stone-100 hover:text-stone-400'>
                        BUY NOW!
                    </span>
                </Link>
            </div>
            <div className='bg-white font-medium text-center tracking-normal font-sans flex items-center'
                style={{ height: '78.4px', borderBottom: '1px solid #cccccc' }}>
                <div className='flex items-center justify-start w-96 ml-8'
                    style={{ fontSize: '14px', color: '#4c4b4b', marginTop: '12px' }}>
                    <p>
                        <Link to={'/'} className='tracking-tight no-underline text-stone-600 hover:text-indigo-800'>
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
                                <Space className='text-stone-600 hover:text-indigo-800'>
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
                                <Space className='text-stone-600 hover:text-indigo-800'>
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
                                <Space className='text-stone-600 hover:text-indigo-800'>
                                    SHOP
                                    <FiChevronDown className='font-extrabold text-lg mt-0.5' />
                                </Space>
                            </Link>
                        </Dropdown>
                    </p>
                </div>
                <div className='h-20 mt-11' style={{ width: '120px', marginLeft: '191px' }}>
                    <img src={inertia} alt={inertia} className='ml-2' />
                </div>
                <div className='flex items-center mr-5' style={{ marginLeft: '138px' }}>
                    <IoSearchOutline className='w-10 h-6 text-slate-800 mr-0.5' />
                    <span className='text-zinc-700 font-medium tracking-wider mr-0.5'
                        style={{ fontSize: '14.4px' }}>SEARCH</span>
                </div>
                <div className='flex items-center'>
                    <FaPinterestP className='w-11 text-zinc-700' style={{ height: '21.7px' }} />
                    <AiOutlineInstagram className='w-10 h-6 text-zinc-700 ml-0.5' />
                    <AiOutlineTwitter className='w-10 h-6 text-zinc-700 ml-1' />
                </div>
                <div>
                    <LiaShoppingBagSolid className='w-10 h-7 -mt-1 ml-2.5' />
                </div>
                <button className='ml-7 pb-0.5 pl-0.5 text-sm font-medium tracking-widest rounded'
                    style={{ border: '1px solid #312e81', color: '#3c3993', width: '122px', height: '41px' }}>
                    SUBSCRIBE
                </button>



            </div>
            <div className='font-medium tracking-wide shadow-md shadow-neutral-100 '
                style={{fontSize: '14px', color: '#5e5d5d', height: '47px', paddingTop: '12px'}}>
                <ul className='flex ml-64 items-center'>
                    <li className='mr-7 ml-1'>
                        <Link to='/trending' className='list-none no-underline' style={{ color: '#5e5d5d' }}>TRENDING</Link>
                    </li>
                    <li className='mr-7'>
                        <Link to='/lifestyle' className='list-none no-underline' style={{ color: '#5e5d5d' }}>LIFESTYLE</Link>
                    </li>
                    <li className='mr-7 ml-0.5'>
                        <Link to='/beauty' className='list-none no-underline' style={{ color: '#5e5d5d' }}>BEAUTY</Link>
                    </li>
                    <li className='mr-7'>
                        <Link to='/decor' className='list-none no-underline' style={{ color: '#5e5d5d' }}>DECOR</Link>
                    </li>
                    <li className='mr-6 ml-0.5'>
                        <Link to='/nutrition' className='list-none no-underline' style={{ color: '#5e5d5d' }}>NUTRITION</Link>
                    </li>
                    <li className='mr-7 ml-0.5'>
                        <Link to='/travel' className='list-none no-underline' style={{ color: '#5e5d5d' }}>TRAVEL</Link>
                    </li>
                    <li className='mr-6 ml-0.5'>
                        <Link to='/wellbeing' className='list-none no-underline' style={{ color: '#5e5d5d' }}>WELLBEING</Link>
                    </li>
                    <li className='mr-7 ml-0.5'>
                        <Link to='/workout' className='list-none no-underline' style={{ color: '#5e5d5d' }}>WORKOUT</Link>
                    </li>
                    <li>
                        <Link to='/' className='list-none no-underline' style={{ color: '#5e5d5d' }}>DIY</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderTest