import React from 'react'

import { FaQuoteLeft } from 'react-icons/fa'

import image_caption from '../page/img/image_caption.png'
import big_title from '../page/img/big_title.png'

import { Link } from 'react-router-dom'
import './styles/style.css'
const Loremipsum = () => {
    return (
        <div>
            <p className='tracking-wide leading-8 text-neutral-700 mt-4' style={{ fontSize: '16.9px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin nibh sit ametz commodo.
            </p>
            <p className='tracking-wide leading-8 text-neutral-700 mt-4' style={{ fontSize: '16.8px' }}>
                Rhoncus dolor purus non enim. Ultrices gravida
                <Link className='no-underline px-1 text-blue-900 hover:text-neutral-600 transition ease-in-out duration-200'
                    to='https://www.google.com/'>
                    dictum fusce ut placerat
                </Link> orci.</p>
            <p className='tracking-wide leading-8 text-neutral-700 mt-4' style={{ fontSize: '16.8px' }}>
                Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Et sollicitudin ac orci phasellus egestas tellus. Dui nunc mattis enim ut tellus. Scelerisque in dictum non consectetur a erat nam at lectus. Scelerisque varius morbi enim nunc. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Sit amet mauris commodo quis imperdiet.
            </p>
            <div className='leading-9 tracking-wider font-sans font-medium mt-14 ml-8'
                style={{ width: '660px', fontSize: '22.5px' }}>
                <FaQuoteLeft className='mb-4 w-7 h-7' style={{ color: '#312e81' }} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus eget nunc scelerisque.</p>
                <p className='text-base' style={{ color: '#312e81' }}>– Luca Maxwell</p>
            </div>
            <p className='tracking-wide leading-7 text-neutral-600 mt-5 font-medium'
                style={{ fontSize: '16.8px' }}>
                Orci ac auctor augue mauris augue. Quis auctor elit sed vulputate. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Condimentum vitae
                <Link className='no-underline px-1 text-blue-900 hover:text-neutral-600 transition ease-in-out duration-200'
                    to='https://www.google.com/'>
                    sapien pellentesque
                </Link>
                habitant morbi tristique senectus.
            </p>
            <div>
                <img src={image_caption} alt={image_caption} />
                <p className='text-xs mt-3 tracking-wider' style={{ marginLeft: '305px' }}>
                    Image caption text
                </p>
            </div>
            <p className='tracking-wide leading-7 text-neutral-700 mt-4' style={{ fontSize: '16.8px' }}>
                Eget sit amet tellus cras adipiscing enim eu turpis. Fringilla phasellus faucibus scelerisque eleifend donec. Tellus mauris a diam maecenas sed enim. Velit euismod in pellentesque massa placerat duis. Adipiscing elit pellentesque habitant morbi tristique senectus et netus.
            </p>
            <h2 className='font-semibold leading-snug ' style={{ fontSize: '35px', marginTop: '38px' }}>Heading that grabs visitors attention for a list of interesting things</h2>
            <p className='tracking-wider text-stone-700 leading-8'
                style={{ fontSize: '16px', marginBottom: '23px', marginTop: '14px', width: '720px' }}>
                Etiam non quam lacus suspendisse. Arcu ac tortor dignissim convallis aenean et tortor. Amet commodo nulla facilisi nullam. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris:
            </p>
            <ul className='tracking-wider leading-7 list-disc ml-5' style={{ fontSize: '16.5px', marginBottom: '28px' }}>
                <li>Turpis cursus in hac habitasse platea dictumst quisque.</li>
                <li>Bibendum enim facilisis gravida neque convallis a cras semper.</li>
                <li>Erat velit scelerisque in dictum non. Eu augue ut lectus arcu bibendum at.</li>
                <li>Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue.
                </li>
                <li>Et egestas quis ipsum suspendisse ultrices gravida dictum. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit.</li>
                <li>Et magnis dis parturient montes nascetur. Adipiscing vitae proin sagittis nisl. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris.</li>
            </ul>
            <p className='tracking-wide leading-7 text-stone-600' style={{ fontSize: '16.8px', marginBottom: '28px', width: '700px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo.
            </p>
            <p className='tracking-wide' style={{ fontSize: '16.5px', marginBottom: '28px' }}>
                Rhoncus dolor purus non enim. Ultrices gravida dictum fusce ut placerat orci.
            </p>
            <div className='big_title' style={{ height: '430px' }}>
                <h2 className='z-10 text-slate-50 font-normal tracking-wide'
                    style={{ fontSize: '35px', fontFamily: 'sans-serif', marginTop: '-15px'}}>
                    Big Title
                </h2>
            </div>
        </div>
    )
}

export default Loremipsum