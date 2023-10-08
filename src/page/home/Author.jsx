import React from 'react'

import Advertisement from '../../components/Advertisement'
import Taggcol from '../../components/Taggcol'
import Recommended from '../../components/Recommended'

import summer_wardrobe from '../img/summer_wardrobe.png'
import gorgeous_skin from '../img/gorgeous_skin.png'
import coconut_oil from '../img/coconut_oil.png'
import sixDIYsummer from '../img/sixDIYsummer.png'
import dress_outfits from '../img/dress_outfits.png'
import classic_summer from '../img/classic_summer.png'
import five_things from '../img/five_things.png'
import surprising_things from '../img/surprising_things.png'
import evidence_based from '../img/evidence_based.png'
import ai_artwork from '../img/ai_artwork.png'


const Author = () => {
    return (
        <div className='-mb-5' style={{ backgroundColor: '#fffefc' }}>
            <div className='text-white'
                style={{ height: '340px', backgroundColor: '#312e81' }}>
                <div className='text-center pt-28' style={{ fontFamily: 'inherit' }}>
                    <b className='font-bold tracking-wide -ml-1' style={{ fontSize: '42px' }}>Lifestyle</b>
                    <p className='tracking-wider font-semibold text-slate-150 mt-4'
                        style={{ fontSize: '16.5px' }}>
                        Science-backed wisdom to live your happiest, healthiest life.
                    </p>
                </div>
            </div>
            <div className='flex '
                style={{ width: '89.4%', marginLeft: '72.5px', marginBottom: '105px' }}>
                <div className='flex' style={{ width: '869.5px' }}>
                    <div className='mr-12'>
                        <Taggcol img={summer_wardrobe} title='24 Summer Wardrobe Staples That Are Simple, Sustainable, and Editor-Approved'
                            author="Lucas Sebastian" date='November 4, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                        <Taggcol img={coconut_oil} title='8 Homemade Coconut Oil Shampoo Recipes For Beautiful Hair'
                            author="Maggie Brandon" date='August 17, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                        <Taggcol img={sixDIYsummer} title='6 DIY Summer Crafts for Your Home, Outdoor, and Family Fun'
                            author="Camille d'Amelio" date='August 17, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                        <Taggcol img={five_things} title='What Are 5 Things in Your Kitchen You’d Never Be Caught Without?'
                            author="Camille d'Amelio" date='August 17, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristiq..." />
                    </div>
                    <div>
                        <Taggcol img={gorgeous_skin} title='Wake Up to Gorgeous Skin With the 10 Best Night Creams Available (According to the Experts)'
                            author="Oliver Coleman" date='August 11, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                        <Taggcol img={surprising_things} title='14 Surprising Things About Parenting in USA'
                            author="Eric Gordon" date='August 17, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                        <Taggcol img={classic_summer} title='Classic Summer Color and Print Wardrobe Combination'
                            author="Jennifer Ledford" date='August 17, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
                        <Taggcol img={dress_outfits} title='How To Dress Up & Dress Down Your Outfits'
                            author="Camille d'Amelio" date='August 11, 2022' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristiq..." />
                    </div>
                </div>
                <div className='mt-8' >
                    <Advertisement />
                </div>
            </div>
            <Recommended
                img1={evidence_based} title1="10 Evidence-Based Benefits of Green Tea" text1="Health & Wellness"
                img2={ai_artwork} title2="Why AI Artwork Is Totally Legit" text2="Technology"
                img3={five_things} title3="What Are 5 Things in Your Kitchen You’d Never Be Caught Without?" text3="Lifestyle"
            />
        </div>
    )
}

export default Author