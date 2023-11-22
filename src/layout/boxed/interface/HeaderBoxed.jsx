import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import { IoSearchOutline } from 'react-icons/io5'
import { FaPinterestP } from 'react-icons/fa'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

import inertia from '../image/inertia.png'
import inertia_white from '../image/inertia_white.png'

import { Dropdown, Space } from 'antd';
import Searchscreen from '../../../components/Searchscreen'

const HeaderBoxed = ({inertia_img}) => {
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

    const [isShow, setIsShow] = useState(false);

    function handleSearch(isShowParam) {
        setIsShow(isShowParam)
    }


    return (
        <div>
            <div className='dark:bg-[#4c73e0] bg-[#1d4ed8] border-gray-900 
                font-semibold text-center tracking-wide text-stone-50 font-sans'
                style={{ height: '54px', width: '100%', fontSize: '14.42px', paddingTop: '14.5px' }}>
                <span className='mr-[12px] -ml-1 dark:opacity-100'>15% OFF - SALE FOR <span className='tracking-tight'>LIMITED TIME.</span></span>
                <Link to={'/shop-demo'}>
                    <span className='underline md:decoration-1 font-bold tracking-tight
                         text-stone-100 hover:text-stone-300 transition ease-in-out duration-300'>
                        BUY NOW!
                    </span>
                </Link>
            </div>
            <div className='dark:bg-neutral-900 bg-slate-50' style={{ height: '169px' }}>
                <div style={{ paddingTop: "36px", marginLeft: '30px' }}>
                    <Link to={'/wide'}>
                        <img className='ml-0.5' style={{ height: '60px', width: '202px' }}
                            src={inertia_img? inertia_white : inertia} 
                            alt={inertia_img? inertia_white : inertia} />
                    </Link>
                    <p className='mt-3 ml-0.5 tracking-wide font-semibold text-sm dark:text-slate-300 text-neutral-500'>
                        Multipurpose Magazine & Blog Wordpress Theme
                    </p>
                </div>
            </div>
            <div className='dark:bg-neutral-800 bg-neutral-800 font-medium text-center tracking-normal font-sans flex items-center'
                style={{ height: '62px' }}>
                <div className='flex items-center justify-start w-96 ml-8'
                    style={{ fontSize: '14.4px', marginTop: '13px' }}>
                    <p>
                        <Link to={'/'} className='tracking-tight no-underline text-white hover:text-indigo-800'>
                            HOME
                        </Link>
                    </p>
                    <p className='flex items-end ml-7 mr-1 tracking-wide'>
                        <Dropdown
                            menu={{
                                items: features
                            }}
                        >
                            <Link to={'/wide'} onClick={(e) => e.preventDefault()}>
                                <Space className='text-white hover:text-indigo-800'>
                                    FEATURES
                                    <FiChevronDown className='font-extrabold text-lg mt-0.5' />
                                </Space>
                            </Link>
                        </Dropdown>
                    </p>
                    <p className='flex items-end ml-5 tracking-wide'>
                        <Dropdown
                            menu={{
                                items: pages
                            }}
                        >
                            <Link to={'/about-page1'} onClick={(e) => e.preventDefault()}>
                                <Space className='text-white hover:text-indigo-800'>
                                    PAGES
                                    <FiChevronDown className='font-extrabold text-lg mt-0.5' />
                                </Space>
                            </Link>
                        </Dropdown>
                    </p>
                    <p className='flex items-end tracking-wide' style={{ marginLeft: '24px' }}>
                        <Dropdown
                            menu={{
                                items: shop
                            }}
                        >
                            <Link to={'/shop-demo'} onClick={(e) => e.preventDefault()}>
                                <Space className='text-white hover:text-indigo-800'>
                                    SHOP
                                    <FiChevronDown className='font-extrabold text-lg mt-0.5' />
                                </Space>
                            </Link>
                        </Dropdown>
                    </p>
                </div>
                <div className='flex items-center mr-5 cursor-pointer hover:opacity-75 transition-opacity duration-800'
                    style={{ marginLeft: '427px' }}
                    onClick={() => handleSearch(true)}>
                    <IoSearchOutline className='w-10 h-6 text-white mr-0.5' />
                    <span className='text-white font-medium tracking-wider mr-0.5 mt-0.5'
                        style={{ fontSize: '14.4px' }}>SEARCH</span>
                </div>
                <div className='flex items-center'>
                    <Link to={'https://www.pinterest.com/'}>
                        <FaPinterestP className='w-11 text-white hover:opacity-75 transition-opacity duration-800' 
                            style={{ height: '21.7px' }} />
                    </Link>
                    <Link to={'https://www.instagram.com/'}>
                        <AiOutlineInstagram className='w-10 h-6 text-white ml-1 hover:opacity-75 transition-opacity duration-800' />
                    </Link>
                    <Link to={'https://twitter.com/'}>
                        <AiOutlineTwitter className='w-10 h-6 text-white ml-1.5 -mt-0.5 hover:opacity-75 transition-opacity duration-800' />
                    </Link>
                </div>
                <Link to={'/trending'}>
                    <button className='pb-0.5 pl-0.5 text-sm font-medium tracking-widest rounded text-stone-800
                        hover:text-slate-50 bg-slate-50 hover:bg-neutral-700 transition ease-in-out duration-300'
                        style={{ border: '1px solid #333131', width: '119px', height: '44px', marginLeft: '15px' }}>
                        TRENDING
                    </button>
                </Link>
            </div>
            <div style={{ width: '100vw', marginLeft: '-43px'}} >
                <Searchscreen show={isShow} handleSearch={handleSearch} bgcolor='black'/>
            </div>
        </div>
    )
}

export default HeaderBoxed