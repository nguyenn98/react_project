import React from 'react'
import ad300x300 from '../page/img/ad300x300.png'
import ad300x600 from '../page/img/ad300x600.png'

const Advertisement = () => {
    return (
        <div>
            <p className='font-bold tracking-wider text-sm text-zinc-600'
                style={{ fontFamily: 'sans-serif' }}>SEARCH</p>
            <div className='flex items-center -mt-1.5 shadow-sm rounded'
                style={{ border: '1px solid lightgrey', width: '332px', height: '50px' }}>
                <input className='w-52 ml-3 box-border bg-white focus:outline-none' />
                <button className='ml-10 mr-1.5 text-center text-slate-50 rounded text-sm font-medium pb-0.5'
                    style={{ backgroundColor: '#312e81', width: '64px', height: '34px' }}>
                    Search
                </button>
            </div>
            <img src={ad300x300} alt={ad300x300} style={{ marginTop: '31.5px' }} />
            <img src={ad300x600} alt={ad300x600} style={{ marginTop: '39px' }} />
        </div>
    )
}

export default Advertisement