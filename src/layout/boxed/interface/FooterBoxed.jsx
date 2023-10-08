import React from 'react'
import inertia_white from '../../boxed/image/inertia_white.png'

const FooterBoxed = () => {
    return (
        <div className='bg-stone-900 text-slate-50'>
            <div className='flex pt-16 shadow-sm shadow-neutral-900'
                style={{ height: '427px', fontFamily: 'revert-layer' }}>
                <div className='tracking-wide mt-1' style={{ width: '440px', marginLeft: '75px', }}>
                    <img src={inertia_white} alt={inertia_white} className='mb-7'
                        style={{ width: '160px', height: '42px' }} />
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
                        <li className='mr-7'>ABOUT US</li>
                        <li className='mr-7'>SERVICES</li>
                        <li className='mr-7'>SHOP</li>
                        <li>CONTACT US</li>
                    </ul>
                </div>
                <ul className='ml-32 col-2 tracking-wide text-sm leading-8'>
                    <li className='font-semibold tracking-wider text-base mb-3'>Features</li>
                    <li className='mb-0.5'>Author Page</li>
                    <li className='mb-0.5'>Search Page</li>
                    <li className='mb-0.5'>Category Page</li>
                    <li className='mb-0.5'>Services</li>
                    <li className='mb-0.5'>About</li>
                    <li className='mb-0.5'>Page Markup</li>
                    <li className='mb-0.5'>Fullwidth Page</li>
                    <li className='mb-0.5'>Aligned Page</li>
                    <li className='mb-0.5'>Contact Us</li>
                    <li>Error Page</li>
                </ul>
                <div className='col-3 tracking-wider text-sm' style={{ marginLeft: '97.5px' }}>
                    <ul className='mb-8 leading-8'>
                        <li className='font-semibold tracking-wide text-base mb-3'>Inertia Theme</li>
                        <li className='mb-0.5'>Home</li>
                        <li className='mb-0.5'>Buy Theme</li>
                        <li className='mb-0.5'>Demos</li>
                        <li className='mb-0.5'>Documentation</li>
                        <li>Support</li>
                    </ul>
                    <ul className='leading-8 tracking-wider'>
                        <li className='font-semibold tracking-wide text-base mb-3'>Connect</li>
                        <li className='mb-0.5'>Instagram</li>
                        <li className='mb-0.5'>Pinterest</li>
                        <li>Twitter</li>

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
    )
}

export default FooterBoxed