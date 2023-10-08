import React from 'react'

// import about_me from '../img/about_me.png'
import { BsQuote } from 'react-icons/bs'

import '../styles/style.css'

const AboutPageTwo = () => {
    return (
        <div style={{ backgroundColor: '#fffefc' }}>
            <div className='image-about' style={{ width: '100%', height: '610px' }}>
                <h1 className='text-center text-5xl text-slate-50' style={{ width: '50%' }}>
                    About Us
                </h1>
            </div>
            <div className='mt-8' style={{ width: '70%', marginLeft: '302px' }} >
                <p className='ml-2.5 font-medium text-stone-700 tracking-wide leading-7'
                    style={{ fontSize: '16.5px', fontFamily: 'sans-serif', width: '72%' }}>
                    Right perfected would feel remember large hotel is attempt. Right clothes, them.
                    One commas, war, hills much to ruining soon the how she has, with gain, human herself
                    floundering arduous he’d do palace accept a his who anchors but with a of show epic lift
                    the to can attention small.
                </p>
                <div className='flex justify-start mt-28'>
                    <h2 className='text-4xl text-stone-950 font-semibold mb-4'
                        style={{ width: '300px' }}>
                        Our Mission
                    </h2>
                    <div className='ml-20'>
                        <div>
                            <h4 className='text-3xl mb-3'>Long term strategy</h4>
                            <p className='font-medium text-stone-700 tracking-wide leading-7'
                                style={{ fontSize: '16.5px', fontFamily: 'sans-serif', width: '540px' }}>
                                Met gradually two client refinements. Royal to another all if, fly dressed and
                                of maybe function. Stash should ruining me rationalize to the as seven there
                                leaves long a anchors empire alphabet confidence
                            </p>
                        </div>
                        <div>
                            <h4 className='text-3xl'>Client Satisfaction</h4>
                            <p className='font-medium text-stone-700 tracking-wide leading-7'
                                style={{ fontSize: '16.5px', fontFamily: 'sans-serif', width: '540px' }}>
                                Met gradually two client refinements. Royal to another all if, fly dressed and
                                of maybe function. Stash should ruining me rationalize to the as seven there
                                leaves long a anchors empire alphabet confidence
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-24' style={{ width: '50%', marginLeft: '25%' }}>
                <h2 className='-ml-4' style={{ fontSize: '36px' }}>Testimonials</h2>
                <BsQuote className='w-10 h-10 text-indigo-900 mt-5' style={{ marginLeft: '300px' }} />
                <p className='font-semibold text-stone-700 tracking-wider leading-7 mt-3.5'
                    style={{ fontSize: '22px', fontFamily: 'sans-serif', width: '540px', marginLeft: '60px' }}>
                    Your Quality is top notch
                </p>
                <p className='font-semibold text-indigo-900 tracking-wider leading-7 mt-4'
                    style={{ fontSize: '16px', fontFamily: 'sans-serif', width: '540px', marginLeft: '60px' }}>– Loyal Customer</p>
                <p className='font-medium text-stone-700 tracking-wide leading-7 mt-5'
                    style={{ fontSize: '16.5px', fontFamily: 'sans-serif', width: '680px' }}>
                    Right perfected would feel remember large hotel is attempt. Right clothes, them. One
                    commas, war, hills much to ruining soon the how she has, with gain, human herself
                    floundering arduous he’d do palace accept a his who anchors but with a of show epic lift
                    the to can attention small.
                </p>
            </div>
            <div className='image-contact mt-7' style={{ height: '429px' }}>
                <h2 className='text-4xl text-slate-50 mt-24' style={{ fontFamily: 'cursive' }}>
                    Let’s Talk!
                </h2>
                <button className='w-36 h-14 -mt-44 rounded-3xl font-semibold text-lg text-black bg-white'>
                    Contact Us
                </button>
            </div>
        </div >
    )
}

export default AboutPageTwo