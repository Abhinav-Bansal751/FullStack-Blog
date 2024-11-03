import React from 'react'

const Footer = () => {
  return (
    <div className='w-full text-white bg-black  mt-8 h-full px-8  md:px-[500px] py-8 flex items-center justify-start space-x-24'>
       <div className='flex flex-col text-nowrap cursor-pointer'>
          <p className='hover:underline hover:text-blue-500 '>Contact Us</p>
          <p className='hover:underline hover:text-blue-500 '>About</p>
          <p className='hover:underline hover:text-blue-500 '>Most Viewed</p>
          <p className='hover:underline hover:text-blue-500 '>Feautred Blogs</p>
       </div>

       <div className='flex flex-col text-nowrap cursor-pointer'>
          <p className='hover:underline hover:text-blue-500 '>Support</p>
          <p className='hover:underline hover:text-blue-500 '>Privacy Policy</p>
          <p className='hover:underline hover:text-blue-500 '>Terms & Conditions</p>
       </div>
    </div>
  )
}

export default Footer