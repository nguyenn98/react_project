import React, { useState } from 'react'
import '../styles/style.css'
import { Form, Input } from 'antd';

const Contact = () => {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const validateMessages = {
        required: <span className='h-7 mt-1 -ml-9'>Email is required!</span>,
        types: {
            email: <span className='h-7 mt-1 -ml-9'>Email is not valid!</span>,
        },
    };

    const [clickButton, setClickButton] = useState(false)
    const onFinish = (values) => {
        console.log(values);
        setClickButton(true)
    };
    return (
        <div className='dark:bg-neutral-900 dark:text-slate-100 bg-[#f6f6f2] pb-[70px]'>
            <div className='image-contact h-[280px] -mt-6 font-[serif]'>
                <h1 className='text-[52.5px] font-medium text-slate-50 mt-[11.7px] tracking-[-0.02rem]'>Contact Us</h1>
            </div>
            <h6 className='mt-[50.5px] ml-32 font-serif font-medium text-[36.5px] tracking-[0.001rem]'>
                Let's Talk
            </h6>
            <div className='mt-4 flex'>
                <div>
                    {
                        clickButton ?
                            <div className='ml-32 -mt-2 w-[530.8px] h-[101px] text-[#054e31] bg-[#d1fadf] rounded-md'>
                                <div className='ml-[26px] pt-[25px] text-[16.4px] font-semibold'>
                                    <p className=''>Your message has been sent!</p>
                                    <p className='-mt-[16px]'>Thank you for your message.</p>
                                </div>
                            </div>
                            :
                            <div>
                                <Form
                                    {...layout}
                                    name="nest-messages"
                                    onFinish={onFinish}
                                    style={{ maxWidth: 600 }}
                                    validateMessages={validateMessages}
                                    className='-ml-[33px] mt-[6px]'
                                >
                                    <Form.Item
                                        className='font-sans -mt-[1px]' name={['user', 'name']}
                                        label={
                                            <p className='dark:text-slate-300 text-neutral-600 font-medium text-[14.4px]'
                                                style={{ fontFamily: 'unset' }}>
                                                Name
                                            </p>
                                        }
                                        rules={[{ type: 'name' }]}>
                                        <Input
                                            className='mt-[30px] -ml-[39px] h-[58px] w-[531px] text-[15px] 
                                            font-medium dark:text-stone-200 text-stone-800 dark:bg-stone-600 shadow-sm 
                                            dark:border-none'
                                            autoComplete='off'
                                            placeholder='Your name'
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name={['user', 'email']}
                                        label={
                                            <p className='mt-3 -ml-[0.7px] dark:text-slate-300 text-neutral-600 font-medium text-[14.4px]'>
                                                Email
                                            </p>}
                                        rules={[{ type: 'email', required: true }]}
                                        className='-mt-[1px]'>
                                        <Input
                                            className='mt-[37px] -ml-[39px] h-[58px] w-[531px] text-[15px] 
                                            font-medium dark:text-stone-200 text-stone-800 
                                            dark:bg-stone-600 dark:border-none shadow-sm'
                                            autoComplete='off'
                                            placeholder='Your email'
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name={['user', 'subject']}
                                        label={
                                            <p className='dark:text-slate-300 text-neutral-600 
                                                font-medium text-[14.4px]'>
                                                Subject
                                            </p>
                                        }
                                        className='ml-[14px] mt-[28.5px]'>
                                        <Input
                                            className='mt-[31px] -ml-[48px] h-[58px] w-[531px] text-[15px] 
                                            font-medium dark:border-none dark:text-stone-200 text-stone-800 
                                            shadow-sm dark:bg-stone-600'
                                            autoComplete='off'
                                            placeholder='Your subject'
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name={['user', 'message']}
                                        label={
                                            <p className='dark:text-slate-300 text-neutral-600 
                                                font-medium dark:border-nonetext-[14.4px]'>
                                                Message
                                            </p>
                                        }
                                        className='w-[797px] -ml-[49px] mt-[29.7px]'>
                                        <Input.TextArea
                                            className='mt-[30px] -ml-[56px] text-[15px] font-medium 
                                            dark:text-slate-300 text-stone-800 dark:bg-stone-600 
                                            shadow-sm dark:border-none'
                                            placeholder='Your message...'
                                            rows='10'
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
                                        className='-ml-[58px] mt-8'>
                                        <button
                                            htmlType="submit"
                                            className='text-[15.5px] font-medium w-[152px] h-[50px] 
                                            hover:border-[#827055] text-[rgb(254,254,254)] 
                                            hover:bg-stone-900 bg-[#827055] shadow-sm border-[#827055] 
                                            dark:bg-stone-600 rounded-md transition-all duration-300'>
                                            Send Message
                                        </button>
                                    </Form.Item>
                                </Form>
                            </div>
                    }
                </div>
                <div className='ml-[123px] mt-[39px]'>
                    <h4 className='font-bold tracking-[-0.02rem] text-[20.4px] opacity-95 
                    dark:text-slate-200 text-stone-800'>
                        Our Headquarters
                    </h4>
                    <div className='dark:text-slate-300 text-stone-800 font-medium text-[16.7px] mt-[35px] opacity-90 leading-[14px]'>
                        <p>310 East 12th Ave Street, Apartment 14</p>
                        <p>Orlando, FL 32120</p>
                        <p>Email: info@company.com</p>
                        <p>Phone: +1 (0) 101 0000 000</p>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.779111105336!2d105.81161307231336!3d21.00148974595206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac9b3f23b42b%3A0x49fa01aaa06d239b!2zQk1XIEdp4bqjaSBQaMOzbmc!5e0!3m2!1svi!2s!4v1700595597548!5m2!1svi!2s"
                        width="530" height="420" style={{ border: 0 }} className='mt-14'
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact