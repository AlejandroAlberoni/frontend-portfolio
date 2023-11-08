'use client';
import Link from 'next/link';
import React from 'react'

const NavigationContext = () => {
  return (
    <div className='sm:flex w-full h-auto justify-between p-4 sm:p-12 text-center border-b-[2px] border-black'>
      <div className='m-4 sm:m-0'>
        <h2 className='lg:animate-blurred-fade-in font-lexendexa font-bold text-lg tracking-widest antialiased'>A.T.R.A</h2>
      </div>
      <div className='animate-expand-vertically sm:animate-none grid sm:flex space-x-3 sm:space-x-6 font-Staatliches text-xl sm:tracking-[0.2em] tracking-normal'>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Projects</Link>
        <Link href={"/"}>Academic</Link>
        <Link href={"/"}>Author</Link>
        <Link href={"/"}>Contact</Link>
      </div>
    </div>
  )
}

export default NavigationContext