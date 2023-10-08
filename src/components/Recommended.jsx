import React from 'react'

const Recommended = ({img1, img2, img3, title1, title2, title3, text1, text2, text3}) => {
    return (
        <div style={{ borderTop: '1px solid lightgray', marginTop: '38.2px', height: '630px' }}>
            <h2 className='font-semibold text-black text-4xl tracking-normal mt-12'
                style={{ marginLeft: '35.53%' }}>Recommended for You</h2>
            <div className='text-center mt-16 flex' style={{ width: '89%', marginLeft: '74px'}} >
                <div className=' mr-6 cursor-pointer' style={{ width: '387px', height: '390px' }}>
                    <img src={img1} alt={img1} style={{ width: '387px', height: '255px' }}/>
                    <h5 className='mt-4 font-semibold text-zinc-700 ml-5 leading-7'
                        style={{ fontSize: '20px', fontFamily: 'sans-serif', width: '338px' }}>{title1}</h5>
                    <p className='text-center mt-3 text-sm tracking-wider text-zinc-500'>{text1}</p>
                </div>

                <div className=' mr-6 cursor-pointer' style={{ width: '387px', height: '390px' }}>
                    <img src={img2} alt={img2} style={{ width: '387px', height: '255px' }}/>
                    <h5 className='mt-4 font-semibold text-zinc-700 ml-5 leading-7'
                        style={{ fontSize: '20px', fontFamily: 'sans-serif', width: '338px'}}>{title2}</h5>
                    <p className='text-center mt-3 text-sm tracking-wider text-zinc-500'>{text2}</p>
                </div>

                <div className='cursor-pointer' style={{ width: '387px', height: '390px' }}>
                    <img src={img3} alt={img3} style={{ width: '387px', height: '255px' }}/>
                    <h5 className='mt-4 font-semibold text-zinc-700 ml-5 leading-7'
                        style={{ fontSize: '20px', fontFamily: 'sans-serif', width: '338px' }}>{title3}</h5>
                    <p className='text-center mt-3 text-sm tracking-wider text-zinc-500'>{text3}</p>
                </div>
            </div>
        </div>
    )
}

export default Recommended