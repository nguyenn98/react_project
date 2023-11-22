import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ad300x300 from '../page/img/ad300x300.png'
import ad300x600 from '../page/img/ad300x600.png'

const Advertisement = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const navigate = useNavigate()
    function handleChange(e) {
        setSearchQuery(e.target.value)
    }
    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            let url = searchQuery.toLowerCase().split(" ")
            if (url.length > 1) {
                url = url.join("-")
            }
            navigate(`/${url}`)
        }
    }
    function handleClick(){
        let url = searchQuery.toLowerCase().split(" ")
        if (url.length > 1){
            url.join("-")
        }
        navigate(`/${url}`)
    }
    return (
        <div>
            <p className='font-bold tracking-wider text-sm text-zinc-600 dark:text-slate-100'
                style={{ fontFamily: 'sans-serif' }}>SEARCH</p>
            <div className='flex items-center -mt-1.5 shadow-sm rounded'
                style={{ border: '1px solid lightgrey', width: '332px', height: '50px' }}>
                <input className='w-52 ml-3 box-border dark:bg-neutral-900 bg-[rgb(254,254,254)] focus:outline-none
                        dark:text-slate-50 '
                        value={searchQuery}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown} 
                />
                <button className='ml-10 mr-1.5 text-center dark:hover:text-[rgb(12,12,12)] text-slate-50
                        rounded text-sm font-medium pb-0.5 dark:bg-[#535199] dark:hover:bg-slate-50 
                        bg-indigo-900 hover:bg-stone-950 transition duration-300 ease-in-out'
                    style={{ width: '64px', height: '34px' }}
                    onClick={handleClick}>
                    Search
                </button>
            </div>
            <img src={ad300x300} alt={ad300x300} style={{ marginTop: '31.5px' }} />
            <img src={ad300x600} alt={ad300x600} style={{ marginTop: '39px' }} />
        </div>
    )
}

export default Advertisement