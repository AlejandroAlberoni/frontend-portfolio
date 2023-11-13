'use client';
import Image from 'next/image';
import React from 'react'

const PARALLAX = () => {
  return (
    <div className='grid'>
        <div className='w-full h-[300vh] bg-gradient-to-b from-[#E9E9E9] via-gray-800 to-black' />
        <div className='w-full h-[100vh] bg-black scrollbar-none' />
        <Image src={'/space_earth.jpg'} width={1440} height={900} alt="Night stars"></Image>
    </div>
  )
}

export default PARALLAX