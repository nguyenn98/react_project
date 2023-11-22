import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
//import HeaderHome from './HeaderHome'
import FooterHome from './FooterHome'
import HeaderTest from './HeaderTest'
import Darkmode from '../../../components/Darkmode'


const IndexHome = () => {
  // loggin
  const [avatar, setAvatar] = useState(false)

  function resetAll() {
    if (avatar === true) {
      setAvatar(false)
    }
  }

  // darkmode - inertia
  const [inertia_img, setInertia_img] = useState(false)

  return (
    <div onClick={resetAll}>
      {/* <HeaderHome/> */}
      <div>
        <HeaderTest avatar={avatar} setAvatar={setAvatar} inertia_img={inertia_img} />
      </div>
      <div onClick={() => setInertia_img(!inertia_img)} className='z-50'>
        <Darkmode />
      </div>
      <main className='dark:bg-neutral-900'>
        <Outlet />
      </main>
      <FooterHome inertia_img={inertia_img} />

    </div>
  )
}

export default IndexHome