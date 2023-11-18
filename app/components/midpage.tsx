'use client';
import Image from 'next/image';
import React from 'react'

const MidPage = () => {
  const midtext_split: Array<String> = "This project is intended to be a front-end portfolio. Brainstormed the design using Figma. It is supposed to have some various stuff.".split(" ")

  return (
    <div className='grid mt-16 sm:mt-4 w-full h-[100vh] items-center gap-y-20'>
      <div className='flex w-9/10 sm:w-5/6 h-fit bg-[#bfbfbf] rounded-r-[100px] sm:rounded-r-full shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
        <div className='flex mr-10 mb-10 bg-[#414141] rounded-r-[100px] sm:rounded-r-full shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]'>
          <p className='text-white text-center p-6 sm:p-10 sm:m-16 font-Inter font-semibold text-[35px] leading-tight sm:leading-snug subpixel-antialiased'>
            This page is intended to be an exploratory project through web. Brainstormed the design using Figma. It is supposed to have some diverse stuff. (Currently under construction 17/11/23)
          </p>
        </div>
      </div>
      <div className='flex w-full h-[25vh] items-center justify-center font-Inter'>
        <div className='grid place-items-center gap-y-0 animate-bounce rounded-full bg-[#d7d7d7] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] h-20 w-20'>
          <Image src={'/seta-para-baixo.png'} alt='seta para baixo' width={50} height={50}></Image>
        </div>
      </div>
    </div>
  )
}


export default MidPage