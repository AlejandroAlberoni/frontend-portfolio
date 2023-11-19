'use client';
import React from 'react'

const PARALLAX = () => {
  return (
    <div className='flex h-fit w-full scroll-smooth transition ease-in duration-1000 sm:filter sm:grayscale sm:hover:grayscale-0'>
      <img className='w-full object-cover h-[100vh] opacity-90' src='/abspaiting.png' alt='abstract paiting' />
      <div className='absolute flex h-full w-[50%] items-center'>
        <h2 className='font-Kalam text-right font-[900px] text-[80px] text-white [#414141]'>Hey, this is my portfolio.</h2>
      </div>
    </div>
  )
}
{/*<div className='w-full h-[400vh] bg-gradient-to-b from-[#E9E9E9] via-gray-800 to-black' />*/ }

export default PARALLAX