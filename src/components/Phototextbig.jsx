import React from 'react'
import '../components/styles/style.css'

const Phototextbig = ({ link, text, title }) => {
    return (
        <div className='photo-text text-white cursor-pointer hover:opacity-95 
            transition-opacity duration-300 ease-in-out'
            style={{
                backgroundImage: link,
                height: '400px', 
            }}>
            <div className='text-center' style={{ width: '530px', marginTop: '130px' }}>
                <p className='text-xs tracking-widest font-semibold mt-1'>{text}</p>
                <h2 className='tracking-wide mt-6' style={{ fontSize: '30px' }}>{title}</h2>
            </div>
        </div>
    )
}

export default Phototextbig