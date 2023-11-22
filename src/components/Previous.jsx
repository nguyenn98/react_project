import React from 'react'

const Previous = ({ img1, img2, title1, title2, text1, text2, none }) => {
    return (
        <div className='mt-5 flex' style={{ width: '750px' }}>
            <div className='flex cursor-pointer' style={{ width: '51%' }}>
                <img className='rounded-lg object-cover hover:opacity-90 transition-opacity duration-300' 
                    style={{ width: '119px', height: '120px' }} 
                    src={img1} alt={img1} />
                <div className=' ml-3.5'>
                    <p className='font-semibold tracking-widest dark:text-stone-400 text-stone-500'
                        style={{ fontSize: '11.5px' }}>{title1}</p>
                    <p className='w-60 font-semibold font-sans tracking-wide dark:text-stone-300 
                        text-stone-950 dark:hover:text-[#535199] leading-6 transition-colors duration-300'
                        style={{ fontSize: '15px' }}>{text1}</p>
                </div>
            </div>

            <div className='flex text-end cursor-pointer' style={{ width: '50%', display: none }}>
                <div className=' mr-3.5'>
                    <p className='font-semibold tracking-widest dark:text-stone-400 text-stone-500'
                        style={{ fontSize: '11.5px' }}>{title2}</p>
                    <p className='w-60 font-semibold font-sans tracking-wide dark:text-stone-300
                        text-stone-950 dark:hover:text-[#535199] leading-6 transition-colors duration-300'
                        style={{ fontSize: '15px' }}>{text2}</p>
                </div>
                <img className='rounded-lg object-cover hover:opacity-90 transition-opacity duration-300' style={{ width: '119px', height: '120px' }} 
                    src={img2} alt={img2} />
            </div>
        </div>
    )
}

export default Previous