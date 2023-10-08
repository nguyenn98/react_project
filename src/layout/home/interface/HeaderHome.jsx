import React from 'react'
import { Link } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import { IoSearchOutline } from 'react-icons/io5'
import { FaPinterestP } from 'react-icons/fa'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import inertia from '../images/inertia.png'

const HeaderHome = () => {
    return (
        <div>
            <div className='border-gray-900 font-semibold text-center tracking-tight text-stone-100 font-sans -ml-1'
                style={{ backgroundColor: '#312e81', height: '38px', fontSize: '14.4px', paddingTop: '7px' }}>
                <span className='mr-2.5'>15% OFF - SALE FOR LIMITED TIME.</span>
                <Link to={'/'}>
                    <span className='underline md:decoration-1 font-bold tracking-tighter text-stone-100 hover:text-stone-400'>
                        BUY NOW!
                    </span>
                </Link>
            </div>
            <div className='bg-white font-medium text-center tracking-normal font-sans flex items-center'
                style={{ height: '78.4px', borderBottom: '1px solid #cccccc' }}>
                <div className='flex items-center justify-start w-96 ml-8'
                    style={{ fontSize: '13.7px', color: '#4c4b4b', marginTop: '12px' }}>
                    <p>HOME</p>
                    <p className='flex items-end ml-7'>
                        <span className='mr-2'>FEATURES</span>
                        <FiChevronDown className='font-extrabold text-lg' />
                    </p>
                    <p className='flex items-end ml-6'>
                        <span className='mr-2'>PAGES</span>
                        <FiChevronDown className='font-extrabold text-lg' />
                    </p>
                    <p className='flex items-end' style={{ marginLeft: '22px' }}>
                        <span className='mr-2'>SHOP</span>
                        <FiChevronDown className='font-extrabold text-lg' /></p>
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
            <div className='font-medium tracking-wide'
                style={{ borderBottom: '1px solid #cccccc', fontSize: '14px', color: '#5e5d5d', height: '47px', paddingTop: '12px' }}>
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

export default HeaderHome