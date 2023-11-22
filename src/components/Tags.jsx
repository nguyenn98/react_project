import react from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import green_tick_2 from '../page/img/green_tick_2.png'

const Tags = ({ text1, text2, text3, text4, text5 }) => {
    // const [isHover1, setIsHover1] = useState(false);
    // const [isHover2, setIsHover2] = useState(false);
    // const [isHover3, setIsHover3] = useState(false);
    // const [isHover4, setIsHover4] = useState(false);
    // const [isHover5, setIsHover5] = useState(false);

    const [inp, setInp] = useState('')
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState()
    
    function handleClick() {
        if (inp.length === 0) {
            setErr('Please input your email!')
        }
        else if (!inp.includes('@gmail.com')) {
            setErr('Email is not in correct format!')
        }
        else if (!(/[a-zA-Z]/.test(inp))) {
            setErr('Email at least one charater (A-Z/a-z)!')
        }
        else if (!(/[0-9]/.test(inp))) {
            setErr('Email requires at least one number (0-9)!')
        }
        else if ((/[0-9]/.test(inp[0]))) {
            setErr('The first position must not be a number!')
        }
        else {
            setSuccess('Successfully registered.')
        }
        setInp('')
    }
    function offError() {
        setErr('')
        setSuccess('')
    }
    return (
        <div>
            <div className=' mt-16 '>
                <h6 className='dark:text-slate-200 font-semibold tracking-wider' style={{ fontSize: '15.4px' }}>
                    TAGS
                </h6>
                <div style={{ marginTop: '19px' }}>
                    <button className='h-10 mr-2 text-sm tracking-wider font-medium rounded-xl shadow-md dark:text-opacity-80
                        dark:text-slate-200 text-stone-600 dark:hover:text-neutral-900 hover:text-zinc-50 
                        dark:font-semibold dark:bg-[#1a1a1a] bg-[rgb(244,244,245)] dark:hover:bg-[#716ebe] hover:bg-[#312e81] 
                        transition ease-in-out duration-300 '
                        style={{
                            fontSize: '13.5px',
                            width: '100px'
                        }}
                    // onMouseEnter={() => setIsHover1(true)}
                    // onMouseLeave={() => setIsHover1(false)}
                    >
                        {text1}
                    </button>
                    <button className='w-28 h-10 mr-2 text-sm tracking-wider font-medium rounded-xl shadow-md dark:text-opacity-80
                        dark:text-slate-200 text-stone-600 dark:hover:text-neutral-900 hover:text-zinc-50 
                        dark:font-semibold dark:bg-[#1a1a1a] bg-[rgb(244,244,245)] dark:hover:bg-[#716ebe] hover:bg-[#312e81] 
                        transition ease-in-out duration-300'
                        style={{
                            fontSize: '13.5px',
                            width: '100px'
                        }}
                    // onMouseEnter={() => setIsHover2(true)}
                    // onMouseLeave={() => setIsHover2(false)}
                    >
                        {text2}
                    </button>
                    <button className='w-28 h-10 mr-2 text-sm tracking-wider font-medium rounded-xl shadow-md dark:text-opacity-80 
                        dark:text-slate-200 text-stone-600 dark:hover:text-neutral-900 hover:text-zinc-50 
                        dark:font-semibold dark:bg-[#1a1a1a] bg-[rgb(244,244,245)] dark:hover:bg-[#716ebe] hover:bg-[#312e81] 
                        transition ease-in-out duration-300'
                        style={{
                            fontSize: '13.5px',
                            width: '100px'
                        }}
                    // onMouseEnter={() => setIsHover3(true)}
                    // onMouseLeave={() => setIsHover3(false)}
                    >
                        {text3}
                    </button>
                    <button className='w-28 h-10 mr-2 text-sm tracking-wider font-medium rounded-xl shadow-md dark:text-opacity-80 
                        dark:text-slate-200 text-stone-600 dark:hover:text-neutral-900 hover:text-zinc-50 
                        dark:font-semibold dark:bg-[#1a1a1a] bg-[rgb(244,244,245)] dark:hover:bg-[#716ebe] hover:bg-[#312e81] 
                        transition ease-in-out duration-300'
                        style={{
                            fontSize: '13.5px',
                            width: '100px'
                        }}
                    // onMouseEnter={() => setIsHover4(true)}
                    // onMouseLeave={() => setIsHover4(false)}
                    >
                        {text4}
                    </button>
                    <button className='w-28 h-10 mr-2 text-sm tracking-wider font-medium rounded-xl shadow-md dark:text-opacity-80 
                        dark:text-slate-200 text-stone-600 dark:hover:text-neutral-900  hover:text-zinc-50 
                        dark:font-semibold dark:bg-[#1a1a1a] bg-[rgb(244,244,245)] dark:hover:bg-[#716ebe] hover:bg-[#312e81] 
                        transition ease-in-out duration-300'
                        style={{
                            fontSize: '13.5px',
                            width: '110px'
                        }}
                    // onMouseEnter={() => setIsHover5(true)}
                    // onMouseLeave={() => setIsHover5(false)}
                    >
                        {text5}
                    </button>
                </div>
            </div>
            <div className='mt-10 text-center h-64 rounded-xl dark:bg-opacity-95 dark:bg-neutral-950 bg-[rgb(254,254,254)]
                border-[1px] border-solid border-[lightgrey] dark:border-neutral-800'
                style={{ fontFamily: 'sans-serif', width: '750px', height: '240px' }}>
                <h3 className='mt-[54px] dark:text-slate-100 text-stone-950 font-semibold tracking-wider' style={{ fontSize: '26px' }}>
                    {!success ? 'Sign up for our newsletter' : 'Welcome to Begodi'}
                </h3>
                <p className='mt-3 dark:text-slate-200 text-stone-900 font-medium tracking-wider' style={{ fontSize: '15px' }}>
                    Subscribe to get the latest updates weekly. 100% Free.
                </p>

                {
                    !success ?
                        <div>
                            <form target="_blank" 
                                className='flex items-center mt-4 ml-24 pl-0.5 dark:bg-neutral-950 bg-[rgb(254,254,254)]'
                                onSubmit={(event) => { event.preventDefault() }} >
                                <input className='h-12 pt-0.5 pl-3 box-border dark:bg-neutral-950 bg-[rgb(254,254,254)] 
                                    dark:text-slate-100 focus:outline-none tracking-wide shadow-sm rounded'
                                    style={{ fontSize: '15.5px', border: '1px solid lightgrey', width: '430px' }} placeholder='Enter your email address'
                                    type='email' value={inp}
                                    onChange={(e) => setInp(e.target.value)}
                                    onClick={offError} />
                                <button className='ml-3 mr-1.5 text-center dark:hover:text-neutral-900 text-slate-50 dark:bg-[#535199]
                                        dark:hover:bg-slate-100 bg-indigo-900 hover:bg-neutral-950 rounded-md text-sm font-semibold
                                        tracking-widest pb-0.5 transition ease-in-out duration-300'
                                    style={{ width: '120px', height: '48px' }}
                                    onClick={handleClick}>
                                    SUBCRIBE
                                </button>
                            </form>
                            <p className='text-[14.5px] text-start dark:text-red-600 text-red-700 mt-2.5 ml-[105px] h-4'>{err}</p>
                        </div> :

                        <div className='flex ml-56 mt-3'>
                            <img className='w-12 h-12 rounded-3xl' src={green_tick_2} alt={green_tick_2} />
                            <h5 className='dark:text-success text-success font-semibold mt-2.5 ml-[10px] h-4'>
                                {success}
                            </h5>
                        </div>
                }

            </div>
        </div>
    )
}

export default Tags