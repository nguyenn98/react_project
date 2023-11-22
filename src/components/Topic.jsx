import React from 'react'

import { IoMdTime } from 'react-icons/io'
import { LiaBookmarkSolid } from 'react-icons/lia'
import { BsBarChartFill } from 'react-icons/bs'

const Topic = ({color, headertitle, title, text, img, author, date, view }) => {
    return (
        <div className='z-50 mt-7 text-center' 
            style={{ marginLeft: '90px', width: '70%'}} >
            <button className='ml-[22.5px] tracking-[0.06rem] w-[127px] h-[42px] pb-[1px] dark:bg-slate-100 
                dark:text-[#535199] text-indigo-900 dark:hover:text-stone-500 hover:text-stone-700 
                font-bold shadow-sm rounded-full transition-colors duration-200'
                style={{ fontSize: '14.4px' }}>
                {headertitle}
            </button>
            <h1 className='tracking-wide dark:text-slate-100 text-stone-900 font-semibold mt-4'
                style={{ color: color, fontSize: '41px', fontFamily: 'sans-serif', width: '800px', lineHeight: '55px' }}>
                {title}
            </h1>
            <p className='tracking-wide dark:text-stone-300 dark:opacity-80 text-zinc-600 ml-28'
                style={{ color: color, width: '560px', fontSize: '18.5px', marginTop: '23px' }}>
                {text}
            </p>
            <div className='flex text-sm mt-10' style={{ marginLeft: '100px', width: '700px' }}>
                <div className='rounded-full w-10 h-10 p-0.5 border-[1px] border-solid border-indigo-900 dark:border-indigo-100'>
                    <img className='rounded-full' src={img} alt={img} />
                </div>
                <p className='dark:text-slate-300 text-zinc-600 font-medium tracking-wider mt-2 ml-2'
                    style={{ color: color, fontSize: '14px' }}>
                    {author}
                </p>
                <IoMdTime className='ml-3.5 mr-1 mt-2.5 w-5 h-4 dark:text-slate-300 text-zinc-700 ' style={{color: color}} />
                <p className='dark:text-slate-300 text-zinc-600 font-medium mt-2 ml-0.5 mr-2' style={{ color: color }}>
                    {date}
                </p>
                <p className='py-1.5 px-2 mt-0.5 ml-2.5 rounded dark:text-slate-300 text-zinc-600 tracking-wide font-semibold'
                    style={{ color: color, border: '1px solid lightgray', fontSize: '12px' }}>
                    Updated
                </p>
                <LiaBookmarkSolid className='ml-3.5 mr-1 mt-2 w-5 h-5 dark:text-slate-300 text-stone-700' style={{color: color}}  />
                <p className='dark:text-slate-300 text-zinc-600 mt-2 font-semibold'
                    style={{ color: color, fontSize: '14.4px' }}>
                    1 min Read
                </p>
                <BsBarChartFill className='ml-4 dark:text-slate-300 text-stone-700' style={{ marginTop: '11px', color: color }} />
                <p className='mt-2 ml-2 dark:text-slate-300 text-stone-600 tracking-wide' style={{ color: color }}>
                    {view} Views
                </p>
            </div>
        </div>
    )
}

export default Topic