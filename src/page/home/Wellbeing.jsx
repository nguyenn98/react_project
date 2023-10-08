import React from 'react'
import Bluebg from '../../components/Bluebg'
import Advertisement from '../../components/Advertisement'
import Taggcol from '../../components/Taggcol'
import Recommended from '../../components/Recommended'

import according_nutritionists from '../img/according_nutritionists.png'
import evidence_based from '../img/evidence_based.png'
import best_meal from '../img/best_meal.png'
import car_camping from '../img/car_camping.png'
import dress_outfits from '../img/dress_outfits.png'
import podcast_playlist from '../img/podcast_playlist.png'

const Wellbeing = () => {
    return (
        <div style={{ backgroundColor: '#fffefc' }}>
            <Bluebg text='wellbeing' />
            <div className='flex '
                style={{ width: '89.4%', marginLeft: '72.5px', marginBottom: '105px' }}>
                <div className='flex' style={{ width: '869.5px' }}>
                    <div className='mr-12'>
                        <Taggcol img={according_nutritionists} title='According to Nutritionists, These Are the 7 Ingredients Your Food Should Have'
                            author="Oliver Coleman" date='August 17, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                        <Taggcol img={evidence_based} title='10 Evidence-Based Benefits of Green Tea'
                            author="Camille d'Amelio" date='August 8, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                    </div>
                    <div>
                        <Taggcol img={best_meal} title='The 11 Best Meal Planning Apps to Help You Lose Weight'
                            author="Simon Lambert" date='August 8, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                    </div>
                </div>
                <div className='mt-8' >
                    <Advertisement />
                </div>
            </div>
            <Recommended
                img1={car_camping} title1="Car Camping 101: How to Sleep In Your Car (Safety Tips, What to Pack & More)" text1="Travel"
                img2={dress_outfits} title2="How To Dress Up & Dress Down Your Outfits" text2="Lifestyle"
                img3={podcast_playlist} title3="Podcast Playlist: Transform Your New Year’s Resolutions into Actions" text3="Podcast"
            />
        </div>
    )
}

export default Wellbeing