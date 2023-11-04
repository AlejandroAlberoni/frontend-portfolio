'use client';
import React,  { useEffect } from 'react'

const TopWrapper = () => {
  useEffect(() => {
    console.log("Hello portfolio")
  },
    [])
  return (
    <div className='flex basis-full'>
      <div className='w-min p-24 text-justify'>
        <h2 className='font-lexendexa font-bold text-4xl tracking-widest antialiased'>Hello There.</h2>
      </div>
      <div className='absolute mt-20 ml-48 h-36 w-36 z-[-2] rounded-full bg-[#8A7A7A]' />
      <div className='opacity-75 absolute mt-28 ml-40 h-36 w-36 z-[-3] rounded-full bg-[#8A7A7A]' />
    </div>
  )
}

export default TopWrapper