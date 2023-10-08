import React from 'react'

const Bluebg = ({ text, type }) => {
    return (
        <div className='text-white'
            style={{ height: '340px', backgroundColor: '#312e81' }}>
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