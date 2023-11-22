import React from 'react'

import { Outlet } from 'react-router-dom'
import HeaderArchive from './HeaderArchive'
import FooterArchive from './FooterArchive'

import Darkmode from '../../../components/Darkmode'


const IndexArchive = () => {
    return (
        <div style={{ backgroundColor: '#fffefc' }}>
            <HeaderArchive />
            <div className='z-50 mt-4'>
                <Darkmode />
            </div>
            <main>
                <Outlet />
            </main>
            <FooterArchive />
        </div>
    )
}

export default IndexArchive