import React from 'react'
import { Link } from 'react-router-dom'

const Author = ({ img, author, text, icon1, icon2, icon3, icon4, icon5 }) => {
    return (
        <div className='flex mt-3 text-start h-64 rounded-lg bg-white'
            style={{ fontFamily: 'sans-serif', border: '1px solid lightgrey', width: '750px', height: '286px' }}>
            <div className='border-2 border-blue-950 rounded-full'
                style={{ width: '137px', height: '137px', marginTop: '75px', marginLeft: '22px' }}>
                <img className=' pt-1 pl-1 pr-0.5 rounded-full'
                    style={{ width: '129px', height: '129px' }}
                    src={img} alt={img} />
            </div>
            <div style={{ width: '580px', marginLeft: '22px' }}>
                <p className=' text-zinc-600 font-semibold tracking-widest'
                    style={{ fontSize: '11px', marginTop: '55px' }}>
                    WRITTEN BY
                </p>
                <h4 className='font-sans tracking-wide font-semibold hover:text-zinc-600 text-blue-900'
                    style={{ fontSize: '26px', marginTop: '-13px' }}>{author}</h4>
                <p className='text-stone-700' style={{ fontSize: '15.4px', marginTop: '18px', width: '450px' }}>
                    {text}
                </p>
                <div className='flex ml-4' style={{ marginTop: '30px' }}>
                    <Link to={'/'} className='w-6 h-6 mr-6 text-stone-700 hover:text-indigo-900 
                            transition ease-in-out duration-200'>
                        {icon1}
                    </Link>
                    <Link to={'https://www.facebook.com/'} className='w-6 h-6 mr-6 text-stone-700 hover:text-indigo-900 
                            transition ease-in-out duration-200'>
                        {icon2}
                    </Link>
                    <Link to={'https://twitter.com/'} className='w-6 h-6 mr-6 text-stone-700 hover:text-indigo-900 
                            transition ease-in-out duration-200'>
                        {icon3}
                    </Link>
                    <Link to={'https://vimeo.com/'} className='w-6 h-6 mr-6 text-stone-700 hover:text-indigo-900 
                            transition ease-in-out duration-200'> {
                        icon4}
                    </Link>
                    <Link className='w-6 h-6 text-stone-700 hover:text-indigo-900 
                            transition ease-in-out duration-200'>
                        {icon5}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Author