import React from 'react'
import Bluebg from '../../components/Bluebg'
import Advertisement from '../../components/Advertisement'
import Taggcol from '../../components/Taggcol'
import Recommended from '../../components/Recommended'

import interior_design from '../img/interior_design.png'
import san_francisco from '../img/san_francisco.png'
import furnished_versus from '../img/furnished_versus.png'
import kitchen_essentials from '../img/kitchen_essentials.png'
import design_book from '../img/design_book.png'
import podcast from '../img/podcast.png'
import best_meal from '../img/best_meal.png'
import according_nutritionists from '../img/according_nutritionists.png'

const Decor = () => {
    return (
        <div>
            <Bluebg text='decor' />
            <div className='flex '
                style={{ width: '89.4%', marginLeft: '72.5px', marginBottom: '105px' }}>
                <div className='flex' style={{ width: '869.5px' }}>
                    <div className='mr-12'>
                        <Taggcol img={interior_design} title='Interior Design – A Comprehensive Guide for Enthusiasts'
                            author="Simon Lambert" date='August 17, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                        <Taggcol img={san_francisco} title='The Must-See Room In The San Francisco Decorator’s Showcase'
                            author="Oliver Coleman" date='August 17, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                    </div>
                    <div>
                        <Taggcol img={furnished_versus} title='Furnished Versus Unfurnished Apartments: The Pros and Cons'
                            author="Camille d'Amelio" date='August 17, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                        <Taggcol img={kitchen_essentials} title='Kitchen Essentials – What Your Brand New Apartment Really Needs'
                            author="Lucas Sebastian" date='August 8, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                        <Taggcol img={design_book} title='5 Design Books You Can Get This Summer'
                            author="Maggie Brandon" date='August 17, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                    </div>
                </div>
                <div className='mt-8' >
                    <Advertisement />
                </div>
            </div>
            <Recommended
                img1={podcast} title1="Podcast: Three Daily Habits That Will Change Your Life" text1="Podcast"
                img2={best_meal} title2="The 11 Best Meal Planning Apps to Help You Lose Weight" text2="Health & Wellness"
                img3={according_nutritionists} title3="According to Nutritionists, These Are the 7 Ingredients Your Food Should Have" text3="Health & Wellness"
            />
        </div>
    )
}

export default Decor