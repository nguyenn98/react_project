import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import { IoSearchOutline } from 'react-icons/io5'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import { Dropdown, Space } from 'antd';

import style_wit from '../images/style_wit.png'

import '../../home/interface/styles.css'
import Searchscreen from '../../../components/Searchscreen'

const HearderArchive = () => {
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

    const [isShow, setIsShow] = useState(false)

    function handleSearch(isShowParam){
        setIsShow(isShowParam)
    }

    return (
        <div>
            <div className='border-gray-900 font-semibold text-center  text-stone-100 font-sans -ml-2'
                style={{ backgroundColor: 'black', height: '54px', fontSize: '14.5px', paddingTop: '15px' }}>
                <span className='mr-2.5'>15% OFF - SALE FOR LIMITED TIME.</span>
                <Link to={'/shop-demo'}>
                    <span className='underline md:decoration-1 font-bold tracking-tighter text-stone-100 
                        hover:text-stone-400 transition ease-in-out duration-300'>
                        BUY NOW!
                    </span>
                </Link>
            </div>
            <div className='dark:bg-stone-900 bg-[#fefefe] font-medium text-center tracking-normal font-sans flex items-center'
                style={{ height: '77px', borderBottom: '1px solid #cccccc' }}>
                <div className='flex items-center justify-start w-96 ml-8'
                    style={{ fontSize: '14px', color: '#4c4b4b', marginTop: '14px' }}>
                    <p>
                        <Link to={'/'} className='dark:text-slate-200 tracking-tight no-underline text-stone-600 hover:text-indigo-900'>
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
                                <Space className='dark:text-slate-200 text-stone-600 hover:text-indigo-900'>
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
                                <Space className='dark:text-slate-200 text-stone-600 hover:text-indigo-900'>
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
                                <Space className='dark:text-slate-200 text-stone-600 hover:text-indigo-900'>
                                    SHOP
                                    <FiChevronDown className='font-extrabold text-lg mt-0.5' />
                                </Space>
                            </Link>
                        </Dropdown>
                    </p>
                </div>
                <div className='h-[50px] dark:rounded-3xl dark:bg-slate-50 -mt-0.5' style={{ width: '188px', marginLeft: '164.5px'}}>
                    <img src={style_wit} alt={style_wit} className='ml-3 h-9 w-[165px] mt-2 ' />
                </div>
                <div className='flex items-center mr-5 cursor-pointer hover:opacity-75 transition-opacity 
                    duration-800' 
                     style={{ marginLeft: '254px' }}
                     onClick={() => handleSearch(true)}>
                    <IoSearchOutline className='w-10 h-6 dark:text-slate-200 text-slate-800 mr-0.5 -mt-0.5' />
                    <span className='text-zinc-700 dark:text-slate-200 font-medium tracking-wider'
                        style={{ fontSize: '14.4px' }}>SEARCH</span>
                </div>
                <div>
                    <Link to={'/shop-cart'}>
                        <LiaShoppingBagSolid className='w-10 h-7 -mt-1 ml-1 dark:text-slate-200 text-stone-700 hover:opacity-75 transition-opacity duration-800' />
                    </Link>
                </div>
                <Link to={'/about-page1'}>
                    <button className='ml-7 pl-0.5 pb-0.5 text-sm font-medium tracking-widest rounded text-stone-700 
                        hover:text-slate-50 hover:bg-stone-700 transition ease-in-out duration-200 dark:text-slate-200
                        dark:hover:text-neutral-900 dark:hover:bg-slate-50'
                        style={{
                            border: '1px solid #827055', width: '104px', height: '42px',
                        }}>
                        E-BOOK
                    </button>
                </Link>
            </div>
            <Searchscreen show={isShow} handleSearch={handleSearch} bgcolor='black' />
        </div>
    )
}

export default HearderArchive