'use client';
import React,  { useEffect } from 'react'

const HelloPresentation = () => {
  useEffect(() => {
    console.log("Hello portfolio")
  },
    [])
  return (
    <div className='flex border-2 border-blue-500'>
        <div className='p-6 w-min text-center float-left align-middle border-2 border-emerald-100'>
          <div className='p-10 text-justify'>
            <h2 className='font-lexendexa font-bold text-4xl tracking-widest antialiased'>Hello There.</h2>
          </div>
      </div>
    </div>
  )
}

export default HelloPresentation