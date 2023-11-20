import Image from 'next/image'
import React from 'react'

const AuthorPage = () => {
  return (
    <div className='flex w-full h-[50vh] justify-center items-center'>
      <div className='grid items-center gap-y-4'>
        <Image className='' src={`/profile.png`} width={250} height={250} alt='profile_art'></Image>
        <p className='font-Kalam font-bold text-[20px] text-center'>A.T.R.A.</p>
      </div>
    </div>
  )
}

export default AuthorPage