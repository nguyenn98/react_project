import React from 'react'
import Bluebg from '../../components/Bluebg'
import Advertisement from '../../components/Advertisement'
import Taggcol from '../../components/Taggcol'
import Recommended from '../../components/Recommended'

import according_nutritionists from '../img/according_nutritionists.png'
import evidence_based from '../img/evidence_based.png'
import best_meal from '../img/best_meal.png'
import blackberry from '../img/blackberry.png'
import podcast from '../img/podcast.png'

const Nutrition = () => {
    return (
        <div>
            <Bluebg text='nutrition' />
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
                img1={evidence_based} title1="10 Evidence-Based Benefits of Green Tea" text1="Health & Wellness"
                img2={blackberry} title2="Take Your Blackberry Cobbler to the Next Level with Two Simple Ingredients" text2="Food & Recipes"
                img3={podcast} title3="Podcast: Three Daily Habits That Will Change Your Life" text3="Podcast"
            />
        </div>
    )
}

export default Nutrition