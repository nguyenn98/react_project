import React from 'react'

import { Link } from 'react-router-dom'

import { LuMeh } from 'react-icons/lu'

const ErrorPage = () => {
  return (
    <div>
        <div className='text-center mt-20'>
            <LuMeh className='w-24 h-24' style={{color: '#e42f65', marginLeft: '46.5%'}}/>
            <h1 className='text-5xl mt-9' style={{fontFamily: 'initial', fontSize: '51px'}}>Page Not Found</h1>
            <p className='mt-7 tracking-wide font-medium text-stone-600' 
                style={{width: '520px', fontSize: '16.7px', marginLeft: '430px'}}>
                The page you are looking for might have been removed, had its name changed, or is 
                temporarily unavailable.
            </p>
            <Link to={'/'}>
                <button className='mt-3 border-2 w-56 h-14 font-semibold pb-1 rounded-xl text-white bg-rose-600'>
                    BACK TO HOMEPAGE
                </button>
            </Link>
        </div>
    </div>
  )
}

export default ErrorPage