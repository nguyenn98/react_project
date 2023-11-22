import React from 'react'
import inertia_white from '../image/inertia_white.png'

import { Link } from 'react-router-dom'

const FooterShop = () => {
  return (
    <div className=' mt-16'>
      <div className='bg-stone-950 text-slate-50'>
        <div className='flex pt-16 shadow-sm shadow-neutral-900'
          style={{ height: '427px', fontFamily: 'revert-layer' }}>
          <div className='tracking-wide mt-1' style={{ width: '440px', marginLeft: '75px', }}>
            <Link to={'/wide'} >
              <img src={inertia_white} alt={inertia_white} className='mb-7'
                style={{ width: '140px', height: '40px' }} />
            </Link>
            <p className='text-sm mt-4' style={{ lineHeight: '21px', width: '462px' }}>
              Inertia is a premium multiuse wordpress theme made for magazines, blogs and creators.
            </p>
            <p className='mb-5'
              style={{ lineHeight: '22px', marginTop: '22px', fontSize: '14.2px' }}>
              Lightweight wordpress theme, SEO-Optimized,  Providing blazing fast performance and
              speed. In addition to being accessibility-compliant theme and loaded with features
              with more that 100 options to provide maximum flexibility to users.
            </p>
            <ul className='flex justify-start -mt-1.5 -ml-8 font-semibold'
              style={{ color: 'rgb(248 250 252 / var(--tw-text-opacity))', fontSize: '14.4px' }}>
              <Link to={'/about-page2'} className=' no-underline hover:opacity-80 transition duration-200'>
                <li className='mr-7 text-slate-50'>ABOUT US</li>
              </Link>
              <Link to={'/maintenance'} className=' no-underline hover:opacity-80 transition duration-200'>
                <li className='mr-7 text-slate-50'>SERVICES</li>
              </Link>
              <Link to={'/shop-demo'} className=' no-underline hover:opacity-80 transition duration-200'>
                <li className='mr-7 text-slate-50'>SHOP</li>
              </Link>
              <Link to={'/maintenance'} className=' no-underline hover:opacity-80 transition duration-200'>
                <li className='text-slate-50'>CONTACT US</li>
              </Link>
            </ul>
          </div>
          <ul className='ml-32 col-2 tracking-wide text-sm leading-8'>
            <li className='font-semibold tracking-wider text-base mb-3'>Features</li>
            <Link to={'/accent-color'} className=' no-underline hover:opacity-80 transition duration-200'>
              <li className='mb-0.5 text-slate-50'>Author Page</li>
            </Link>
            <Link to={'/maintenance'} className=' no-underline hover:opacity-80 transition duration-200'>
              <li className='mb-0.5 text-slate-50'>Search Page</li>
            </Link>
            <Link to={'/author'} className=' no-underline hover:opacity-80 transition duration-200'>
              <li className='mb-0.5 text-slate-50'>Category Page</li>
            </Link>
            <Link to={'/maintenance'} className=' no-underline hover:opacity-80 transition duration-200'>
              <li className='mb-0.5 text-slate-50'>Services</li>
            </Link>
            <Link to={'/about-page1'} className=' no-underline hover:opacity-80 transition duration-200'>
              <li className='mb-0.5 text-slate-50'>About</li>
            </Link>
            <Link to={'/maintenance'} className=' no-underline hover:opacity-80 transition duration-200'>
              <li className='mb-0.5 text-slate-50'>Page Markup</li>
            </Link>
            <Link to={'/maintenance'} className=' no-underline hover:opacity-80 transition duration-200'>
              <li className='mb-0.5 text-slate-50'>Fullwidth Page</li>
            </Link>
            <Link to={'/maintenance'} className=' no-underline hover:opacity-80 transition duration-200'>
              <li className='mb-0.5 text-slate-50'>Aligned Page</li>
            </Link>
            <Link to={'/maintenance'} className=' no-underline hover:opacity-80 transition duration-200'>
              <li className='mb-0.5 text-slate-50'>Contact Us</li>
            </Link>
            <Link to={'/*'} className=' no-underline hover:opacity-80 transition duration-200'>
              <li className='text-slate-50'>Error Page</li>
            </Link>
          </ul>
          <div className='col-3 tracking-wider text-sm' style={{ marginLeft: '97.5px' }}>
            <ul className='mb-8 leading-8'>
              <li className='font-semibold tracking-wide text-base mb-3'>Inertia Theme</li>
              <Link to={'/'} className=' no-underline hover:opacity-80 transition duration-200'>
                <li className='mb-0.5 text-slate-50'>Home</li>
              </Link>
              <Link to={'/coming-soon'} className=' no-underline hover:opacity-80 transition duration-200'>
                <li className='mb-0.5 text-slate-50'>Buy Theme</li>
              </Link>
              <Link to={'/coming-soon'} className=' no-underline hover:opacity-80 transition duration-200'>
                <li className='mb-0.5 text-slate-50'>Demos</li>
              </Link>
              <Link to={'/coming-soon'} className=' no-underline hover:opacity-80 transition duration-200'>
                <li className='mb-0.5 text-slate-50'>Documentation</li>
              </Link>
              <Link to={'/maintenance'} className=' no-underline hover:opacity-80 transition duration-200'>
                <li className='text-slate-50'>Support</li>
              </Link>
            </ul>
            <ul className='leading-8 tracking-wider'>
              <li className='font-semibold tracking-wide text-base mb-3'>Connect</li>
              <Link to={'https://www.instagram.com/'} className=' no-underline hover:opacity-80 transition duration-200'>
                <li className='mb-0.5 text-slate-50'>Instagram</li>
              </Link>
              <Link to={'https://www.pinterest.com/'} className=' no-underline hover:opacity-80 transition duration-200'>
                <li className='mb-0.5 text-slate-50'>Pinterest</li>
              </Link>
              <Link to={'https://twitter.com/'} className=' no-underline hover:opacity-80 transition duration-200'>
                <li className='text-slate-50'>Twitter</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className='text-sm pt-5'
          style={{ paddingLeft: '71.5px', paddingBottom: '38px', fontFamily: 'revert-layer' }}>
          <p className='pl-0.5 tracking-wide font-semibold'
            style={{ width: '94%', borderTop: '1px solid lightgray', paddingTop: '28px' }}>
            © 2023 Style & Wit - All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FooterShop