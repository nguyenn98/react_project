import React from 'react'
import '../components/styles/style.css'

const Phototextsmall = ({ link, text, title }) => {
    return (
        <div className='photo-text text-white cursor-pointer hover:opacity-90
            transition-opacity duration-300 ease-in-out'
            style={{
                backgroundImage: link,
                height: '200px',
                width: '290px'
            }}>
            <div className='text-center' style={{width: '255px'}}>
                <p className='text-xs tracking-widest font-semibold mt-1'>{text}</p>
                <h2 className='tracking-wide mt-6 font-bold' style={{ fontSize: '17.5px' }}>{title}</h2>
            </div>
        </div>
    )
}

export default Phototextsmall