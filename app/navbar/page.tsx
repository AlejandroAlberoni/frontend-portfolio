import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute right-0 mt-[70px] border-[1px] rounded-l bg-[#54627B] border-emerald-900 translate-x-1'>
        <nav className='pt-8 pr-10'>
            <div className='flex p-4 py-8 space-x-8'>
                <button className=''>Academic Projects</button>
                <button className=''>Author</button>
                <button className=''>Contact</button>
            </div> 
        </nav>

    </div>
  )
}

export default Navbar