import React from 'react'

const Readalso = ({text1, text2, text3}) => {
    return (
        <div className='text-black tracking-wide  font-sans' style={{ width: '700px', marginTop: '31px' }}>
            <h6 className='dark:text-slate-200 tracking-wider' style={{ fontSize: '16.4px' }}>READ ALSO</h6>
            <ul className='-ml-7' style={{ fontSize: '15.5px', marginTop: '19.8px' }}>
                <li className='mb-2.5 dark:hover:text-neutral-400 hover:text-zinc-600 dark:text-[#535199] text-indigo-900 font-medium transition ease-in-out duration-200 cursor-pointer'>
                    – {text1}
                </li>
                <li className='mb-2.5 dark:hover:text-neutral-400 hover:text-zinc-600 dark:text-[#535199] text-indigo-900 font-medium transition ease-in-out duration-200 cursor-pointer'>
                    – {text2}
                </li>
                <li className='dark:hover:text-neutral-400 hover:text-zinc-600 dark:text-[#535199] text-indigo-900 font-medium transition ease-in-out duration-200 cursor-pointer'>
                    – {text3}
                </li>
            </ul>
        </div>
    )
}

export default Readalso