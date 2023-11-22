import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { FiChevronDown } from 'react-icons/fi'
import { FaPinterestP } from 'react-icons/fa'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import { GoSearch } from 'react-icons/go'
import { ImExit } from 'react-icons/im'

import inertia_white from '../image/inertia_white.png'
import homelander from '../image/homelander.png'

import { Dropdown, Space } from 'antd';

import '../../home/interface/styles.css'


const HeaderShop = ({ avatar, setAvatar }) => {
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

    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleClickSearch = () => {
        handleSearch();

    }
    const handleSearch = () => {
        let url = searchQuery.toLowerCase().split(" ");
        if (url.length > 1) {
            url = url.join("-");
        }
        navigate(`/${url}`);
    }

    //red point    

    // Sign in and sign out
    const localHome = JSON.parse(localStorage.getItem("homelander"));
    console.log(localHome);
    const [text, setText] = useState(false);
    const change = useNavigate()
    function imgClick() {
        setAvatar(true)
    }
    function logOut() {
        localStorage.removeItem("homelander");
        change('/my-account')
    }
    return (
        <div className='shadow-md shadow-neutral-100 bg-stone-950 z-50'>
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
                <Link to={'/wide'}>
                    <div className='h-20 mt-11 mr-11' style={{ width: '125px', marginLeft: '25px' }}>
                        <img src={inertia_white} alt={inertia_white} className='ml-2' />
                    </div>
                </Link>

                <div className='dark:bg-neutral-900 bg-slate-50 flex items-center -mt-1 mr-5 shadow-sm rounded-xl'
                    style={{ border: '1px solid lightgrey', width: '810px', height: '48px' }}>
                    <input className='-mt-0.5 w-52 box-border bg-slate-50 focus:outline-none tracking-wide
                                     text-stone-600 dark:bg-neutral-900'
                        style={{ marginLeft: '17px', fontSize: '17.4px' }}
                        placeholder='Search ...'
                        value={searchQuery}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown} />
                    <button className='mr-1.5 mt-1 text-center rounded text-sm font-medium pb-0.5'
                        style={{ width: '64px', height: '34px', marginLeft: '547px' }}
                        onClick={handleClickSearch}>
                        <GoSearch className='w-7 h-6 text-stone-500 hover:opacity-75 transition-opacity duration-300' />
                    </button>
                </div>

                <div className='flex items-center -mt-1'>
                    <Link to={'https://www.pinterest.com/'}>
                        <FaPinterestP className='w-11 text-slate-50 hover:opacity-80 transition-opacity duration-300'
                            style={{ height: '21.7px' }} />
                    </Link>
                    <Link to={'https://www.instagram.com/'}>
                        <AiOutlineInstagram className='w-10 h-6 text-slate-50 ml-0.5 hover:opacity-80 transition-opacity duration-300' />
                    </Link>
                    <Link to={'https://twitter.com/'}>
                        <AiOutlineTwitter className='w-10 h-6 text-slate-50 ml-1 hover:opacity-80 transition-opacity duration-300' />
                    </Link>
                </div>
                <div>
                    <Link to={'/shop-cart'} className='no-underline'>
                        <LiaShoppingBagSolid className='text-slate-50 w-10 h-7 -mt-1 ml-2.5 hover:opacity-90 transition-opacity duration-300' />
                    </Link>

                    {/* <p className='w-3 h-3 bg-red-700 absolute top-[74px] right-[149px] rounded-full'></p> */}

                </div>
                {!localHome ?
                    <Link to={'/my-account'}>
                        <button className='ml-6 pb-0.5 pl-0.5 text-sm font-medium tracking-widest rounded
                        text-slate-50 hover:bg-neutral-700 transition ease-in-out duration-300'
                            style={{ border: '1px solid #edecea', width: '95px', height: '43px' }}>
                            LOGIN
                        </button>
                    </Link> :
                    <div>
                        <div className='ml-7 -mt-1 cursor-pointer w-[64.5px] h-[63.5px]'
                            onMouseEnter={() => setText(true)}
                            onMouseLeave={() => setText(false)}>
                            <img src={homelander} alt={homelander} style={{ objectPosition: '-15.5px -6.5px' }}
                                className='rounded-full object-none' onClick={imgClick}
                            />
                        </div>
                        {
                            text &&
                            <div className=' py-2 pl-2.5 w-24 rounded-lg absolute right-9 bg-neutral-900
                                         text-slate-50 text-sm opacity-80 shadow-lg z-50'
                                style={{ top: '121px' }}>
                                my account
                            </div>
                        }
                        {
                            avatar &&
                            <div className='items-center bg-teal-200'>
                                <div className=' py-2 pb-0.5 pl-3 h-32 shadow-2xl rounded-md absolute right-9 bg-white text-slate-950 text-sm'
                                    style={{ border: '1px solid #e3efef', width: '340px', top: '124px' }}>
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
            <div className='font-semibold text-center tracking-wider font-sans flex items-center -mt-2'
                style={{ height: '45px' }}>
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