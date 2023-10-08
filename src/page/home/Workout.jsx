import React from 'react'
import Bluebg from '../../components/Bluebg'
import Advertisement from '../../components/Advertisement'
import Taggcol from '../../components/Taggcol'
import Recommended from '../../components/Recommended'

import paleo_diet from '../img/paleo_diet.png'
import furnished_versus from '../img/furnished_versus.png'
import podcast_playlist from '../img/podcast_playlist.png'
import car_camping from '../img/car_camping.png'

const Workout = () => {
    return (
        <div style={{ backgroundColor: '#fffefc' }}>
            <Bluebg text='workout' />
            <div className='flex'
                style={{ width: '89.4%', height: '1085px', marginLeft: '72.5px' }}>
                <div style={{ width: '869.5px' }}>
                    <Taggcol img={paleo_diet} title='The Beginner’s Guide To The Paleo Diet' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                        author="Eric Gordon" date='August 17, 2022' />
                </div>
                <div className='mt-8' >
                    <Advertisement />
                </div>
            </div>
            <Recommended
                img1={furnished_versus} title1="Furnished Versus Unfurnished Apartments: The Pros and Cons" text1="Home Decor"
                img2={podcast_playlist} title2="Podcast Playlist: Transform Your New Year’s Resolutions into Actions" text2="Podcast"
                img3={car_camping} title3="Car Camping 101: How to Sleep In Your Car (Safety Tips, What to Pack & More)" text3="Travel"
            />
        </div>
    )
}

export default Workout