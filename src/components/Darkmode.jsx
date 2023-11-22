import React, { useEffect, useState } from 'react'
import { BsSun } from 'react-icons/bs'
import { BsFillMoonFill } from 'react-icons/bs'

const Darkmode = () => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark")
    }
  }, [dark])
  function handleDark() {
    setDark(!dark)
  }
  return (
    <div>
      <div className='w-[44px] h-[44px] rounded-full hover:shadow-none z-50
         hover:bg-black transition-all duration-300 ease-in-out cursor-pointer 
         animate-bounce fixed mt-[413px] ml-[19px] text-zinc-600 hover:text-slate-50 bg-slate-50'
        style={{ boxShadow: 'rgba(0, 0, 0, 0.22) 0px 2px 16px' }}
        onClick={handleDark}>
        {
          dark ?
            <BsSun className='w-[22px] h-[22px] ml-[11.48px] mt-[11px] text-zinc-800 hover:text-slate-50' /> :
            <BsFillMoonFill className='w-[22px] h-[22px] ml-[11.48px] mt-[11px] text-zinc-600 hover:text-slate-50' />
        }
      </div>
    </div>
  )
}

export default Darkmode