'use client';
import Link from 'next/link';
import React from 'react'

const NavigationContext = () => {
  return (
    <div className='sm:flex w-full h-auto justify-between p-4 sm:p-12 text-center items-center'>
      <div className='m-4 sm:m-0'>
        <h2 className='lg:animate-blurred-fade-in font-lexendexa font-bold text-lg tracking-widest antialiased'>A.T.R.A</h2>
      </div>
      <div className='grid sm:flex sm:place-items-baseline mt:animate-expand-vertically sm:animate-none space-x-3 sm:space-x-8 font-Staatliches text-xl sm:tracking-[0.2em] tracking-normal'>
        <Link className='p-3 hover:border-slate-200 hover:rounded-[6px] duration-500 hover:bg-black hover:text-white' href={"/"}>Home</Link>
        <Link className='p-3 hover:border-slate-200 hover:rounded-[6px] duration-500 hover:bg-black hover:text-white' href={"/"}>Projects</Link>
        <Link className='p-3 hover:border-slate-200 hover:rounded-[6px] duration-500 hover:bg-black hover:text-white' href={"/"}>Academic</Link>
        <Link className='p-3 hover:border-slate-200 hover:rounded-[6px] duration-500 hover:bg-black hover:text-white' href={"/"}>Author</Link>
        <Link className='p-3 hover:border-slate-200 hover:rounded-[6px] duration-500 hover:bg-black hover:text-white' href={"/"}>Contact</Link>
      </div>
    </div>
  )
}

export default NavigationContext