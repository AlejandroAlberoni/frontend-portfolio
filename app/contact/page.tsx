import Image from 'next/image'
import React from 'react'

const ContactPage = () => {
  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center my-20 gap-10'>
        <div className='font-Kalam font-bold text-[40px] tracking-widest'> Send me a <span className='text-[#4986BD] underline'>message</span>.</div>
        <form action="" className='grid space-y-6'>
          <input className='rounded-[12px] p-4 focus:border-[1px] focus:border-[#4986BD]' placeholder='Name'></input>
          <input className='rounded-[12px] p-4 ' placeholder='Email'></input>
          <input className='rounded-[12px] p-4 ' placeholder='Message'></input>
          <div className='space-x-2 bg-[#4986BD] rounded-[23px] text-center'>
            <button className='font-lexendexa text-white'>Submit</button>
            <Image className='inline-block' src={'/seta_direita.png'} width={10} height={10} alt="Send info arrow"></Image>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactPage