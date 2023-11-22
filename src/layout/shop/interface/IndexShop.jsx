import React, { useState } from 'react'

import Darkmode from '../../../components/Darkmode'

import { Outlet } from 'react-router-dom'

import HeaderShop from './HeaderShop'
import FooterShop from './FooterShop'

const IndexShop = () => {
  const [avatar, setAvatar] = useState(false)
  const [inputPass, setInputPass] = useState(false) 

  function resetAll() {
    if (avatar === true) {
      setAvatar(false)
    }
  }
  function bgPass(){
    setInputPass(!inputPass)
  }
  return (
    <div onClick={resetAll}>
      <HeaderShop avatar={avatar} setAvatar={setAvatar} />
      <div className='-mt-0.5' onClick={bgPass}>
        <Darkmode/>
      </div>
      <main className='dark:bg-neutral-900' >
        <Outlet context={[inputPass, setInputPass]}/>
      </main>
      <FooterShop />
    </div>
  )
}

export default IndexShop