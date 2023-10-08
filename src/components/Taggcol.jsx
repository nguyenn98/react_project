import React from 'react'
import { IoMdTime } from 'react-icons/io'
import { LiaBookmarkSolid } from 'react-icons/lia'

const Taggcol = ({ img, title, text, author, date }) => {
    return (
        <div className='rounded-lg shadow-md shadow-zinc-200 pb-4 cursor-pointer
        hover:bg-gray-50 hover:shadow-2xl transition ease-in-out duration-300'
            style={{ width: '388px', marginTop: '56px'}}>
            <img src={img} alt={img} className='rounded-t-lg -mb-0.5' style={{width:'388px', height:'260px'}} />
            <p className='ml-8 mt-6 text-2xl font-medium tracking-wide text-gray-800 hover:text-indigo-900' style={{width: '330px' }}>
                {title}
            </p>
            <p className='w-80 ml-8 mt-3.5 text-sm leading-5 text-gray-600'>
                {text}
            </p>
            <div className='flex text-sm ml-8 mt-4'>
                <p className='mr-3.5 text-zinc-500 font-medium tracking-tight'>By {author}</p>
                <IoMdTime className='mr-1 mt-0.5 w-5 h-4 text-zinc-500 ' />
                <p className='text-zinc-500 font-medium tracking-tight'>{date}</p>
            </div>
            <div className='flex text-sm ml-7 -mt-0.5'>
                <LiaBookmarkSolid className='mr-1 mt-0.5 w-5 h-4 text-zinc-600' />
                <p className='tracking-tight text-stone-500 font-medium'>1 min Read</p>
            </div>
        </div>

    )
}

export default Taggcol