import React from 'react'
import Bluebg from '../../components/Bluebg'
import Advertisement from '../../components/Advertisement'
import Taggcol from '../../components/Taggcol'
import Recommended from '../../components/Recommended'

import five_things from '../img/five_things.png'
import surprising_things from '../img/surprising_things.png'
import gorgeous_skin from '../img/gorgeous_skin.png'
import packing_cubes from '../img/packing_cubes.png'
import best_meal from '../img/best_meal.png'


const Lifestyle = () => {
    return (
        <div style={{ backgroundColor: '#fffefc' }}>
            <Bluebg text='lifestyle' />
            <div className='flex '
                style={{ width: '89.4%', marginLeft: '72.5px', marginBottom: '105px' }}>
                <div style={{ width: '869.5px' }}>
                    <Taggcol img={five_things} title='What Are 5 Things in Your Kitchen You’d Never Be Caught Without?'
                        author="Camille d'Amelio" date='August 17, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                    <Taggcol img={surprising_things} title='14 Surprising Things About Parenting in USA'
                        author="Eric Gordon" date='August 17, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                </div>
                <div className='mt-8' >
                    <Advertisement />
                </div>
            </div>
            <Recommended
                img1={gorgeous_skin} title1="Wake Up to Gorgeous Skin With the 10 Best Night Creams Available (According to the Experts)" text1="Lifestyle"
                img2={packing_cubes} title2="Why you should use packing cubes to improve your (traveling) life" text2="Travel"
                img3={best_meal} title3="The 11 Best Meal Planning Apps to Help You Lose Weight" text3="Health & Wellness"
            />
        </div>
    )
}

export default Lifestyle