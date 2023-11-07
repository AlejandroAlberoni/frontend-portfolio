'use client';
import Image from 'next/image';
import React from 'react'

const MidPage = () => {
  const midtext_split: Array<String> = "This project is intended to be a front-end portfolio. Brainstormed the design using Figma. It is supposed to have some various stuff.".split(" ")

  return (
    <div className='grid grid-cols-2 text-right items-center mt-[10%]'>
      <div className=''>
        <div className='text-left p-10 mx-20 animate-fade-in font-Inter font-semibold text-[35px] subpixel-antialiased '>
          This page is intended to be a front-end learning project. Brainstormed the design using Figma. It is supposed to have some various stuff.
        </div>
        <div className=''>Comp. Sci. student</div>
      </div>
      <div>
        <Image className="absolute z-[-2]" src="/midpage_fullres.png" height={500} width={500} alt='Web development 3D art'></Image>
      </div>
    </div>
  )
}

export default MidPage