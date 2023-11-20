'use client';
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavigationContext = () => {
  //const router = useRouter();
  //const pathname = router.pathname;
  const buttonlinkstyle = `sm:p-3 hover:rounded-[6px] duration-500 hover:bg-black hover:text-white hover:shadow-2xl`
  return (
    <div className='sm:flex w-full h-auto sm:justify-around p-4 sm:p-12 text-center items-center'>
      <div className='m-4 sm:m-0'>
        <h2 className='animate-blurred-fade-in font-lexendexa font-bold text-lg tracking-widest antialiased'>A.T.R.A</h2>
      </div>
      <div className='grid sm:flex sm:place-items-baseline animate-expand-vertically space-x-3 sm:space-x-8 font-Staatliches text-xl sm:tracking-[0.2em] tracking-normal'>
        <Link className='' href={"/"}><div className={`${buttonlinkstyle}`}>Home</div></Link>
        <Link className='' href={"/"}><div className={`${buttonlinkstyle}`}>Projects</div></Link>
        <Link className='' href={"/"}><div className={`${buttonlinkstyle}`}>Academic</div></Link>
        <Link className='' href={"/author"}><div className={`${buttonlinkstyle}`}>Author</div></Link>
        <Link className='' href={"/contact"}><div className={`${buttonlinkstyle}`}>Contact</div></Link>

      </div>
    </div>
  )
}

export default NavigationContext