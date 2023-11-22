import Image from 'next/image'
import React from 'react'

const show_attributtes = [
  { label: 'Education', info: 'Computer Science undegraduate at Federal University of Pelotas (UFPel).' },
  { label: 'Skills', info: 'My mostly used languages since my coding journey began are: Python, Javascript, Java, SQL, C. Had some simple projects with plain React and now learning NextJS.' },
  { label: 'Hobbies', info: 'Art enthusiast. Streetlifting and calisthenics amateur. I like nature.' },

]
const AuthorPage = () => {
  return (
    <div className='grid grid-cols-2 w-full h-[50vh] my-[15vh] ustify-center items-center'>
      <div className='grid place-items-center gap-y-4'>
        <Image className='' src={`/profile.png`} width={250} height={250} alt='profile_art'></Image>
        <p className='font-Kalam font-bold text-[20px] text-center'>A.T.R.A.</p>
        <div className='grid'>
          <h2 className='block font-lexendexa mt-10'>Social media</h2>
          <div className='flex justify-center space-x-3 p-3'>
            <a href='https://www.linkedin.com/in/alejandro-alberoni-8b95961b4' target='_blank'><Image className='transition ease-in-out duration-300 hover:bg-blue-400' src={'/logotipo-do-linkedin.png'} alt={'LinkedIN social media'} width={20} height={20}></Image></a>
            <a href='https://www.instagram.com/atralberoni/' target='_blank' ><Image className='transition ease-in-out duration-300 hover:bg-blue-500 rounded-[5px]' src={'/logotipo-do-instagram.png'} alt={'Instagram social media'} width={20} height={20}></Image></a>
          </div>
        </div>
      </div>
      <div className='grid place-items-center gap-y-10'>
        {
          show_attributtes.map((item, index) => {
            return (
              <div key='wrapper' className='relative h-[180px] w-[40vw]'>
                <div key={'rectangle1'} className='absolute flex h-[80%] w-[70%] bg-[#a7a7a7] font-Mitr rounded-md bottom-0 left-0'>
                  <div className=' left-0 -rotate-90'>
                    {item.label}
                  </div>
                </div>
                <div key={'rectangle2'} className='absolute flex place-items-center h-[80%] w-[70%] bg-[#414141] text-white font-Staatliches text-center rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] top-0 right-0 z-10'>
                  {item.info}
                </div>
              </div>
            )
          })
        }
      </div>
    </div >
  )
}

export default AuthorPage