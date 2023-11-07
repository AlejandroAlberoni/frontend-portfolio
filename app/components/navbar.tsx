'use client';
import React from 'react'

const NavigationContext = () => {
  return (
    <div className='flex w-full h-auto justify-between p-6'>
      <div className=''>
        <h2 className='animate-blurred-fade-in font-lexendexa font-bold text-lg tracking-widest antialiased'>A.T.R.A</h2>
      </div>
      <div className='flex font-Staatliches text-xl'>
        Home
        Projects
        Academic
        Author
        Contact
      </div>
    </div>
  )
}

export default NavigationContext