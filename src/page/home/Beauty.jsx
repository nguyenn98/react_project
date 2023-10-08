import React from 'react'
import Bluebg from '../../components/Bluebg'
import Advertisement from '../../components/Advertisement'
import Taggcol from '../../components/Taggcol'
import Recommended from '../../components/Recommended'

import five_things from '../img/five_things.png'
import surprising_things from '../img/surprising_things.png'
import design_book from '../img/design_book.png'
import furnished_versus from '../img/furnished_versus.png'
import roasted_carrot from '../img/roasted_carrot.png'

const Beauty = () => {
    return (
        <div style={{ backgroundColor: '#fffefc' }}>
            <Bluebg text='Beauty' />
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
                img1={design_book} title1="5 Design Books You Can Get This Summer" text1="Home Decor"
                img2={furnished_versus} title2="Furnished Versus Unfurnished Apartments: The Pros and Cons" text2="Home Decor"
                img3={roasted_carrot} title3="This Roasted Carrot and Red Pepper Hummus Flatbread Is a Delicious Way To Clean Out Your Fridge" text3="Food & Recipes"
            />
        </div>
    )
}

export default Beauty