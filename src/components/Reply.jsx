import React from 'react'
import { useState } from 'react'

import avatar from '../page/img/avatar.png'

const Reply = () => {
    const info = {
        key: 1,
        comment: "",
        name: "",
        email: "",
        website: "",
    }
    const [showData, setshowData] = useState(info);
    const [boxData, setboxData] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [hidden, setHidden] = useState('none')

    function handleChange(e) {
        setshowData(
            {
                ...showData,
                [e.target.name]: [e.target.value] || [e.target.checked],
            })
    }

    function handleCheck() {
        setIsChecked(!isChecked);
    }
    function handleClick() {
        console.log(showData);
        if (isChecked === true) {
            setboxData([...boxData, showData]);
            setHidden('')
        } else {
            return alert('Oh, You not save!')
        }
        setshowData(info)
        setIsChecked(false)
    }

    let today = new Date();
    let month = today.getMonth();
    let date = today.getDate();
    let fullyear = today.getFullYear();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    switch (month) {
        case 0:
            month = 'January'
            break;
        case 1:
            month = 'February'
            break;
        case 2:
            month = 'March'
            break;
        case 3:
            month = 'April'
            break;
        case 4:
            month = 'May'
            break;
        case 5:
            month = 'June'
            break;
        case 6:
            month = 'July'
            break;
        case 7:
            month = 'August'
            break;
        case 8:
            month = 'September'
            break;
        case 9:
            month = 'October'
            break;
        case 10:
            month = 'November'
            break;
        default:
            month = 'December'
            break;
    }
    if (date <= 9){
        date = `0${today.getDate()}`
    }
    if (hours <= 9){
        hours = `0${today.getFullYear()}`
    }
    if (minutes <= 9){
        minutes = `0${today.getMinutes()}`
    }

    return (
        <div>
            <ul>
                <h2 className='tracking-wider font-medium font-sans mt-24 -ml-8'
                    style={{ fontSize: '34px', width: '750px', display: hidden }}>0 Comments</h2>
                {
                    boxData && (
                        boxData.map((e, index) => {
                            return (
                                <li className='mt-12 -ml-8' style={{ width: '750px', height: '220px', borderBottom: '1px solid lightgrey' }}
                                    key={index}>
                                    <div className='flex mt-9'>
                                        <img style={{ width: '70px', height: '70px' }} src={avatar} alt={avatar} />
                                        <div className='ml-4'>
                                            <p className='mb-2.5 font-semibold text-indigo-900 hover:text-stone-600'>{e.name}</p>
                                            <i className=' text-xs text-neutral-500 tracking-wider'>Your comment is awaiting moderation.</i>
                                            <p className='text-xs text-stone-600 tracking-wider'>
                                                {`${month} ${date}, ${fullyear} at ${hours}:${minutes} pm`}
                                            </p>
                                            <p className='mt-4 text-sm font-semibold font-sans tracking-wider text-stone-800'>{e.comment}</p>
                                            <button
                                                className='text-sm tracking-wider font-semibold text-indigo-900
                                                    hover:text-stone-600 bg-white shadow-sm rounded transition ease-in-out duration-150'
                                                style={{ width: '73px', height: '41px' }}
                                                onClick={handleClick}>
                                                Reply
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    )
                }
            </ul>

            <div className='mt-24' style={{ width: '750px' }} >
                <h4 className='tracking-wide text-stone-950 font-sans' style={{ fontSize: '27px' }}>Leave a Reply</h4>
                <p className='mt-6 text-xs tracking-wider font-sans font-medium text-zinc-600' style={{ fontSize: '13.5px' }}>Your email address will not be published.</p>
                <p className='-mt-2.5 text-xs tracking-wider font-sans font-medium text-zinc-600' style={{ fontSize: '13.5px' }}>Required fields are marked <span className='ml-1 mr-1 text-red-600 text-lg'>*</span></p>
                <div>
                    <div>
                        <p className='text-stone-600 tracking-widest' style={{ fontSize: '13.5px' }}>
                            Comment <span className='ml-0.5 text-red-600 text-lg'>*</span>
                        </p>
                        <textarea
                            name='comment'
                            type='text'
                            value={showData.comment}
                            onChange={handleChange}
                            class="form-control -mt-1"
                            style={{ border: '1px solid lightgrey' }} rows="9" cols="90" />
                    </div>
                    <div className='mt-4'>
                        <p className='text-sm text-stone-600 tracking-widest' style={{ fontSize: '13.5px' }}>
                            Name <span className='ml-0.5 text-red-600 text-lg'>*</span>
                        </p>
                        <input
                            name='name'
                            type='text'
                            value={showData.name}
                            onChange={handleChange}
                            class="form-control h-14 -mt-1"
                            style={{ border: '1px solid lightgrey' }} />
                    </div>
                    <div className='flex items-center mt-4'>
                        <div>
                            <p className='text-sm text-stone-600 tracking-wider' style={{ fontSize: '13.5px' }}>
                                Email <span className='ml-0.5 text-red-600 text-lg'>*</span>
                            </p>
                            <input
                                name='email'
                                type='email'
                                value={showData.email}
                                onChange={handleChange}
                                class="form-control h-14 -mt-1"
                                style={{ border: '1px solid lightgrey', width: '358px' }} />
                        </div>
                        <div className='ml-8 mt-1'>
                            <p className='text-sm text-stone-600 tracking-wider' style={{ fontSize: '13.5px' }}>
                                Website
                            </p>
                            <input
                                name='website'
                                type='text'
                                value={showData.website}
                                onChange={handleChange}
                                class="form-control h-14 -mt-1"
                                style={{ border: '1px solid lightgrey', width: '358px' }} />
                        </div>
                    </div>
                    <div className='mt-11 flex'>
                        <input
                            name='check'
                            checked={isChecked}
                            type='checkbox'
                            //onChange={handleChange}
                            onClick={handleCheck}
                            className='w-5 h-5 mr-3 mt-0.5' />
                        <p className='text-sm tracking-wide text-stone-700'>
                            Save my name, email, and website in this browser for the next time I comment.
                        </p>
                    </div>
                    <button
                        className='w-40 h-12 mt-3.5 tracking-wide rounded bg-indigo-900 text-gray-50'
                        onClick={handleClick}>
                        Post Comment
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Reply