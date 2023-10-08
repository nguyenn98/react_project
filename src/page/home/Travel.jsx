import React from 'react'
import Bluebg from '../../components/Bluebg'
import Advertisement from '../../components/Advertisement'
import Taggcol from '../../components/Taggcol'
import Recommended from '../../components/Recommended'

import five_things from '../img/five_things.png'
import surprising_things from '../img/surprising_things.png'
import kitchen_essentials from '../img/kitchen_essentials.png'
import furnished_versus from '../img/furnished_versus.png'


const Travel = () => {
    return (
        <div style={{ backgroundColor: '#fffefc' }}>
            <Bluebg text='Travel' />
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
                img1={surprising_things} title1="14 Surprising Things About Parenting in USA" text1="Lifestyle"
                img2={kitchen_essentials} title2="Kitchen Essentials – What Your Brand New Apartment Really Needs" text2="Home Decor"
                img3={furnished_versus} title3="Furnished Versus Unfurnished Apartments: The Pros and Cons" text3="Home Decor"
            />
        </div>
    )
}

export default Travel