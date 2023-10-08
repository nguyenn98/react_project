import React from 'react'
import Bluebg from '../../components/Bluebg'
import Advertisement from '../../components/Advertisement'
import Taggcol from '../../components/Taggcol'
import Recommended from '../../components/Recommended'

import sixDIYsummer from '../img/sixDIYsummer.png'
import furnished_versus from '../img/furnished_versus.png'
import podcast_playlist from '../img/podcast_playlist.png'
import kitchen_essentials from '../img/kitchen_essentials.png'


const HomePage = () => {

  return (
    <div style={{ backgroundColor: '#fffefc' }}>
      <Bluebg text='DIY' />
      <div className='flex'
        style={{ width: '89.4%', height: '1085px', marginLeft: '72.5px' }}>
        <div style={{ width: '869.5px'}}>
          <Taggcol img={sixDIYsummer} title='6 DIY Summer Crafts for Your Home, Outdoor, and Family Fun' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
            author="Camille d'Amelio" date='August 17, 2022'/>
        </div>
        <div className='mt-8' >
          <Advertisement />
        </div>
      </div>
      <Recommended 
        img1={furnished_versus} title1="How To Cook the Perfect Steak, Every Time" text1="Food & Recipes"
        img2={podcast_playlist} title2="The Must-See Room In The San Francisco Decorator's Showcase" text2="Travel"
        img3={kitchen_essentials} title3="Kitchen Essentials - What Your Brand New Apartment Really Needs" text3="Home Decor"
      />
    </div>
  )
}

export default HomePage