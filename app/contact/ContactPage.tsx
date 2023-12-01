import Image from 'next/image';
import React from 'react';

export const ContactPage = () => {
  const adiawd = 'bg-[#4986BD]';
  return (
    <div className='flex flex-col items-center justify-center md:space-y-10 py-4 md:pt-10 mt-4 md:mt-10'>
      <div className='text-center font-Kalam font-bold text-[32px] md:text-[40px] tracking-wide md:tracking-widest'> Send me a <span className='inline-block text-[#4986BD] underline'>message</span>.</div>
      <div className='w-[90%] md:w-[50%] bg-white rounded-[30px] p-4 md:p-10 shadow-lg'>
        <div className='flex flex-col sm:flex-row justify-center sm:justify-around items-center'>
          <Image className='inline-block h-28 w-28 md:h-52 md:w-52' src={'/contactimage.png'} width={200} height={200} alt='Contact image'></Image>
          <form action="" className='inline-grid space-y-6 font-Inter' method='POST'>
            <div className='relative'>
              <input className='peer border-b-2 p-2 outline-none border-gray-300 focus:border-[#4986BD] placeholder-transparent' placeholder='Name' type='text' id='Name' required></input>
              <label className='absolute -top-4 font-bold text-[12px] left-0 p-2 pointer-events-none text-gray-400 transition-all ease-linear peer-focus:-top-4 peer-placeholder-shown:top-2 peer-focus:text-[#4986BD] peer-focus:text-[12px] peer-placeholder-shown:text-[16px] duration-300'>Name</label>
            </div>
            <div className='relative'>
              <input className='peer border-b-2 p-2 outline-none border-gray-300 focus:border-[#4986BD] placeholder-transparent' placeholder='Email' type='Email' id='Email' required></input>
              <label className='absolute -top-4 font-bold text-[12px] left-0 p-2 pointer-events-none text-gray-400 transition-all ease-linear peer-focus:-top-4 peer-placeholder-shown:top-2 peer-focus:text-[#4986BD] peer-focus:text-[12px] peer-placeholder-shown:text-[16px] duration-300'>Email</label>
            </div>
            <div className='relative'>
              <textarea className='peer border-b-2 p-2 outline-none border-gray-300 focus:border-[#4986BD] placeholder-transparent resize-none overflow-hidden' placeholder='Message' id='Message' required></textarea>
              <label className='absolute -top-4 font-bold text-[12px] left-0 p-2 pointer-events-none text-gray-400 transition-all ease-linear peer-focus:-top-4 peer-placeholder-shown:top-7 peer-focus:text-[#4986BD] peer-focus:text-[12px] peer-placeholder-shown:text-[16px] duration-300'>Message</label>
            </div>
          </form>
        </div>
        <div className='bottom-0 flex justify-center py-4 md:py-0 md:pt-10'>
          <button className='group flex items-baseline p-3 rounded-[23px] transition ease-in-out duration-150 bg-[#4986BD] hover:bg-[#497295] font-lexendexa text-white font-bold text-xl'>
            <span>Submit</span>
            <Image className='mx-2 duration-150 ease-linear group-hover:translate-x-2' src={'/seta_direita.png'} width={15} height={15} alt="Send info arrow"></Image>
          </button>
        </div>
      </div>
    </div>
  );
};
