import React from 'react'

import { Outlet } from 'react-router-dom'

import HeaderShop from './HeaderShop'
import FooterShop from './FooterShop'

const IndexShop = () => {
  return (
    <div>
        <HeaderShop />
        <main>
            <Outlet />
        </main>
        <FooterShop />
    </div>
  )
}

export default IndexShop