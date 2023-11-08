'use client';
import Image from 'next/image';
import React from 'react'

const MidPage = () => {
  const midtext_split: Array<String> = "This project is intended to be a front-end portfolio. Brainstormed the design using Figma. It is supposed to have some various stuff.".split(" ")

  return (
    <div className='grid sm:grid-cols-2 place-items-center mt-[10%]'>
      <div className=' text-center sm:text-left p-10 sm:mx-20 font-Inter font-semibold text-[35px] leading-tight lg:leading-snug subpixel-antialiased '>
        This page is intended to be a front-end learning project. Brainstormed the design using Figma. It is supposed to have some various stuff.
      </div>
      <div>
        <Image className="mt:absolute mt:y-[20] z-[-2]" src="/webpage_dalle.png" height={500} width={500} alt='Web development 3D art'></Image>
      </div>
    </div>
  )
}

export default MidPage