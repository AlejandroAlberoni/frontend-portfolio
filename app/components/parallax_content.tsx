'use client';
import React from 'react'

const PARALLAX = () => {
  return (
    <div className='flex h-fit w-full'>
      <img className='w-full h-[100vh] transition duration-500 filter grayscale hover:grayscale-0' src='/abspaiting.png' alt='abstract paiting'/>
      <h2 className='absolute h-full w-[50%] justify-center float-left font-[900px] text-[80px]'>Hey, this is my portfolio</h2>
    </div>
  )
}
{/*<div className='w-full h-[400vh] bg-gradient-to-b from-[#E9E9E9] via-gray-800 to-black' />*/}

export default PARALLAX