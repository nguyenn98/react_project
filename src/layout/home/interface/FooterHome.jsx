import React from 'react'
import inertia from '../images/inertia.png'
import inertia_foot from '../images/inertia_foot.png'
import { Link } from 'react-router-dom'

const FooterHome = ({ inertia_img }) => {
  return (
    <div>
      <div className='flex pt-16 shadow-2xl shadow-stone-700 dark:bg-[#161513]'
        style={{ height: '427px', fontFamily: 'revert-layer' }}>
        <div className='tracking-wide mt-1' style={{ width: '440px', marginLeft: '75px', }}>
          <Link to={'/wide'}>
            {
              inertia_img ?
                <img src={inertia_foot} alt={inertia_foot} className=' h-10 mb-7' style={{ width: '133px' }} /> :
                <img src={inertia} alt={inertia} className=' h-10 mb-7' style={{ width: '133px' }} />
            }
          </Link>
          <p className='text-sm text-slate-600 dark:text-slate-200 mt-4' style={{ lineHeight: '21px' }}>
            Inertia is a premium multiuse wordpress theme made for magazines, blogs and creators.
          </p>
          <p className='text-zinc-600 dark:text-slate-200 mb-5' style={{ lineHeight: '22px', marginTop: '22px', fontSize: '14.2px' }}>
            Lightweight wordpress theme, SEO-Optimized,  Providing blazing fast performance and speed. In addition to being accessibility-compliant theme and loaded with features with more that 100 options to provide maximum flexibility to users.
          </p>
          <ul className='flex justify-start -mt-1.5 -ml-8 font-semibold'
            style={{ fontSize: '14.4px' }}>
            <Link to={'/about-page2'} className='text-[#5b5959] dark:text-slate-200 no-underline hover:opacity-80 transition duration-200'>
              <li className='mr-7'>ABOUT US</li>
            </Link>
            <Link to={'/maintenance'} className='text-[#5b5959] dark:text-slate-200 no-underline hover:opacity-80 transition duration-200'>
              <li className='mr-7'>SERVICES</li>
            </Link>
            <Link to={'/shop-demo'} className='text-[#5b5959] dark:text-slate-200 no-underline hover:opacity-80 transition duration-200'>
              <li className='mr-7'>SHOP</li>
            </Link>
            <Link to={'/maintenance'} className='text-[#5b5959] dark:text-slate-200 no-underline hover:opacity-80 transition duration-200'>
              <li>CONTACT US</li>
            </Link>
          </ul>
        </div>
        <ul className='ml-32 col-2 tracking-wide text-sm leading-8'>
          <li className='font-semibold tracking-wider text-base mb-3 text-stone-950 dark:text-slate-50'>Features</li>
          <Link to={'/accent-color'} className=' no-underline hover:opacity-80 transition duration-200'>
            <li className='mb-0.5 text-[#5b5959] dark:text-slate-200'>Author Page</li>
          </Link>
          <Link to={'/maintenance'} className=' no-underline hover:opacity-80 transition duration-200'>
            <li className='mb-0.5 text-[#5b5959] dark:text-slate-200'>Search Page</li>
          </Link>
          <Link to={'/author'} className=' no-underline hover:opacity-80 transition duration-200'>
            <li className='mb-0.5 text-[#5b5959] dark:text-slate-200'>Category Page</li>
          </Link>
          <Link to={'/maintenance'} className=' no-underline hover:opacity-80 transition duration-200'>
            <li className='mb-0.5 text-[#5b5959] dark:text-slate-200'>Services</li>
          </Link>
          <Link to={'/about-page1'} className=' no-underline hover:opacity-80 transition duration-200'>
            <li className='mb-0.5 text-[#5b5959] dark:text-slate-200'>About</li>
          </Link>
          <Link to={'/maintenance'} className=' no-underline hover:opacity-80 transition duration-200'>
            <li className='mb-0.5 text-[#5b5959] dark:text-slate-200'>Page Markup</li>
          </Link>
          <Link to={'/maintenance'} className=' no-underline hover:opacity-80 transition duration-200'>
            <li className='mb-0.5 text-[#5b5959] dark:text-slate-200'>Fullwidth Page</li>
          </Link>
          <Link to={'/maintenance'} className=' no-underline hover:opacity-80 transition duration-200'>
            <li className='mb-0.5 text-[#5b5959] dark:text-slate-200'>Aligned Page</li>
          </Link>
          <Link to={'/*'} className=' no-underline hover:opacity-80 transition duration-200'>
            <li className='mb-0.5 text-[#5b5959] dark:text-slate-200'>Error Page</li>
          </Link>
          <Link to={'/maintenance'} className=' no-underline hover:opacity-80 transition duration-200'>
            <li className='text-[#5b5959] dark:text-slate-200'>Contact Us</li>
          </Link>
        </ul>
        <div className='col-3 tracking-wider text-sm text-stone-600' style={{ marginLeft: '97.5px' }}>
          <ul className='mb-8 leading-8'>
            <li className='font-semibold tracking-wide text-base mb-3 text-stone-950 dark:text-slate-50'>Shop</li>
            <Link to={'/shop-demo'} className=' no-underline hover:opacity-80 transition duration-200'>
              <li className='mb-0.5 text-[#5b5959] dark:text-slate-200'>Shop Demo</li>
            </Link>
            <Link to={'/shop-cart'} className=' no-underline hover:opacity-80 transition duration-200'>
              <li className='mb-0.5 text-[#5b5959] dark:text-slate-200'>Cart</li>
            </Link>
            <Link to={'/shop-cart'} className=' no-underline hover:opacity-80 transition duration-200'>
              <li className='text-[#5b5959] dark:text-slate-200'>Checkout</li>
            </Link>
          </ul>
          <ul className='leading-8 tracking-wider'>
            <li className='font-semibold tracking-wide text-base mb-3 text-stone-950 dark:text-slate-50'>Inertia Theme</li>
            <Link to={'/'} className=' no-underline hover:opacity-80 transition duration-200'>
              <li className='mb-0.5 text-[#5b5959] dark:text-slate-200'>Home</li>
            </Link>
            <Link to={'/coming-soon'} className=' no-underline hover:opacity-80 transition duration-200'>
              <li className='mb-0.5 text-[#5b5959] dark:text-slate-200'>Buy Theme</li>
            </Link>
            <Link to={'/coming-soon'} className=' no-underline hover:opacity-80 transition duration-200'>
              <li className='mb-0.5 text-[#5b5959] dark:text-slate-200'>Demos</li>
            </Link>
            <Link to={'/coming-soon'} className=' no-underline hover:opacity-80 transition duration-200'>
              <li className='mb-0.5 text-[#5b5959] dark:text-slate-200'>Documentation</li>
            </Link>
            <Link to={'/maintenance'} className=' no-underline hover:opacity-80 transition duration-200'>
              <li className='text-[#5b5959] dark:text-slate-200'>Support</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className='text-sm pt-5 bg-slate-50 dark:bg-[#161513]'
        style={{ paddingLeft: '71.5px', paddingBottom: '38px', fontFamily: 'revert-layer' }}>
        <p className='pl-0.5 text-zinc-700 dark:text-slate-200 tracking-wide font-semibold'
          style={{ width: '94%', borderTop: '1px solid lightgray', paddingTop: '28px' }}>
          © 2023 Inertia Wordpress Theme, MNMLD - All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default FooterHome