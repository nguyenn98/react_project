import React from 'react'

const Bluebg = ({ text, type }) => {
    return (
        <div className='text-slate-50 dark:text-slate-100 bg-[#312e81] dark:bg-[#4f4d92]'
            style={{ height: '340px' }}>
            <div className='text-center pt-32' style={{ fontFamily: 'inherit' }}>
                <p className='tracking-widest -mb-1.5 mt-0.5 font-semibold text-slate-200' style={{ fontSize: '13.8px' }}>
                    POSTS TAGGED
                </p>
                <b className='font-bold tracking-wide ml-0.5' style={{ fontSize: '42px' }}>{text}</b>
            </div>
        </div>
    )
}

export default Bluebg