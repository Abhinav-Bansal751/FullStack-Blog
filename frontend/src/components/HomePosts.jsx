import React from 'react'

const HomePosts = () => {
  return (


        <div className=' flex mt-8 space-x-4 '>

                {/* left div */}

                <div className=' w-[20%]  h-[200px] flex justify-center items-center'>
            <img  
            className='h-full w-full object cover' 
            src='https://www.bleepstatic.com/content/hl-images/2024/08/12/thumb/170x170_north-korean-hackers.jpg' />
            </div>


                {/* right div */}
           
            <div className='flex flex-col w-[65%] '>
            <h1 className='text-xl  text-left font-bold md:mb-2 mb-1 md:text-2xl'>North Korean govt hackers linked to Play ransomware attack</h1>
            <div className='flex space-x-2 text-gray-500'>
                <p>10/31/2024</p>
                <p>12:11 AM IST</p>
                {/* to add date and time  */}
            </div>
            <p className='text-base text-left mt-2 sm:mt-4 md:text-lg'>The North Korean state-sponsored hacking group tracked as 'Andariel' has been linked to the Play ransomware operation, using the RaaS to work behind the scenes and evade sanctions.</p>
    </div>
    </div>
  )
}

export default HomePosts