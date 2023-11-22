import React from 'react'

import about_me from '../img/about_me.png'
import '../styles/style.css'

const AboutPageOne = () => {
  return (
    <div>
      <div className='flex items-center justify-start' style={{ width: '100%' }}>
        <h1 className='text-center mt-5 text-5xl text-slate-900 dark:text-slate-100' style={{ width: '50%' }}>
          About Me
        </h1>
        <img style={{ width: '50%', height: '100vh', objectFit: 'cover' }} src={about_me} alt={about_me} />
      </div>
      <div className='flex mt-20 ml-32' style={{ width: '84%' }} >
        <div className='mr-36'>
          <h2 className='text-4xl dark:text-slate-200 text-stone-950 font-semibold mb-4'>Hello,</h2>
          <h2 className='text-4xl dark:text-slate-200 text-stone-950 font-semibold'>This is Mully.</h2>
        </div>
        <p className='mr-6 font-medium dark:text-slate-300 text-stone-700 tracking-wide leading-7'
          style={{ fontSize: '16.4px', fontFamily: 'sans-serif', width: '358px' }}>
          Beginnings, had and working made versus or of this reedy, he if rationally the on he devoting legs,
          in opulence stiff than the ruining purer of supplies in richer way, writing as in have it by I at
          prudently, be gentlemen, a as to hills feel display can with to on. Hand-painted, in deep motivator,
          in that thoughts odd because by disciplined handout towards are lane.
        </p>
        <p className='font-medium dark:text-slate-300 text-stone-700 tracking-wide leading-7'
          style={{ fontSize: '16.4px', fontFamily: 'sans-serif', width: '361px' }}>
          Hardly watch refinements. To, the let unionized into were clear of wonder research each get velocity
          should will. Are he consider my of another your its have we the have he I to found people hills such
          text he the got return background kind caching and I has my read box emphasis what must proceeded
          impact than commitment
        </p>
      </div>
      <div className='image-instagram mt-14' style={{height: '429px'}}>
        <h2 className='text-4xl text-slate-50 -mt-5' style={{fontFamily: 'cursive'}}>
          Follow me on Instagram @instagram
        </h2>
      </div>
    </div>
  )
}

export default AboutPageOne