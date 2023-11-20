'use client';
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const navData = [
  { name: 'home', path: '/' },
  { name: 'projects', path: '/projects' },
  { name: 'academic', path: '/academic' },
  { name: 'author', path: '/author' },
  { name: 'contact', path: '/contact' },

]

const NavigationContext = () => {
  const pathname = usePathname();
  const buttonlinkstyle = `sm:p-3 text-center rounded-[6px] text-black md:text-white hover:bg-white hover:text-black duration-500 hover:shadow-2xl sm:filter sm:backdrop-blur-xl`
  return (
    <div className='grid sm:flex md:bg-[#414141] w-full h-auto justify-center sm:justify-around items-center p-4 sm:p-8 z-50'>
      <div className='m-4 sm:m-0'>
        <h2 className='animate-blurred-fade-in font-lexendexa font-bold text-lg tracking-widest antialiased z-50 text-black md:text-white'>A.T.R.A</h2>
      </div>
      <div className='sm:flex flex-col sm:flex-row animate-expand-vertically gap-y-3 sm:gap-y-0 sm:space-x-8 font-Staatliches text-xlborder-[1px] sm:tracking-[0.2em] tracking-normal'>
        {
          navData.map((link, index) => {
            return <Link href={link.path} key={index} ><div className={twMerge(clsx(buttonlinkstyle, link.path == pathname && 'sm:translate-y-4 underline underline-offset-4 decoration-2'))}>{link.name}</div></Link>
          })
        }
      </div>
    </div>
  )
}

export default NavigationContext