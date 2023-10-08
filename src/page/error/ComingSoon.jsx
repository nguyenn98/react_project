import React from 'react'

import coming_soon from '../img/coming_soon.png'

import { FaHome, FaRss } from 'react-icons/fa'

const ComingSoon = ({ img }) => {

  return (
    <div>
      {img ?
        (
          <div className='flex items-center'>
            <img style={{ height: '100vh', width: '36%' }} src={coming_soon} alt={coming_soon} />
            <div className='ml-24 -mt-4'>
              <h1 className='text-black font-bold' style={{ fontSize: '56px' }}> inertia </h1>
              <h1 className='text-black font-semibold' style={{ fontSize: '42px' }}> Coming Soon </h1>
              <p className='font-medium text-stone-800'>Website is currently under construction. Check back soon.</p>
              <div className='flex'>
                <FaHome className='w-5 h-5 mr-6' />
                <FaRss className='w-5 h-5' />
              </div>
            </div>
          </div>) :
        (
          <div className='ml-24 mt-52'>
            <h1 className='text-black font-bold pb-4 -mt-1' style={{ fontSize: '56px' }}> inertia </h1>
            <h1 className='text-black font-semibold tracking-wide -ml-3 mb-4 mt-2.5' style={{ fontSize: '42px' }}> Maintenance </h1>
            <p className='font-medium text-stone-800 -ml-3 -mt-1'>Website is currently undergoing maintenance.</p>
            <p className='font-medium text-stone-800 -ml-3'>Please come back later.</p>
          </div>)
      }
    </div>

  )
}

export default ComingSoon