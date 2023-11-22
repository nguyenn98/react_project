import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';

import "../styles/style.css"

import { useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

const MyAccount = () => {

  const nagative = useNavigate()
  const [user, setUser] = useState()
  const [pass, setPass] = useState()
  const [check, setCheck] = useState()

  const onFinish = (values) => {
    console.log('Success:', values);
    const home = values.username;

    if (values.username.length >= 6 && values.password.length >= 6 && values.remember === true) {
      if (values.password.includes(',') || values.password.includes('-')) {
        setPass('Password is not valid!')
      }
      else if (!(values.password.includes('0') || values.password.includes('1') || values.password.includes('2')
        || values.password.includes('3') || values.password.includes('4') || values.password.includes('5') ||
        values.password.includes('6') || values.password.includes('7') || values.password.includes('8') ||
        values.password.includes('9'))) {
        setPass('Password requires at least one number (0-9)!')
      }
      else if (!(/[a-zA-Z]/.test(values.password))) {
        setPass('Password at least one charater (A-Z/a-z)!')
      }
      else {
        nagative('/shop-demo')
        if (!localStorage.getItem('homeLander')) {
          return localStorage.setItem("homelander", JSON.stringify(home))
        }
      }
    }
    else if (values.username.length < 6) {
      setUser('Username is less than 6 characters long!')
    }
    else if (values.password.length < 6) {
      setPass('Password is less than 6 characters long!')
    }
    else if (values.remember === false) {
      setCheck("You haven't checked the box yet")
    }
    else {
      nagative('/shop-demo')
      if (!localStorage.getItem('homeLander')) {
        return localStorage.setItem("homelander", JSON.stringify(home))
      }
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    console.log((errorInfo.errorFields[0].errors[0]))
  };

  const [inputPass, setInputPass] = useOutletContext()

  console.log(inputPass);
  useEffect(() => {
    let darkpass = document.querySelector('.ant-input-affix-wrapper >input.ant-input');
    if (darkpass) {
      if (inputPass === true) {
        console.log("Phần tử chứa lớp: dark");
        darkpass.style.background = 'rgb(24 24 27 / var(--tw-bg-opacity))';
        darkpass.style.color = '#f4f4f2'
      }
      else {
        console.log("Phần tử không chứa lớp: dark");
        darkpass.style.background = '';
        darkpass.style.color = ''
      }
    }
  }, [inputPass])

  useEffect(() => {
    let eyepass = document.querySelector('.ant-input-affix-wrapper .anticon.ant-input-password-icon');
    if (eyepass) {
      if (inputPass === true) {
        eyepass.style.color = '#f2f1ef'
      }
      else {
        eyepass.style.color = ''
      }
    }
  })


  return (
    <div className='pb-16 -mb-16'>
      <div className='text-center'>
        <h1 className='dark:text-slate-50 dark:font-medium -ml-3.5 pt-[58.5px] tracking-tight ' style={{ fontSize: '54px', fontFamily: 'Playfair Display' }}>
          My account
        </h1>
        <p className='w-12 h-1' style={{ border: '2px solid #b18e71', marginLeft: '650px', marginTop: '21.4px' }}></p>
      </div>
      <h2 className='dark:text-slate-50' style={{ marginLeft: '625px', marginTop: '100px', fontFamily: 'sans', fontSize: '40px' }}>
        Login
      </h2>
      <div className='ml-[437px] mt-6 dark:shadow-[0 8px 30px rgba(0,0,0,.4)] dark:shadow-2xl
          rounded-sm w-[460px] h-[330px]' >
        <Form
          name="basic"
          labelCol={{ span: 12 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className='ml-[100px] pt-3'
        >
          <Form.Item
            className='-ml-[140px]'
            label={<label className='dark:text-slate-100'>Username or email address</label>}
            name="username"
            rules={[{ required: true, message: <span style={{ marginLeft: '-180px' }}>Please input your username!</span> }]}
          >
            <Input
              className='mt-10 h-12 dark:bg-zinc-900 dark:text-slate-100'
              style={{ marginLeft: '-189.5px', width: '410px' }}
              onKeyDown={() => setUser()}
            />
          </Form.Item>
          <p className='-mt-4 opacity-90' style={{ marginLeft: '-70px', color: '#f42727' }}>{user}</p>

          <Form.Item
            label={<label className='dark:text-slate-100'>Password</label>}
            name="password"
            rules={[{ required: true, message: <span style={{ marginLeft: '-70px' }}>Please input your password!</span> }]}
            className='-ml-[360px] -mt-3 dark:text-slate-100'
          >
            <Input.Password
              className='mt-10 h-12 dark:bg-zinc-900 dark:text-slate-100'
              style={{ marginLeft: '-80.4px', width: '410px' }}
              onKeyDown={() => setPass()}
            />
          </Form.Item>
          <p className='-mt-4 opacity-90' style={{ marginLeft: '-70px', color: '#f42727' }}>{pass}</p>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox className='-ml-[195px] dark:text-slate-50'>Remember me</Checkbox>
          </Form.Item>
          <p className='-mt-4 opacity-90'
            style={{ marginLeft: '174px', color: '#f42727' }}
            onClick={() => setCheck()}>
            {check}
          </p>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button htmlType="submit" className='mt-[11px] hover:opacity-75 text-slate-600 
              dark:text-slate-50 dark:hover:bg-neutral-900'
              style={{ padding: '8px 20px 30px 20px', fontSize: '15px', fontWeight: '600', marginLeft: '-194px' }}
            >
              LOG IN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div >
  )
}

export default MyAccount