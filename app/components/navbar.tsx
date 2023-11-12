'use client';
import Link from 'next/link';
import React from 'react'

const NavigationContext = () => {
  return (
    <div className='sm:flex w-full h-auto sm:justify-between p-4 sm:p-12 text-center items-center'>
      <div className='m-4 sm:m-0'>
        <h2 className='animate-blurred-fade-in font-lexendexa font-bold text-lg tracking-widest antialiased'>A.T.R.A</h2>
      </div>
      <div className='grid sm:flex sm:place-items-baseline animate-expand-vertically space-x-3 sm:space-x-8 font-Staatliches text-xl sm:tracking-[0.2em] tracking-normal'>
        <Link className='sm:p-3 hover:rounded-[6px] duration-500 hover:bg-black hover:text-white hover:shadow-2xl' href={"/"}>Home</Link>
        <Link className='sm:p-3 hover:rounded-[6px] duration-500 hover:bg-black hover:text-white hover:shadow-2xl' href={"/"}>Projects</Link>
        <Link className='sm:p-3 hover:rounded-[6px] duration-500 hover:bg-black hover:text-white hover:shadow-2xl' href={"/"}>Academic</Link>
        <Link className='sm:p-3 hover:rounded-[6px] duration-500 hover:bg-black hover:text-white hover:shadow-2xl' href={"/"}>Author</Link>
        <Link className='sm:p-3 hover:rounded-[6px] duration-500 hover:bg-black hover:text-white hover:shadow-2xl' href={"/"}>Contact</Link>
      </div>
    </div>
  )
}

export default NavigationContext