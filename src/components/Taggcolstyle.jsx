import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { LiaBookmarkSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'

//import '../components/styles/style.css'

const Taggcol_style = ({ img, title, text, img_author, author, date }) => {
    return (
        <div className='rounded-lg shadow-md shadow-zinc-200 pb-4 cursor-pointer
                         hover:bg-gray-50 hover:shadow-2xl transition ease-in-out duration-200'
            style={{ width: '365px', marginTop: '56px', fontFamily: 'serif'}} >
            <img src={img} alt={img} className='rounded-t-lg -mb-0.5' style={{ width: '365px', height: '420px' }} />
            <p className='ml-8 mt-6 font-medium leading-8' style={{ color: '#302e2e', width: '330px', fontSize: '28px' }}>
                {title}
            </p>
            <p className='w-80 ml-8 mt-3.5 text-sm tracking-widest leading-5 text-gray-600' 
                style={{width: '340px'}}>
                {text}
            </p>
            <div className='flex text-sm ml-8 mt-4'>
                <div className='rounded-full border-stone-600 -mt-2.5 mr-2'
                    style={{ width: '38px', height: '38px', borderWidth: '1px' }}>
                    <img className=' p-0.5 rounded-full'
                        style={{ width: '36px', height: '36px' }}
                        src={img_author} alt={img_author} />
                </div>
                <p className='mr-3.5 text-zinc-500 font-medium '> {author}</p>
                <LiaBookmarkSolid className='mr-1 mt-0.5 w-5 h-4 text-zinc-600 ' />
                <p className='text-zinc-500 font-medium tracking-tight'>1 min Read</p>
            </div>
            <Link to={'/cover'} className='no-underline'>
                <div className='flex text-sm ml-8 mt-4 text-slate-900 '>
                    <p className='font-bold tracking-wider hover:text-stone-700 font-sans' 
                        style={{ fontSize: '14.5px' }}>
                        READ MORE
                    </p>
                    <MdOutlineKeyboardArrowRight className='font-bold ml-1 -mt-0.5 w-6 h-6 text-slate-700 hover:text-stone-700' />
                </div>
            </Link>
        </div>
    )
}

export default Taggcol_style