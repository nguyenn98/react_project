import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Tags = ({ text1, text2, text3, text4, text5 }) => {
    const [isHover1, setIsHover1] = useState(false);
    const [isHover2, setIsHover2] = useState(false);
    const [isHover3, setIsHover3] = useState(false);
    const [isHover4, setIsHover4] = useState(false);
    const [isHover5, setIsHover5] = useState(false);

    return (
        <div>
            <div className=' mt-16 '>
                <h6 className='font-semibold tracking-wider' style={{ fontSize: '15.4px' }}>
                    TAGS
                </h6>
                <div style={{ marginTop: '19px' }}>
                    <button className='h-10 mr-2 text-sm tracking-wider font-medium rounded-xl text-stone-600 hover:text-zinc-50 bg-zinc-100 transition ease-in-out duration-300'
                        //style={isHover1 === true ? {backgroundColor: '#312e81'} : {backgroundColor: 'rgb(244 244 245 / var(--tw-bg-opacity))'}}
                        style={{
                            backgroundColor: isHover1 === true ? '#312e81' : 'rgb(244 244 245 / var(--tw-bg-opacity))',
                            fontSize: '13.5px',
                            width: '100px'
                        }}
                        onMouseEnter={() => setIsHover1(true)}
                        onMouseLeave={() => setIsHover1(false)}
                    >
                        {text1}
                    </button>
                    <button className='w-28 h-10 mr-2 text-sm tracking-wider font-medium rounded-xl text-stone-600 hover:text-zinc-50 bg-zinc-100 transition ease-in-out duration-300'
                        style={{
                            backgroundColor: isHover2 === true ? '#312e81' : 'rgb(244 244 245 / var(--tw-bg-opacity))',
                            fontSize: '13.5px',
                            width: '100px'
                        }}
                        onMouseEnter={() => setIsHover2(true)}
                        onMouseLeave={() => setIsHover2(false)}>
                        {text2}
                    </button>
                    <button className='w-28 h-10 mr-2 text-sm tracking-wider font-medium rounded-xl text-stone-600 hover:text-zinc-50 bg-zinc-100 transition ease-in-out duration-300'
                        style={{
                            backgroundColor: isHover3 === true ? '#312e81' : 'rgb(244 244 245 / var(--tw-bg-opacity))',
                            fontSize: '13.5px',
                            width: '100px'
                        }}
                        onMouseEnter={() => setIsHover3(true)}
                        onMouseLeave={() => setIsHover3(false)}>
                        {text3}
                    </button>
                    <button className='w-28 h-10 mr-2 text-sm tracking-wider font-medium rounded-xl text-stone-600 hover:text-zinc-50 bg-zinc-100 transition ease-in-out duration-300'
                        style={{
                            backgroundColor: isHover4 === true ? '#312e81' : 'rgb(244 244 245 / var(--tw-bg-opacity))',
                            fontSize: '13.5px',
                            width: '100px'
                        }}
                        onMouseEnter={() => setIsHover4(true)}
                        onMouseLeave={() => setIsHover4(false)}>
                        {text4}
                    </button>
                    <button className='w-28 h-10 mr-2 text-sm tracking-wider font-medium rounded-xl text-stone-600 hover:text-zinc-50 bg-zinc-100 transition ease-in-out duration-300'
                        style={{
                            backgroundColor: isHover5 === true ? '#312e81' : 'rgb(244 244 245 / var(--tw-bg-opacity))',
                            fontSize: '13.5px',
                            width: '110px'
                        }}
                        onMouseEnter={() => setIsHover5(true)}
                        onMouseLeave={() => setIsHover5(false)}>
                        {text5}
                    </button>
                </div>
            </div>
            <div className='mt-10 text-center h-64 rounded-lg bg-white'
                style={{ fontFamily: 'sans-serif', border: '1px solid lightgrey', width: '750px', height: '230px' }}>
                <h3 className='mt-5 text-stone-950 font-semibold tracking-wider' style={{ fontSize: '26px' }}>Sign up for our newsletter</h3>
                <p className='mt-3 text-stone-900 font-medium tracking-wider' style={{ fontSize: '15px' }}>Subscribe to get the latest updates weekly. 100% Free.</p>
                <Link to={'/wide'} className='no-underline'>
                    <form /* action="http://localhost:3000/" method="post" */ target="_blank"
                        className='flex items-center mt-4 ml-24 pl-0.5 bg-white'>
                        <input className='h-12 pt-0.5 pl-3 box-border bg-white focus:outline-none tracking-wide shadow-sm rounded'
                            style={{ fontSize: '15.5px', border: '1px solid lightgrey', width: '430px' }} placeholder='Enter your email address' type='email' />
                        <button className='ml-3 mr-1.5 text-center text-slate-50 bg-indigo-900 hover:bg-neutral-950
                                         rounded-md text-sm font-semibold tracking-widest pb-0.5 transition ease-in-out duration-200'
                            style={{ width: '120px', height: '48px' }}>
                            SUBCRIBE
                        </button>
                    </form>
                </Link>
            </div>
        </div>
    )
}

export default Tags