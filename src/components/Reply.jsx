import React from 'react'
import { useState } from 'react'
import avatar from '../page/img/avatar.png'

const Reply = () => {
    let today = new Date();

    const info = {
        key: 1,
        comment: "",
        name: "",
        email: "",
        website: "",
        month: today.getMonth(),
        date: '',
        fullyear: today.getFullYear(),
        hour: '',
        minute: '',
    }
    const [showData, setshowData] = useState(info);
    const [boxData, setboxData] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [hidden, setHidden] = useState('none')
    // Check fault
    const [errComment, setErrComment] = useState('')
    const [errMail, setErrMail] = useState('')
    const [errName, setErrName] = useState('')
    const [errCheck, setErrCheck] = useState('')

    function handleChange(e) {
        setshowData(
            {
                ...showData,
                [e.target.name]: e.target.value,
            })
    }

    function handleCheck() {
        setIsChecked(!isChecked);
        if (isChecked === true){
            setErrCheck('')
        }
    }

    function handleClick() {
        console.log(showData);
        console.log(showData.email);
        if (showData.comment.length === 0) {
            setErrComment('Please input your comment!')
        }
        else if (showData.name.length === 0) {
            setErrName('Please input your name!')
        }
        else if (showData.email.length === 0) {
            setErrMail('Please input your email!')
        }
        else if (!(showData.email.endsWith('gmail.com'))) {
            setErrMail('Email is not in correct format!')
        }
        else if (!(/[a-zA-Z]/.test(showData.email))) {
            setErrMail('Email at least one charater (A-Z/a-z)!')
        }
        else if (!(/[0-9]/.test(showData.email))) {
            setErrMail('Email requires at least one number (0-9)!')
        }
        else if ((/[0-9]/.test(showData.email[0]))) {
            setErrMail('The first position must not be a number!')
        }
        else if (isChecked === false) {
            setErrCheck('Please check the checkbox to proceed.')
        }
        else {
            setboxData([...boxData, showData]);
            setHidden('')
            setshowData(info)
            setIsChecked(false)
            // reset err
            setErrComment('')
            setErrMail('')
            setErrName('')
            setErrCheck('')
            console.log((showData.hour).length );
            if (today.getDate() <= 9) {
                showData.date = `0${today.getDate()}`
            }
            else{
                showData.date = today.getDate()
            }
            if (today.getHours() <= 9){
                showData.hour = `0${today.getHours()}`
            }
            else {
                showData.hour = today.getHours()
            }
            if (today.getMinutes() <= 9){
                showData.minute = `0${today.getMinutes()}`
            }
            else {
                showData.minute = today.getMinutes()
            }
            switch (showData.month) {
                case 0:
                    showData.month = 'January'
                    break;
                case 1:
                    showData.month = 'February'
                    break;
                case 2:
                    showData.month = 'March'
                    break;
                case 3:
                    showData.month = 'April'
                    break;
                case 4:
                    showData.month = 'May'
                    break;
                case 5:
                    showData.month = 'June'
                    break;
                case 6:
                    showData.month = 'July'
                    break;
                case 7:
                    showData.month = 'August'
                    break;
                case 8:
                    showData.month = 'September'
                    break;
                case 9:
                    showData.month = 'October'
                    break;
                case 10:
                    showData.month = 'November'
                    break;
                default:
                    showData.month = 'December'
                    break;
            }
        }
    }

    return (
        <div>
            <ul>
                <h2 className='dark:text-slate-100 tracking-wider font-medium font-sans mt-24 -ml-8'
                    style={{ fontSize: '35px', width: '750px', display: hidden, fontFamily: 'serif' }}>
                    {boxData.length} Comments
                </h2>
                {
                    boxData && (
                        boxData.map((e, index) => {
                            return (
                                <li className='mt-12 -ml-8' style={{ width: '750px', height: '220px', borderBottom: '1px solid lightgrey' }}
                                    key={index}>
                                    <div className='flex mt-9'>
                                        <img style={{ width: '70px', height: '70px' }} src={avatar} alt={avatar} />
                                        <div className='ml-4'>
                                            <p className='mb-2.5 font-semibold dark:text-[#535199] text-indigo-900 hover:text-stone-600'>{e.name}</p>
                                            <i className=' text-xs dark:text-neutral-400 text-neutral-500 tracking-wider'>Your comment is awaiting moderation.</i>
                                            <p className='text-xs dark:text-stone-300 text-stone-600 tracking-wider'>
                                                {`${e.month} ${e.date}, ${e.fullyear} at ${e.hour}:${e.minute}'`}
                                            </p>
                                            <p className='mt-4 text-sm font-semibold font-sans tracking-wider dark:text-slate-200 text-stone-800'>
                                                {e.comment}
                                            </p>
                                            <button
                                                className='text-sm tracking-wider font-semibold text-indigo-900
                                                    hover:text-stone-600 bg-[rgb(254,254,254)] shadow-md rounded 
                                                    dark:opacity-95 transition ease-in-out duration-150'
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

            <div className='mt-24 dark:bg-neutral-900' style={{ width: '750px' }} >
                <h4 className='tracking-wide dark:text-slate-100 text-stone-950 font-sans'
                    style={{ fontSize: '27px' }}>Leave a Reply</h4>
                <p className='mt-6 text-xs tracking-wider font-sans font-medium dark:text-slate-300 text-zinc-600'
                    style={{ fontSize: '13.5px' }}>Your email address will not be published.</p>
                <p className='-mt-2.5 text-xs tracking-wider font-sans font-medium dark:text-slate-300 text-zinc-600'
                    style={{ fontSize: '13.5px' }}>Required fields are marked <span className='ml-1 mr-1 text-red-600 text-lg'>*</span>
                </p>
                <div>
                    <div className='h-[305px]'>
                        <p className='dark:text-slate-200 text-stone-600 tracking-widest' style={{ fontSize: '13.5px' }}>
                            Comment <span className='ml-0.5 text-red-600 text-lg'>*</span>
                        </p>
                        <textarea
                            name='comment'
                            type='text'
                            value={showData.comment}
                            onChange={handleChange}
                            onClick={() => {setErrComment('')}}
                            class="-mt-1 resize pl-[17.5px] pt-3 pr-[19px] outline-[1px] dark:focus:outline-indigo-400 
                                focus:outline-indigo-300 w-[755px] dark:bg-[#0f0f0f] text-neutral-900 
                                dark:text-slate-200 border-[0.7px] border-solid dark:border-[#6d6865] 
                                border-[lightgrey] rounded text-[15.4px] shadow-sm"
                            rows="9" cols="90" maxLength='2000' />
                        <p className='mt-0.5 ml-1 text-sm text-red-700'>{errComment}</p>
                    </div>
                    <div className='h-32'>
                        <p className='text-sm dark:text-slate-200 text-stone-600 tracking-widest' style={{ fontSize: '13.5px' }}>
                            Name <span className='ml-0.5 text-red-600 text-lg'>*</span>
                        </p>
                        <input
                            name='name'
                            type='text'
                            value={showData.name}
                            onChange={handleChange}
                            onClick={() => {setErrName('')}}
                            class="pl-2.5 w-[752px] h-14 -mt-1 outline-[1px] dark:focus:outline-indigo-400 
                                focus:outline-indigo-300 dark:bg-[#0f0f0f] dark:focus:bg-[#0f0f0f]
                                dark:text-slate-200 text-neutral-900 border-[0.7px] border-solid 
                                dark:border-[#6d6865] border-[lightgrey] rounded text-[15.4px] shadow-sm"
                            autocomplete="off"
                        />
                        <p className='mt-1 ml-1 text-sm text-red-700'>{errName}</p>
                    </div>
                    <div className='flex mt-[7px] h-32'>
                        <div>
                            <p className='text-sm dark:text-slate-200 text-stone-600 tracking-wider' style={{ fontSize: '13.5px' }}>
                                Email <span className='ml-0.5 text-red-600 text-lg'>*</span>
                            </p>
                            <input
                                name='email'
                                type='email'
                                value={showData.email}
                                onChange={handleChange}
                                onClick={() => {setErrMail('')}}
                                class="pl-2.5 h-14 -mt-1 outline-[1px] dark:focus:outline-indigo-400 
                                focus:outline-indigo-300 dark:bg-[#0f0f0f] dark:text-slate-200 text-neutral-900 
                                border-[0.7px] border-solid dark:border-[#6d6865] border-[lightgrey] 
                                rounded text-[15.4px] shadow-sm"
                                style={{ width: '358px' }}
                                autocomplete="off" />
                            <p className='mt-1 ml-1 text-sm text-red-700'>{errMail}</p>
                        </div>
                        <div className='ml-8 mt-[7.5px]'>
                            <p className='text-sm dark:text-slate-200 text-stone-600 tracking-wider' style={{ fontSize: '13.5px' }}>
                                Website
                            </p>
                            <input
                                name='website'
                                type='text'
                                value={showData.website}
                                onChange={handleChange}
                                class="pl-2.5 h-14 -mt-1 outline-[1px] dark:focus:outline-indigo-400 
                                focus:outline-indigo-300 dark:bg-[#0f0f0f] dark:text-slate-200 text-neutral-900 
                                border-[0.7px] border-solid dark:border-[#6d6865] border-[lightgrey] 
                                rounded text-[15.4px] shadow-sm"
                                style={{ width: '358px' }}
                                autocomplete="off" />
                        </div>
                    </div>
                    <div className='mt-[7px] ml-1 flex'>
                        <input
                            name='check'
                            checked={isChecked}
                            type='checkbox'
                            onClick={handleCheck}
                            className='w-5 h-5 mr-3 mt-0.5 shadow-sm' />
                        <p className='mt-[0.5px] text-sm tracking-wide dark:text-slate-200 text-stone-700'>
                            Save my name, email, and website in this browser for the next time I comment.
                        </p>
                    </div>
                    <p className='text-sm text-red-700 ml-[6px] -mt-2 h-6'>{errCheck}</p>
                    <button
                        className='w-40 h-12 tracking-wide rounded dark:bg-[#6461b6] 
                        bg-indigo-900 dark:hover:bg-slate-50 hover:bg-neutral-900 shadow-sm
                        dark:hover:text-[rgb(1,1,1)] text-gray-50 transition-all duration-300 ease-in-out'
                        onClick={handleClick}>
                        Post Comment
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Reply