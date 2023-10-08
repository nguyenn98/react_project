import React from 'react'
import { Outlet } from 'react-router-dom'
//import HeaderHome from './HeaderHome'
import FooterHome from './FooterHome'
import HeaderTest from './HeaderTest'

const IndexHome = () => {
  return (
    <div>
        {/* <HeaderHome/> */}
        <HeaderTest/>
        <main>
            <Outlet/>
        </main>
        <FooterHome/>
    </div>
  )
}

export default IndexHome