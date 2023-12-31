import React from 'react'
import Taggcolstyle from '../../components/Taggcolstyle'
import Recommended from '../../components/Recommended'

import summer_wardrobe from '../img/summer_wardrobe.png'
import coconut_oil from '../img/coconut_oil.png'

import sixDIYsummer from '../img/sixDIYsummer.png'
import five_things from '../img/five_things.png'
import gorgeous_skin from '../img/gorgeous_skin.png'

import surprising_things from '../img/surprising_things.png'

import classic_summer from '../img/classic_summer.png'
import dress_outfits from '../img/dress_outfits.png'

import lucas_sebastian from '../img/lucas_sebastian.png'
import maggie_brandon from '../img/maggie_brandon.png'
import camille_amelio from '../img/camille_amelio.png'
import oliver_coleman from '../img/oliver_coleman.png'
import eric_gordon from '../img/eric_gordon.png'
import jennifer_ledford from '../img/jennifer_ledford.png'

import paleo_diet from '../img/paleo_diet.png'
import ai_artwork from '../img/ai_artwork.png'
import design_book from '../img/design_book.png'

const Archive = () => {
    return (
        <div className='dark:bg-neutral-950 -mt-[25px]'>
            <div style={{ height: '288px', paddingTop: '95px', borderBottom: '1px solid lightgrey' }}>
                <h1 className='font-semibold tracking-wide dark:text-slate-100'
                    style={{ fontSize: '44px', fontFamily: 'serif', marginLeft: '74px' }}>
                    Lifestyle
                </h1>
                <p className='mt-6 tracking-wide font-medium text-stone-600 dark:text-slate-200'
                    style={{ fontSize: '16.4px', marginLeft: '74px' }}>
                    Science-backed wisdom to live your happiest, healthiest life.
                </p>
            </div>
            <div className='flex pb-16' style={{ marginLeft: '75px' }}>
                <div style={{ marginRight: '51px' }}>
                    <Taggcolstyle
                        img={summer_wardrobe}
                        title='24 Summer Wardrobe Staples That Are Simple, Sustainable, and Editor-Approved'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                        img_author={lucas_sebastian}
                        author='Lucas Sebastian'
                    />
                    <Taggcolstyle
                        img={coconut_oil}
                        title='8 Homemade Coconut Oil Shampoo Recipes For Beautiful Hair'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                        img_author={maggie_brandon}
                        author='Maggie Brandon'
                    />
                </div>
                <div style={{ marginRight: '51px' }}>
                    <Taggcolstyle
                        img={sixDIYsummer}
                        title='6 DIY Summer Crafts for Your Home, Outdoor, and Family Fun'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                        img_author={camille_amelio}
                        author="Camille d'Amelio"
                    />
                    <Taggcolstyle
                        img={five_things}
                        title='What Are 5 Things in Your Kitchen You’d Never Be Caught Without?'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                        img_author={camille_amelio}
                        author="Camille d'Amelio"
                    />
                    <Taggcolstyle
                        img={gorgeous_skin}
                        title='Wake Up to Gorgeous Skin With the 10 Best Night Creams Available'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                        img_author={oliver_coleman}
                        author='Oliver Coleman'
                    />
                </div>
                <div>
                    <Taggcolstyle
                        img={surprising_things}
                        title='14 Surprising Things About Parenting in USA'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                        img_author={eric_gordon}
                        author='Eric Gordon'
                    />
                    <Taggcolstyle
                        img={classic_summer}
                        title='Classic Summer Color and Print Wardrobe Combination'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                        img_author={jennifer_ledford}
                        author='Jennifer Ledford'
                    />
                    <Taggcolstyle
                        img={dress_outfits}
                        title='How To Dress Up & Dress Down Your Outfits'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
                        img_author={camille_amelio}
                        author="Camille d'Amelio"
                    />
                </div>
            </div>
            <Recommended
                img1={paleo_diet} title1="The Beginner’s Guide To The Paleo Diet" text1="Health & Wellness"
                img2={ai_artwork} title2="Why AI Artwork Is Totally Legit" text2="Technology"
                img3={design_book} title3="5 Design Books You Can Get This Summer" text3="Home Decor"
            />
        </div>
    )
}

export default Archive