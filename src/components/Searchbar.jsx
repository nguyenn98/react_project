import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { FaPinterestP } from 'react-icons/fa'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

const searchbar = () => {
    return (
        <div>
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
        </div>
    )
}

export default searchbar