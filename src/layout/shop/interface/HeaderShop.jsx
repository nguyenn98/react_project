import React from 'react'
import { Link } from 'react-router-dom'

import { FiChevronDown } from 'react-icons/fi'
import { FaPinterestP } from 'react-icons/fa'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import { GoSearch } from 'react-icons/go'
import inertia_white from '../image/inertia_white.png'

import { Dropdown, Space } from 'antd';

import '../../home/interface/styles.css'


const HeaderShop = () => {
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
        <div className='shadow-md shadow-neutral-100 bg-stone-950'>
            <div className='border-gray-900 font-semibold text-center tracking-tight text-stone-100 font-sans -ml-1 '
                style={{ backgroundColor: '#b18e71', height: '38px', fontSize: '14.5px', paddingTop: '8px' }}>
                <span className='mr-2.5'>15% OFF - SALE FOR LIMITED TIME.</span>
                <Link to={'/shop-demo'}>
                    <span className='underline md:decoration-1 font-bold tracking-tighter text-stone-100 hover:text-stone-400'>
                        BUY NOW!
                    </span>
                </Link>
            </div>
            <div className='flex items-center -mt-3'>
                <div className='h-20 mt-11 mr-11' style={{ width: '125px', marginLeft: '25px' }}>
                    <img src={inertia_white} alt={inertia_white} className='ml-2' />
                </div>

                <div className='bg-white flex items-center -mt-1 mr-5 shadow-sm rounded-xl'
                    style={{ border: '1px solid lightgrey', width: '810px', height: '48px' }}>
                    <input className='-mt-0.5 w-52 box-border bg-white focus:outline-none tracking-wide text-stone-600' 
                            style={{marginLeft: '17px', fontSize: '17.4px'}} placeholder='Search ...' />
                    <button className='mr-1.5 mt-1 text-center rounded text-sm font-medium pb-0.5'
                        style={{ width: '64px', height: '34px', marginLeft: '547px' }}>
                        <GoSearch className='w-7 h-6 text-stone-500' />
                    </button>
                </div>

                <div className='flex items-center -mt-1'>
                    <Link to={'https://www.pinterest.com/'}>
                        <FaPinterestP className='w-11 text-slate-50' style={{ height: '21.7px' }} />
                    </Link>
                    <Link to={'https://www.instagram.com/'}>
                        <AiOutlineInstagram className='w-10 h-6 text-slate-50 ml-0.5' />
                    </Link>
                    <Link to={'https://twitter.com/'}>
                        <AiOutlineTwitter className='w-10 h-6 text-slate-50 ml-1' />
                    </Link>
                </div>
                <div>
                    <LiaShoppingBagSolid className='text-slate-50 w-10 h-7 -mt-1 ml-2.5' />
                </div>
                <button className='ml-6 pb-0.5 pl-0.5 text-sm font-medium tracking-widest rounded text-slate-50'
                    style={{ border: '1px solid #edecea', width: '95px', height: '43px' }}>
                    LOGIN
                </button>
            </div>

            <div className='font-semibold text-center tracking-wider font-sans flex items-center -mt-2'
                style={{ height: '45px'}}>
                <div className='flex items-center justify-start w-96 ml-8'
                    style={{ fontSize: '14.4px', color: '#4c4b4b', marginTop: '9px' }}>
                    <p>
                        <Link to={'/'} className=' no-underline text-slate-50'>
                            HOME
                        </Link>
                    </p>
                    <p className='flex items-end ml-7 mr-1.5'>
                        <Dropdown
                            menu={{
                                items: features
                            }}
                        >
                            <Link to={'/wide'} onClick={(e) => e.preventDefault()}>
                                <Space className='text-slate-50'>
                                    FEATURES
                                    <FiChevronDown className='font-extrabold text-lg ' />
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
                                <Space className='text-slate-50'>
                                    PAGES
                                    <FiChevronDown className='font-extrabold text-lg' />
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
                                <Space className='text-slate-50'>
                                    SHOP
                                    <FiChevronDown className='font-extrabold text-lg ' />
                                </Space>
                            </Link>
                        </Dropdown>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeaderShop