'use client';
import React from 'react'

const MidPage = () => {
  const midtext_split: Array<String> = "This project is intended to be a front-end portfolio. Brainstormed the design using Figma. It is supposed to have some various stuff.".split(" ")

  return (
    <div className='flex inset-x-0 place-content-end'>
      <div className='p-4 mr-36 text-right w-2/4 min-h-[200px] font-Inter font-semibold text-[35px] leading-relaxed'>
          This project is intended to be a front-end portfolio. Brainstormed the design using Figma. It is supposed to have some various stuff.
      </div>

    </div>
  )
}

export default MidPage