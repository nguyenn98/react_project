import React from 'react'
import Bluebg from '../../components/Bluebg'
import Advertisement from '../../components/Advertisement'
import Taggcol from '../../components/Taggcol'
import Recommended from '../../components/Recommended'

import summer_wardrobe from '../img/summer_wardrobe.png'
import gorgeous_skin from '../img/gorgeous_skin.png'
import coconut_oil from '../img/coconut_oil.png'
import car_camping from '../img/car_camping.png'
import classic_summer from '../img/classic_summer.png'
import most_romantic from '../img/most_romantic.png'
import dress_outfits from '../img/dress_outfits.png'
import podcast_playlist from '../img/podcast_playlist.png'

const Trending = () => {
    return (
        <div style={{ backgroundColor: '#fffefc' }}>
            <Bluebg text='trending' />
            <div className='flex '
                style={{ width: '89.4%', marginLeft: '72.5px', marginBottom: '105px' }}>
                <div className='flex' style={{ width: '869.5px' }}>
                    <div className='mr-12'>
                        <Taggcol img={summer_wardrobe} title='24 Summer Wardrobe Staples That Are Simple, Sustainable, and Editor-Approved'
                            author="Lucas Sebastian" date='November 4, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                        <Taggcol img={coconut_oil} title='8 Homemade Coconut Oil Shampoo Recipes For Beautiful Hair'
                            author="Maggie Brandon" date='August 17, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                        <Taggcol img={classic_summer} title='Classic Summer Color and Print Wardrobe Combination'
                            author="Jennifer Ledford" date='August 17, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                        <Taggcol img={dress_outfits} title='How To Dress Up & Dress Down Your Outfits'
                            author="Camille d'Amelio" date='August 11, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                    </div>
                    <div>
                        <Taggcol img={gorgeous_skin} title='Wake Up to Gorgeous Skin With the 10 Best Night Creams Available (According to the Experts)'
                            author="Oliver Coleman" date='August 11, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                        <Taggcol img={car_camping} title='Car Camping 101: How to Sleep In Your Car (Safety Tips, What to Pack & More)'
                            author="Maggie Brandon" date='August 17, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristiq..." />
                        <Taggcol img={most_romantic} title='The Most Romantic & Sustainable Destinations'
                            author="Maggie Brandon" date='August 17, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristiq..." />
                    </div>
                </div>
                <div className='mt-8' >
                    <Advertisement />
                </div>
            </div>
            <Recommended
                img1={podcast_playlist} title1="Podcast Playlist: Transform Your New Year’s Resolutions into Actions" text1="Podcast"
                img2={car_camping} title2="Car Camping 101: How to Sleep In Your Car (Safety Tips, What to Pack & More)" text2="Travel"
                img3={dress_outfits} title3="How To Dress Up & Dress Down Your Outfits" text3="Lifestyle"
            />
        </div>
    )
}

export default Trending