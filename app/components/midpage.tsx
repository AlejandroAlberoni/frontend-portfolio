'use client';
import Image from 'next/image';
import React from 'react'

const MidPage = () => {
  const midtext_split: Array<String> = "This project is intended to be a front-end portfolio. Brainstormed the design using Figma. It is supposed to have some various stuff.".split(" ")

  return (
    <div className='flex mt-16 sm:mt-[10%] w-full h-fit'>
      <div className='flex w-9/10 sm:w-5/6 h-fit bg-[#bfbfbf] rounded-r-[100px] sm:rounded-r-full shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
        <div className='flex mr-10 mb-10 bg-[#414141] rounded-r-[100px] sm:rounded-r-full shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]'>
          <p className='text-white text-center p-6 sm:p-10 sm:m-16 font-Inter font-semibold text-[35px] leading-tight sm:leading-snug subpixel-antialiased'>
            This page is intended to be an exploratory project through web. Brainstormed the design using Figma. It is supposed to hace some diverse stuff. (Currently under construction 11/11/23)
          </p>
        </div>
      </div>
    </div>
  )
}


export default MidPage