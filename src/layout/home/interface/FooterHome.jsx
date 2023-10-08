import React from 'react'
import inertia from '../images/inertia.png'

const FooterHome = () => {
  return (
    <div>
      <div className='flex pt-16 shadow-2xl shadow-stone-700'
        style={{ height: '427px', fontFamily: 'revert-layer'}}>
        <div className='tracking-wide mt-1' style={{ width: '440px', marginLeft: '75px', }}>
          <img src={inertia} alt={inertia} className=' h-10 mb-7' style={{ width: '133px' }} />
          <p className='text-sm text-slate-600 mt-4' style={{ lineHeight: '21px' }}>
            Inertia is a premium multiuse wordpress theme made for magazines, blogs and creators.
          </p>
          <p className='text-zinc-600 mb-5' style={{ lineHeight: '22px', marginTop: '22px', fontSize: '14.2px' }}>
            Lightweight wordpress theme, SEO-Optimized,  Providing blazing fast performance and speed. In addition to being accessibility-compliant theme and loaded with features with more that 100 options to provide maximum flexibility to users.
          </p>
          <ul className='flex justify-start -mt-1.5 -ml-8 font-semibold'
            style={{ color: '#5b5959', fontSize: '14.4px' }}>
            <li className='mr-7'>ABOUT US</li>
            <li className='mr-7'>SERVICES</li>
            <li className='mr-7'>SHOP</li>
            <li>CONTACT US</li>
          </ul>
        </div>
        <ul className='ml-32 col-2 tracking-wide text-sm leading-8 text-stone-600'>
          <li className='font-semibold tracking-wider text-base mb-3 text-stone-950'>Features</li>
          <li className='mb-0.5'>Author Page</li>
          <li className='mb-0.5'>Search Page</li>
          <li className='mb-0.5'>Category Page</li>
          <li className='mb-0.5'>Services</li>
          <li className='mb-0.5'>About</li>
          <li className='mb-0.5'>Page Markup</li>
          <li className='mb-0.5'>Fullwidth Page</li>
          <li className='mb-0.5'>Aligned Page</li>
          <li className='mb-0.5'>Error Page</li>
          <li>Contact Us</li>
        </ul>
        <div className='col-3 tracking-wider text-sm text-stone-600' style={{ marginLeft: '97.5px' }}>
          <ul className='mb-8 leading-8'>
            <li className='font-semibold tracking-wide text-base mb-3 text-stone-950'>Shop</li>
            <li className='mb-0.5'>Shop Demo</li>
            <li className='mb-0.5'>Cart</li>
            <li>Checkout</li>
          </ul>
          <ul className='leading-8 tracking-wider'>
            <li className='font-semibold tracking-wide text-base mb-3 text-stone-950'>Inertia Theme</li>
            <li className='mb-0.5'>Home</li>
            <li className='mb-0.5'>Buy Theme</li>
            <li className='mb-0.5'>Demos</li>
            <li className='mb-0.5'>Documentation</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
      <div className='bg-white text-sm pt-5' 
          style={{paddingLeft: '71.5px', paddingBottom: '38px', fontFamily: 'revert-layer'}}>
        <p className='pl-0.5 text-zinc-700 tracking-wide font-semibold' 
            style={{width: '94%',  borderTop: '1px solid lightgray', paddingTop: '28px' }}>
            © 2022 Inertia Wordpress Theme, MNMLD - All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default FooterHome