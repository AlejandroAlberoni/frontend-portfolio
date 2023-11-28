import Image from 'next/image'
import React from 'react'

const ContactPage = () => {
  const adiawd = 'bg-[#4986BD]'
  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center my-10 md:my-20 gap-3 md:gap-10'>
        <div className='text-center font-Kalam font-bold text-[40px] tracking-widest'> Send me a <span className='inline-block text-[#4986BD] underline'>message</span>.</div>
          <Image className='h-40 w-40 md:h-52 md:w-52' src={'/contactimage.png'} width={200} height={200} alt='Contact image'></Image>
        <div className='flex space-y-6 bg-white rounded-[30px] p-10 shadow-lg'>
          <form action="" className='grid space-y-6 font-Inter'>
            <input className='block bg-[#D7E0ED] rounded-[12px] p-4 ring-2 ring-blue-500/50 accent-blue-500' placeholder='Name'></input>
            <input className='block bg-[#D7E0ED] rounded-[12px] p-4 ring-2 ring-blue-500/50 accent-blue-500' placeholder='Email'></input>
            <textarea className='block resize bg-[#D7E0ED] rounded-[12px] p-4 ring-2 ring-blue-500/50 accent-blue-500' placeholder='Message'></textarea>
            <button className=' rounded-[23px] bg-[#4986BD] p-2 m-4 font-lexendexa text-white font-bold text-xl'>
              Submit
              <Image className='inline-block mx-2' src={'/seta_direita.png'} width={10} height={10} alt="Send info arrow"></Image>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage