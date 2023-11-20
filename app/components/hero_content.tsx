'use client';
import React from 'react'
import Image from 'next/image';

const HERO = () => {
  return (
    <div className='flex h-fit w-full scroll-smooth transition ease-in duration-1000 sm:filter sm:grayscale sm:hover:grayscale-0'>
      <img className='w-full object-cover h-[100vh] opacity-90' src='/abspaiting.png' alt='abstract paiting' />
      <div className='absolute flex h-full w-[50%] items-center'>
        <h2 className='font-Kalam text-center sm:text-right font-bold text-[96px] text-[#414141] tracking-tighter leading-tight'>Hey, this is my portfolio.</h2>
      </div>
    </div>
  )
}

export default HERO